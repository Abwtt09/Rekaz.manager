// Rekaz Subscription Plans & Feature Gating
const SubscriptionPlans = {
  plans: {
    free: {
      name: { ar: 'مجانية', en: 'Free' },
      priceMonthly: 0,
      priceYearly: 0,
      limits: {
        accounts: 20,
        monthlyEntries: 30,
        monthlyDocuments: 10,
        users: 1,
        extraUserPrice: 0,
        reports: ['trial_balance'],
        ai: false,
        pdfBranding: false,
        multiCurrency: false,
        bankReconciliation: false,
      }
    },
    basic: {
      name: { ar: 'أساسية', en: 'Basic' },
      priceMonthly: 15,
      priceYearly: 165, // 11 months = 1 month free
      limits: {
        accounts: 100,
        monthlyEntries: 200,
        monthlyDocuments: 100,
        users: 3,
        extraUserPrice: 5,
        reports: ['trial_balance', 'income_statement', 'balance_sheet'],
        ai: false,
        pdfBranding: true,
        multiCurrency: false,
        bankReconciliation: false,
      }
    },
    pro: {
      name: { ar: 'احترافية', en: 'Pro' },
      priceMonthly: 25,
      priceYearly: 275, // 11 months = 1 month free
      limits: {
        accounts: -1,
        monthlyEntries: -1,
        monthlyDocuments: -1,
        users: 10,
        extraUserPrice: 3,
        reports: ['trial_balance', 'income_statement', 'balance_sheet', 'cash_flow'],
        ai: true,
        pdfBranding: true,
        multiCurrency: true,
        bankReconciliation: true,
      }
    }
  },

  currentPlan: 'free',
  isOwner: false,
  subscription: null,

  async loadPlan(companyId) {
    try {
      const doc = await db.collection('companies').doc(companyId).get();
      if (doc.exists) {
        const data = doc.data();

        // Check if this is the app owner's company
        if (data.isOwner === true) {
          this.isOwner = true;
          this.currentPlan = 'pro';
          this.subscription = {
            plan: 'pro',
            status: 'active',
            billing: 'lifetime',
            isOwner: true
          };
          return this.currentPlan;
        }

        const sub = data.subscription || {};
        this.subscription = sub;

        // Check subscription expiry
        if (sub.plan && sub.plan !== 'free') {
          if (sub.status === 'active' && sub.endDate) {
            const endDate = sub.endDate.toDate ? sub.endDate.toDate() : new Date(sub.endDate);
            if (endDate < new Date()) {
              // Subscription expired — downgrade to free
              this.currentPlan = 'free';
              this.subscription.status = 'expired';
              // Update Firestore
              await db.collection('companies').doc(companyId).update({
                'subscription.status': 'expired',
                'subscription.expiredAt': firebase.firestore.FieldValue.serverTimestamp()
              });
              return this.currentPlan;
            }
          }
          this.currentPlan = sub.plan;
        } else {
          this.currentPlan = 'free';
        }
      }
    } catch (e) {
      console.error('Error loading plan:', e);
      this.currentPlan = 'free';
    }
    return this.currentPlan;
  },

  getPlan() {
    return this.plans[this.currentPlan];
  },

  getLimit(key) {
    const plan = this.getPlan();
    return plan?.limits?.[key];
  },

  canAccess(feature) {
    const limit = this.getLimit(feature);
    if (typeof limit === 'boolean') return limit;
    if (limit === -1) return true;
    return limit > 0;
  },

  async checkLimit(companyId, type) {
    const limit = this.getLimit(type);
    if (limit === -1) return { allowed: true, current: 0, limit: -1 };

    let current = 0;
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    try {
      if (type === 'accounts') {
        const snap = await db.collection('companies').doc(companyId)
          .collection('accounts').get();
        current = snap.size;
      } else if (type === 'monthlyEntries') {
        const snap = await db.collection('companies').doc(companyId)
          .collection('journalEntries')
          .where('date', '>=', monthStart.toISOString())
          .get();
        current = snap.size;
      } else if (type === 'monthlyDocuments') {
        let total = 0;
        for (const col of ['invoices', 'receipts', 'payments', 'quotations']) {
          const snap = await db.collection('companies').doc(companyId)
            .collection(col)
            .where('date', '>=', monthStart.toISOString())
            .get();
          total += snap.size;
        }
        current = total;
      }
    } catch (e) {
      console.error('Error checking limit:', e);
    }

    return { allowed: current < limit, current, limit };
  },

  canAccessReport(reportType) {
    const reports = this.getLimit('reports');
    return reports?.includes(reportType) || false;
  },

  getUpgradeMessage(feature) {
    const lang = i18n.currentLang;
    const planNames = {
      free: this.plans.free.name[lang],
      basic: this.plans.basic.name[lang],
      pro: this.plans.pro.name[lang]
    };
    let requiredPlan = 'basic';
    if (['ai', 'multiCurrency', 'bankReconciliation', 'cash_flow'].some(f => f === feature)) {
      requiredPlan = 'pro';
    }
    return lang === 'ar'
      ? `هذه الميزة تتطلب باقة ${planNames[requiredPlan]} أو أعلى`
      : `This feature requires ${planNames[requiredPlan]} plan or higher`;
  },

  // Get days remaining in subscription
  getDaysRemaining() {
    if (this.isOwner) return Infinity;
    if (!this.subscription?.endDate) return 0;
    const endDate = this.subscription.endDate.toDate ? this.subscription.endDate.toDate() : new Date(this.subscription.endDate);
    const diff = endDate - new Date();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  },

  // Get subscription status text
  getStatusText(lang) {
    const isAr = lang === 'ar';
    if (this.isOwner) return isAr ? 'مالك التطبيق — مدى الحياة' : 'App Owner — Lifetime';
    if (this.currentPlan === 'free') return isAr ? 'مجانية' : 'Free';

    const status = this.subscription?.status;
    if (status === 'expired') return isAr ? 'منتهي — يرجى التجديد' : 'Expired — Please renew';

    const days = this.getDaysRemaining();
    if (days <= 7) return isAr ? `⚠️ متبقي ${days} أيام` : `⚠️ ${days} days left`;
    if (days <= 30) return isAr ? `متبقي ${days} يوم` : `${days} days left`;

    const billing = this.subscription?.billing;
    return billing === 'yearly'
      ? (isAr ? 'اشتراك سنوي' : 'Yearly Plan')
      : (isAr ? 'اشتراك شهري' : 'Monthly Plan');
  }
};

window.SubscriptionPlans = SubscriptionPlans;
