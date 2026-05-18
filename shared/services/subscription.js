import { db, doc, getDoc, updateDoc, serverTimestamp, setDoc } from './firebase-config.js';

export const PLANS = {
  free: { id:'free', name:{en:'Free',ar:'مجانية'}, priceMonthly:0, priceYearly:0,
    priceLabel:{en:'Free',ar:'مجانية'},
    features:{maxUsers:1,maxTransactions:30,maxAccounts:20},
    featureList:{
      en:['1 User','20 Accounts','30 Entries/month','10 Documents/month','Trial Balance only'],
      ar:['مستخدم واحد','20 حساب','30 قيد/شهر','10 مستندات/شهر','ميزان المراجعة فقط']
    }},
  basic: { id:'basic', name:{en:'Basic',ar:'أساسية'}, priceMonthly:15, priceYearly:165,
    priceLabel:{en:'15 OMR/mo',ar:'15 ر.ع./شهر'},
    priceLabelYearly:{en:'165 OMR/year (Save 1 month!)',ar:'165 ر.ع./سنة (وفّر شهر!)'},
    features:{maxUsers:3,maxTransactions:200,maxAccounts:100,extraUserPrice:5},
    featureList:{
      en:['3 Users (+5 OMR/extra)','100 Accounts','200 Entries/month','100 Documents/month','Income Statement + Balance Sheet','PDF Export with Logo','Email support'],
      ar:['3 مستخدمين (+5 ر.ع./إضافي)','100 حساب','200 قيد/شهر','100 مستند/شهر','قائمة الدخل + الميزانية','تصدير PDF مع الشعار','دعم بالبريد']
    }},
  pro: { id:'pro', name:{en:'Professional',ar:'احترافية'}, priceMonthly:25, priceYearly:275,
    priceLabel:{en:'25 OMR/mo',ar:'25 ر.ع./شهر'},
    priceLabelYearly:{en:'275 OMR/year (Save 1 month!)',ar:'275 ر.ع./سنة (وفّر شهر!)'},
    features:{maxUsers:10,maxTransactions:-1,maxAccounts:-1,extraUserPrice:3},
    featureList:{
      en:['10 Users (+3 OMR/extra)','Unlimited Accounts & Entries','All Financial Reports','AI Financial Assistant','Full PDF (Logo + Signature + Stamp)','Multi-Currency','Priority support'],
      ar:['10 مستخدمين (+3 ر.ع./إضافي)','حسابات وقيود غير محدودة','جميع التقارير المالية','المساعد المالي الذكي','PDF كامل (شعار + توقيع + ختم)','متعدد العملات','دعم ذو أولوية']
    }}
};

export const SubscriptionService = {
  getPlans() { return PLANS; },
  async getSubscription(cid) {
    try {
      const s = await getDoc(doc(db, 'companies', cid));
      if (!s.exists()) return { planId: 'free', plan: PLANS.free, error: null };
      const data = s.data();
      if (data.isOwner) return { planId: 'pro', plan: PLANS.pro, isOwner: true, error: null };
      const sub = data.subscription || {};
      const p = sub.plan || data.subscriptionPlan || 'free';
      if (p !== 'free' && sub.endDate) {
        const end = sub.endDate.toDate ? sub.endDate.toDate() : new Date(sub.endDate);
        if (end < new Date()) return { planId: 'free', plan: PLANS.free, expired: true, error: null };
      }
      return { planId: p, plan: PLANS[p] || PLANS.free, subscription: sub, error: null };
    }
    catch (e) { return { planId: 'free', plan: PLANS.free, error: e.message }; }
  },
  async changePlan(cid, planId, billing) {
    try {
      if (!PLANS[planId]) throw new Error('Invalid plan');
      const now = new Date();
      const endDate = billing === 'yearly'
        ? new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
        : new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
      await updateDoc(doc(db, 'companies', cid), {
        'subscription.plan': planId,
        'subscription.billing': billing || 'monthly',
        'subscription.status': 'active',
        'subscription.startDate': serverTimestamp(),
        'subscription.endDate': endDate,
        'subscription.updatedAt': serverTimestamp()
      });
      return { success: true, plan: PLANS[planId] };
    }
    catch (e) { return { success: false, error: e.message }; }
  },
  checkTransactionLimit(planId, count) {
    const p = PLANS[planId];
    if (!p) return false;
    return p.features.maxTransactions === -1 || count < p.features.maxTransactions;
  }
};
