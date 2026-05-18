// Rekaz Accounting Engine - IFRS Compliant
const AccountingEngine = {

  // ===================== IFRS DEFAULT CHART OF ACCOUNTS =====================
  defaultAccounts: [
    // 1xxx - Assets
    { code: '1000', nameAr: 'الأصول', nameEn: 'Assets', type: 'assets', parentCode: null, level: 1, nature: 'debit', isHeader: true },
    { code: '1100', nameAr: 'أصول متداولة', nameEn: 'Current Assets', type: 'assets', parentCode: '1000', level: 2, nature: 'debit', isHeader: true },
    { code: '1101', nameAr: 'النقد وما يعادله', nameEn: 'Cash & Cash Equivalents', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },
    { code: '1102', nameAr: 'الصندوق', nameEn: 'Petty Cash', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },
    { code: '1103', nameAr: 'البنك', nameEn: 'Bank', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },
    { code: '1110', nameAr: 'الذمم المدينة', nameEn: 'Accounts Receivable', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },
    { code: '1111', nameAr: 'أوراق القبض', nameEn: 'Notes Receivable', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },
    { code: '1120', nameAr: 'المخزون', nameEn: 'Inventory', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },
    { code: '1130', nameAr: 'مصروفات مدفوعة مقدماً', nameEn: 'Prepaid Expenses', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },
    { code: '1140', nameAr: 'ضريبة القيمة المضافة - مدخلات', nameEn: 'VAT Input', type: 'assets', parentCode: '1100', level: 3, nature: 'debit' },

    { code: '1200', nameAr: 'أصول غير متداولة', nameEn: 'Non-Current Assets', type: 'assets', parentCode: '1000', level: 2, nature: 'debit', isHeader: true },
    { code: '1201', nameAr: 'الأراضي', nameEn: 'Land', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },
    { code: '1202', nameAr: 'المباني', nameEn: 'Buildings', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },
    { code: '1203', nameAr: 'الآلات والمعدات', nameEn: 'Machinery & Equipment', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },
    { code: '1204', nameAr: 'الأثاث والتجهيزات', nameEn: 'Furniture & Fixtures', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },
    { code: '1205', nameAr: 'وسائل النقل', nameEn: 'Vehicles', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },
    { code: '1206', nameAr: 'أجهزة الحاسب', nameEn: 'Computer Equipment', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },
    { code: '1210', nameAr: 'مجمع الإهلاك', nameEn: 'Accumulated Depreciation', type: 'assets', parentCode: '1200', level: 3, nature: 'credit' },
    { code: '1220', nameAr: 'أصول غير ملموسة', nameEn: 'Intangible Assets', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },
    { code: '1230', nameAr: 'استثمارات طويلة الأجل', nameEn: 'Long-term Investments', type: 'assets', parentCode: '1200', level: 3, nature: 'debit' },

    // 2xxx - Liabilities
    { code: '2000', nameAr: 'الالتزامات', nameEn: 'Liabilities', type: 'liabilities', parentCode: null, level: 1, nature: 'credit', isHeader: true },
    { code: '2100', nameAr: 'التزامات متداولة', nameEn: 'Current Liabilities', type: 'liabilities', parentCode: '2000', level: 2, nature: 'credit', isHeader: true },
    { code: '2101', nameAr: 'الذمم الدائنة', nameEn: 'Accounts Payable', type: 'liabilities', parentCode: '2100', level: 3, nature: 'credit' },
    { code: '2102', nameAr: 'أوراق الدفع', nameEn: 'Notes Payable', type: 'liabilities', parentCode: '2100', level: 3, nature: 'credit' },
    { code: '2103', nameAr: 'مصروفات مستحقة', nameEn: 'Accrued Expenses', type: 'liabilities', parentCode: '2100', level: 3, nature: 'credit' },
    { code: '2104', nameAr: 'إيرادات مقبوضة مقدماً', nameEn: 'Unearned Revenue', type: 'liabilities', parentCode: '2100', level: 3, nature: 'credit' },
    { code: '2105', nameAr: 'ضريبة القيمة المضافة - مخرجات', nameEn: 'VAT Output', type: 'liabilities', parentCode: '2100', level: 3, nature: 'credit' },
    { code: '2106', nameAr: 'رواتب مستحقة', nameEn: 'Salaries Payable', type: 'liabilities', parentCode: '2100', level: 3, nature: 'credit' },
    { code: '2107', nameAr: 'قروض قصيرة الأجل', nameEn: 'Short-term Loans', type: 'liabilities', parentCode: '2100', level: 3, nature: 'credit' },

    { code: '2200', nameAr: 'التزامات غير متداولة', nameEn: 'Non-Current Liabilities', type: 'liabilities', parentCode: '2000', level: 2, nature: 'credit', isHeader: true },
    { code: '2201', nameAr: 'قروض طويلة الأجل', nameEn: 'Long-term Loans', type: 'liabilities', parentCode: '2200', level: 3, nature: 'credit' },
    { code: '2202', nameAr: 'مخصص مكافأة نهاية الخدمة', nameEn: 'End of Service Benefits', type: 'liabilities', parentCode: '2200', level: 3, nature: 'credit' },

    // 3xxx - Equity
    { code: '3000', nameAr: 'حقوق الملكية', nameEn: 'Equity', type: 'equity', parentCode: null, level: 1, nature: 'credit', isHeader: true },
    { code: '3100', nameAr: 'رأس المال', nameEn: 'Capital', type: 'equity', parentCode: '3000', level: 2, nature: 'credit' },
    { code: '3200', nameAr: 'الاحتياطي النظامي', nameEn: 'Legal Reserve', type: 'equity', parentCode: '3000', level: 2, nature: 'credit' },
    { code: '3300', nameAr: 'أرباح مبقاة', nameEn: 'Retained Earnings', type: 'equity', parentCode: '3000', level: 2, nature: 'credit' },
    { code: '3400', nameAr: 'أرباح/خسائر العام', nameEn: 'Current Year Earnings', type: 'equity', parentCode: '3000', level: 2, nature: 'credit' },
    { code: '3500', nameAr: 'حساب جاري الشريك', nameEn: 'Partner Current Account', type: 'equity', parentCode: '3000', level: 2, nature: 'credit' },

    // 4xxx - Revenue
    { code: '4000', nameAr: 'الإيرادات', nameEn: 'Revenue', type: 'revenue', parentCode: null, level: 1, nature: 'credit', isHeader: true },
    { code: '4100', nameAr: 'إيرادات المبيعات', nameEn: 'Sales Revenue', type: 'revenue', parentCode: '4000', level: 2, nature: 'credit' },
    { code: '4101', nameAr: 'مبيعات بضاعة', nameEn: 'Goods Sales', type: 'revenue', parentCode: '4100', level: 3, nature: 'credit' },
    { code: '4102', nameAr: 'إيرادات خدمات', nameEn: 'Service Revenue', type: 'revenue', parentCode: '4100', level: 3, nature: 'credit' },
    { code: '4103', nameAr: 'مردودات ومسموحات مبيعات', nameEn: 'Sales Returns & Allowances', type: 'revenue', parentCode: '4100', level: 3, nature: 'debit' },
    { code: '4104', nameAr: 'خصم مبيعات', nameEn: 'Sales Discount', type: 'revenue', parentCode: '4100', level: 3, nature: 'debit' },
    { code: '4200', nameAr: 'إيرادات أخرى', nameEn: 'Other Income', type: 'revenue', parentCode: '4000', level: 2, nature: 'credit', isHeader: true },
    { code: '4201', nameAr: 'إيرادات استثمارات', nameEn: 'Investment Income', type: 'revenue', parentCode: '4200', level: 3, nature: 'credit' },
    { code: '4202', nameAr: 'أرباح بيع أصول', nameEn: 'Gain on Asset Sale', type: 'revenue', parentCode: '4200', level: 3, nature: 'credit' },
    { code: '4203', nameAr: 'إيرادات متنوعة', nameEn: 'Miscellaneous Income', type: 'revenue', parentCode: '4200', level: 3, nature: 'credit' },

    // 5xxx - Expenses
    { code: '5000', nameAr: 'المصروفات', nameEn: 'Expenses', type: 'expenses', parentCode: null, level: 1, nature: 'debit', isHeader: true },
    { code: '5100', nameAr: 'تكلفة المبيعات', nameEn: 'Cost of Sales', type: 'expenses', parentCode: '5000', level: 2, nature: 'debit', isHeader: true },
    { code: '5101', nameAr: 'تكلفة بضاعة مباعة', nameEn: 'Cost of Goods Sold', type: 'expenses', parentCode: '5100', level: 3, nature: 'debit' },
    { code: '5102', nameAr: 'مشتريات', nameEn: 'Purchases', type: 'expenses', parentCode: '5100', level: 3, nature: 'debit' },
    { code: '5103', nameAr: 'مردودات ومسموحات مشتريات', nameEn: 'Purchase Returns', type: 'expenses', parentCode: '5100', level: 3, nature: 'credit' },
    { code: '5200', nameAr: 'مصروفات تشغيلية', nameEn: 'Operating Expenses', type: 'expenses', parentCode: '5000', level: 2, nature: 'debit', isHeader: true },
    { code: '5201', nameAr: 'رواتب وأجور', nameEn: 'Salaries & Wages', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5202', nameAr: 'إيجارات', nameEn: 'Rent Expense', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5203', nameAr: 'مصروفات كهرباء ومياه', nameEn: 'Utilities', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5204', nameAr: 'مصروفات اتصالات', nameEn: 'Telecom Expenses', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5205', nameAr: 'مصروفات صيانة', nameEn: 'Maintenance Expenses', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5206', nameAr: 'مصروفات تأمين', nameEn: 'Insurance Expenses', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5207', nameAr: 'مصروفات إهلاك', nameEn: 'Depreciation Expense', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5208', nameAr: 'مصروفات سفر وانتقالات', nameEn: 'Travel & Transport', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5209', nameAr: 'مصروفات ضيافة', nameEn: 'Entertainment Expenses', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5210', nameAr: 'مصروفات مكتبية', nameEn: 'Office Expenses', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5211', nameAr: 'مصروفات تسويق وإعلان', nameEn: 'Marketing & Advertising', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5212', nameAr: 'رسوم حكومية', nameEn: 'Government Fees', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5213', nameAr: 'مصروفات قانونية', nameEn: 'Legal Expenses', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5214', nameAr: 'عمولات بنكية', nameEn: 'Bank Charges', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5215', nameAr: 'مصروفات متنوعة', nameEn: 'Miscellaneous Expenses', type: 'expenses', parentCode: '5200', level: 3, nature: 'debit' },
    { code: '5300', nameAr: 'مصروفات أخرى', nameEn: 'Other Expenses', type: 'expenses', parentCode: '5000', level: 2, nature: 'debit', isHeader: true },
    { code: '5301', nameAr: 'خسائر بيع أصول', nameEn: 'Loss on Asset Sale', type: 'expenses', parentCode: '5300', level: 3, nature: 'debit' },
    { code: '5302', nameAr: 'فوائد قروض', nameEn: 'Interest Expense', type: 'expenses', parentCode: '5300', level: 3, nature: 'debit' },
    { code: '5303', nameAr: 'غرامات وجزاءات', nameEn: 'Fines & Penalties', type: 'expenses', parentCode: '5300', level: 3, nature: 'debit' },
    { code: '5400', nameAr: 'الزكاة والضريبة', nameEn: 'Zakat & Tax', type: 'expenses', parentCode: '5000', level: 2, nature: 'debit' },
  ],

  // ===================== INITIALIZE CHART OF ACCOUNTS =====================
  async initializeAccounts(companyId) {
    const accounts = (typeof DEFAULT_COA !== 'undefined' && DEFAULT_COA.length > 0) ? DEFAULT_COA : this.defaultAccounts;
    const batchSize = 500;
    for (let i = 0; i < accounts.length; i += batchSize) {
      const batch = db.batch();
      const chunk = accounts.slice(i, i + batchSize);
      for (const acc of chunk) {
        const ref = db.collection('companies').doc(companyId).collection('accounts').doc(acc.code);
        batch.set(ref, {
          code: acc.code,
          nameAr: acc.nameAr,
          nameEn: acc.nameEn,
          type: acc.type,
          parentCode: acc.parentCode,
          level: acc.level,
          nature: acc.nature,
          isHeader: acc.isHeader || false,
          balance: 0,
          isActive: true,
          isSystem: true,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
      await batch.commit();
    }
  },

  // ===================== ACCOUNT OPERATIONS =====================
  async getAccounts(companyId) {
    const snap = await db.collection('companies').doc(companyId)
      .collection('accounts').orderBy('code').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async addAccount(companyId, accountData) {
    const ref = db.collection('companies').doc(companyId)
      .collection('accounts').doc(accountData.code);
    const existing = await ref.get();
    if (existing.exists) throw new Error('Account code already exists');
    await ref.set({
      ...accountData,
      balance: 0,
      isActive: true,
      isSystem: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return accountData.code;
  },

  async updateAccount(companyId, code, data) {
    await db.collection('companies').doc(companyId)
      .collection('accounts').doc(code).update(data);
  },

  async deleteAccount(companyId, code) {
    // Check children
    const children = await db.collection('companies').doc(companyId)
      .collection('accounts').where('parentCode', '==', code).get();
    if (!children.empty) throw new Error('has_children');

    // Check entries
    const debits = await db.collection('companies').doc(companyId)
      .collection('journalEntries')
      .where('accountCodes', 'array-contains', code).limit(1).get();
    if (!debits.empty) throw new Error('has_entries');

    await db.collection('companies').doc(companyId)
      .collection('accounts').doc(code).delete();
  },

  buildAccountTree(accounts) {
    const map = {};
    const roots = [];
    accounts.forEach(a => { map[a.code] = { ...a, children: [] }; });
    accounts.forEach(a => {
      if (a.parentCode && map[a.parentCode]) {
        map[a.parentCode].children.push(map[a.code]);
      } else if (!a.parentCode) {
        roots.push(map[a.code]);
      }
    });
    return roots;
  },

  getLeafAccounts(accounts) {
    return accounts.filter(a => !a.isHeader);
  },

  // ===================== JOURNAL ENTRIES =====================
  async getNextEntryNumber(companyId) {
    const snap = await db.collection('companies').doc(companyId)
      .collection('journalEntries').orderBy('number', 'desc').limit(1).get();
    if (snap.empty) return 'JE-0001';
    const last = snap.docs[0].data().number;
    const num = parseInt(last.split('-')[1]) + 1;
    return `JE-${String(num).padStart(4, '0')}`;
  },

  async saveJournalEntry(companyId, entry) {
    const totalDebit = entry.lines.reduce((s, l) => s + (l.debit || 0), 0);
    const totalCredit = entry.lines.reduce((s, l) => s + (l.credit || 0), 0);
    if (Math.abs(totalDebit - totalCredit) > 0.01) {
      throw new Error('Entry not balanced');
    }
    if (entry.lines.length < 2) throw new Error('Minimum 2 lines required');

    const accountCodes = [...new Set(entry.lines.map(l => l.accountCode))];
    const data = {
      number: entry.number,
      date: entry.date,
      description: entry.description,
      reference: entry.reference || '',
      lines: entry.lines,
      accountCodes,
      totalDebit,
      totalCredit,
      status: entry.status || 'draft',
      createdBy: entry.createdBy || '',
      sourceType: entry.sourceType || 'manual',
      sourceId: entry.sourceId || '',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (entry.id) {
      await db.collection('companies').doc(companyId)
        .collection('journalEntries').doc(entry.id).update(data);
      return entry.id;
    } else {
      const ref = await db.collection('companies').doc(companyId)
        .collection('journalEntries').add(data);
      return ref.id;
    }
  },

  async postJournalEntry(companyId, entryId) {
    const ref = db.collection('companies').doc(companyId)
      .collection('journalEntries').doc(entryId);
    const doc = await ref.get();
    if (!doc.exists) throw new Error('Entry not found');
    const entry = doc.data();
    if (entry.status === 'posted') throw new Error('Already posted');

    const batch = db.batch();
    batch.update(ref, { status: 'posted', postedAt: firebase.firestore.FieldValue.serverTimestamp() });

    // Update account balances
    for (const line of entry.lines) {
      const accRef = db.collection('companies').doc(companyId)
        .collection('accounts').doc(line.accountCode);
      const accDoc = await accRef.get();
      if (accDoc.exists) {
        const acc = accDoc.data();
        let balanceChange = 0;
        if (acc.nature === 'debit') {
          balanceChange = (line.debit || 0) - (line.credit || 0);
        } else {
          balanceChange = (line.credit || 0) - (line.debit || 0);
        }
        batch.update(accRef, {
          balance: firebase.firestore.FieldValue.increment(balanceChange)
        });
      }
    }
    await batch.commit();
  },

  async voidJournalEntry(companyId, entryId) {
    const ref = db.collection('companies').doc(companyId)
      .collection('journalEntries').doc(entryId);
    const doc = await ref.get();
    if (!doc.exists) throw new Error('Entry not found');
    const entry = doc.data();

    const batch = db.batch();
    batch.update(ref, { status: 'void', voidedAt: firebase.firestore.FieldValue.serverTimestamp() });

    if (entry.status === 'posted') {
      for (const line of entry.lines) {
        const accRef = db.collection('companies').doc(companyId)
          .collection('accounts').doc(line.accountCode);
        const accDoc = await accRef.get();
        if (accDoc.exists) {
          const acc = accDoc.data();
          let balanceChange = 0;
          if (acc.nature === 'debit') {
            balanceChange = -((line.debit || 0) - (line.credit || 0));
          } else {
            balanceChange = -((line.credit || 0) - (line.debit || 0));
          }
          batch.update(accRef, {
            balance: firebase.firestore.FieldValue.increment(balanceChange)
          });
        }
      }
    }
    await batch.commit();
  },

  async getJournalEntries(companyId, filters = {}) {
    try {
      let query = db.collection('companies').doc(companyId)
        .collection('journalEntries');

      // Simple queries that don't need composite indexes
      if (filters.status && !filters.fromDate && !filters.toDate) {
        query = query.where('status', '==', filters.status);
      }

      const snap = await query.limit(filters.limit || 200).get();
      let entries = snap.docs.map(d => ({ id: d.id, ...d.data() }));

      // Client-side filtering for complex queries
      if (filters.status && (filters.fromDate || filters.toDate)) {
        entries = entries.filter(e => e.status === filters.status);
      }
      if (filters.fromDate) entries = entries.filter(e => e.date >= filters.fromDate);
      if (filters.toDate) entries = entries.filter(e => e.date <= filters.toDate);

      // Sort by date descending
      entries.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

      return entries.slice(0, filters.limit || 200);
    } catch(e) {
      console.error('getJournalEntries error:', e);
      // Fallback: get all without ordering
      const snap = await db.collection('companies').doc(companyId)
        .collection('journalEntries').limit(200).get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    }
  },

  // ===================== DOCUMENT OPERATIONS =====================
  async getNextDocNumber(companyId, type) {
    const prefixes = { invoices: 'INV', receipts: 'RV', payments: 'PV', quotations: 'QT' };
    const prefix = prefixes[type] || 'DOC';
    const snap = await db.collection('companies').doc(companyId)
      .collection(type).orderBy('number', 'desc').limit(1).get();
    if (snap.empty) return `${prefix}-0001`;
    const last = snap.docs[0].data().number;
    const num = parseInt(last.split('-')[1]) + 1;
    return `${prefix}-${String(num).padStart(4, '0')}`;
  },

  async saveDocument(companyId, type, docData) {
    const data = {
      ...docData,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    if (!docData.createdAt) {
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    }

    if (docData.id) {
      await db.collection('companies').doc(companyId)
        .collection(type).doc(docData.id).update(data);
      return docData.id;
    } else {
      delete data.id;
      const ref = await db.collection('companies').doc(companyId)
        .collection(type).add(data);
      return ref.id;
    }
  },

  async getDocuments(companyId, type, filters = {}) {
    try {
      let query = db.collection('companies').doc(companyId).collection(type);
      if (filters.status) query = query.where('status', '==', filters.status);
      const snap = await query.limit(filters.limit || 200).get();
      let docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      docs.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      return docs;
    } catch(e) {
      console.error('getDocuments error:', e);
      const snap = await db.collection('companies').doc(companyId).collection(type).limit(200).get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    }
  },

  async deleteDocument(companyId, type, docId) {
    await db.collection('companies').doc(companyId).collection(type).doc(docId).delete();
  },

  // Auto journal entry from invoice
  async createInvoiceEntry(companyId, invoice, username) {
    const entryNumber = await this.getNextEntryNumber(companyId);
    // Try to find accounts: prefer DEFAULT_COA codes, fallback to built-in
    const arCode = await this._findAccount(companyId, ['1121', '1110']) || '1121';
    const vatCode = await this._findAccount(companyId, ['2140', '2105']) || '2140';
    const salesCode = await this._findAccount(companyId, ['4110', '4101']) || '4110';

    const lines = [
      { accountCode: arCode, accountName: 'العملاء / Accounts Receivable', debit: invoice.grandTotal, credit: 0 },
    ];
    if (invoice.taxAmount > 0) {
      lines.push({ accountCode: vatCode, accountName: 'ضريبة القيمة المضافة / VAT', debit: 0, credit: invoice.taxAmount });
      lines.push({ accountCode: salesCode, accountName: 'مبيعات / Sales', debit: 0, credit: invoice.grandTotal - invoice.taxAmount });
    } else {
      lines.push({ accountCode: salesCode, accountName: 'مبيعات / Sales', debit: 0, credit: invoice.grandTotal });
    }

    return this.saveJournalEntry(companyId, {
      number: entryNumber,
      date: invoice.date,
      description: `فاتورة مبيعات رقم ${invoice.number} / Sales Invoice #${invoice.number}`,
      reference: invoice.number,
      lines,
      status: 'posted',
      createdBy: username,
      sourceType: 'invoice',
      sourceId: invoice.id
    });
  },

  // Auto journal entry from receipt
  async createReceiptEntry(companyId, receipt, username) {
    const entryNumber = await this.getNextEntryNumber(companyId);
    const isBankTransfer = receipt.paymentMethod === 'bank_transfer' || receipt.paymentMethod === 'bank';
    const cashCode = await this._findAccount(companyId, isBankTransfer ? ['1112', '1103'] : ['1111', '1102']) || (isBankTransfer ? '1112' : '1111');
    const arCode = await this._findAccount(companyId, ['1121', '1110']) || '1121';

    const lines = [
      { accountCode: cashCode, accountName: isBankTransfer ? 'البنك / Bank' : 'الصندوق / Cash', debit: receipt.amount, credit: 0 },
      { accountCode: arCode, accountName: 'العملاء / Accounts Receivable', debit: 0, credit: receipt.amount },
    ];
    return this.saveJournalEntry(companyId, {
      number: entryNumber,
      date: receipt.date,
      description: `سند قبض رقم ${receipt.number} - ${receipt.receivedFrom}`,
      reference: receipt.number,
      lines,
      status: 'posted',
      createdBy: username,
      sourceType: 'receipt',
      sourceId: receipt.id
    });
  },

  // Auto journal entry from payment
  async createPaymentEntry(companyId, payment, username) {
    const entryNumber = await this.getNextEntryNumber(companyId);
    const isBankTransfer = payment.paymentMethod === 'bank_transfer' || payment.paymentMethod === 'bank';
    const cashCode = await this._findAccount(companyId, isBankTransfer ? ['1112', '1103'] : ['1111', '1102']) || (isBankTransfer ? '1112' : '1111');
    const apCode = await this._findAccount(companyId, ['2111', '2101']) || '2111';

    const lines = [
      { accountCode: apCode, accountName: 'الموردون / Accounts Payable', debit: payment.amount, credit: 0 },
      { accountCode: cashCode, accountName: isBankTransfer ? 'البنك / Bank' : 'الصندوق / Cash', debit: 0, credit: payment.amount },
    ];
    return this.saveJournalEntry(companyId, {
      number: entryNumber,
      date: payment.date,
      description: `سند صرف رقم ${payment.number} - ${payment.paidTo}`,
      reference: payment.number,
      lines,
      status: 'posted',
      createdBy: username,
      sourceType: 'payment',
      sourceId: payment.id
    });
  },

  // Helper: find the first existing account from a list of possible codes
  async _findAccount(companyId, codes) {
    for (const code of codes) {
      try {
        const doc = await db.collection('companies').doc(companyId).collection('accounts').doc(code).get();
        if (doc.exists) return code;
      } catch(e) {}
    }
    return codes[0];
  },

  // ===================== FINANCIAL REPORTS =====================
  async generateTrialBalance(companyId, asOfDate) {
    const accounts = await this.getAccounts(companyId);
    const entries = await db.collection('companies').doc(companyId)
      .collection('journalEntries')
      .where('status', '==', 'posted')
      .where('date', '<=', asOfDate)
      .get();

    const balances = {};
    accounts.forEach(a => { balances[a.code] = { ...a, debit: 0, credit: 0 }; });

    entries.docs.forEach(doc => {
      const entry = doc.data();
      entry.lines.forEach(line => {
        if (balances[line.accountCode]) {
          balances[line.accountCode].debit += line.debit || 0;
          balances[line.accountCode].credit += line.credit || 0;
        }
      });
    });

    return Object.values(balances)
      .filter(a => a.debit > 0 || a.credit > 0)
      .sort((a, b) => a.code.localeCompare(b.code));
  },

  async generateIncomeStatement(companyId, fromDate, toDate) {
    const entries = await db.collection('companies').doc(companyId)
      .collection('journalEntries')
      .where('status', '==', 'posted')
      .where('date', '>=', fromDate)
      .where('date', '<=', toDate)
      .get();

    const accounts = await this.getAccounts(companyId);
    const accMap = {};
    accounts.forEach(a => { accMap[a.code] = a; });

    const revenue = {};
    const costOfSales = {};
    const operatingExpenses = {};
    const otherIncome = {};
    const otherExpenses = {};

    entries.docs.forEach(doc => {
      const entry = doc.data();
      entry.lines.forEach(line => {
        const acc = accMap[line.accountCode];
        if (!acc) return;
        const net = (line.credit || 0) - (line.debit || 0);
        const code = acc.code;
        const isHeader = acc.isHeader;

        // Skip header accounts
        if (isHeader) return;

        // Revenue: 4xxx (except 43xx other income in new COA)
        if (code.startsWith('41') || code.startsWith('42') && !code.startsWith('43')) {
          revenue[code] = (revenue[code] || 0) + net;
        }
        // Other Income: 43xx (new COA) or 42xx (old COA if no 43xx accounts exist)
        else if (code.startsWith('43') || (code.startsWith('42') && acc.type === 'revenue')) {
          otherIncome[code] = (otherIncome[code] || 0) + net;
        }
        // Cost of Sales: 5xxx (both structures)
        else if (code.startsWith('5')) {
          costOfSales[code] = (costOfSales[code] || 0) - net;
        }
        // Operating Expenses: 6xxx (new COA) or 52xx (old COA)
        else if (code.startsWith('6') || code.startsWith('52')) {
          operatingExpenses[code] = (operatingExpenses[code] || 0) - net;
        }
        // Other Expenses: 7xxx (new COA) or 53xx/54xx (old COA)
        else if (code.startsWith('7') || code.startsWith('53') || code.startsWith('54')) {
          otherExpenses[code] = (otherExpenses[code] || 0) - net;
        }
      });
    });

    const totalRevenue = Object.values(revenue).reduce((s, v) => s + v, 0);
    const totalCostOfSales = Object.values(costOfSales).reduce((s, v) => s + v, 0);
    const grossProfit = totalRevenue - totalCostOfSales;
    const totalOperatingExpenses = Object.values(operatingExpenses).reduce((s, v) => s + v, 0);
    const totalOtherIncome = Object.values(otherIncome).reduce((s, v) => s + v, 0);
    const totalOtherExpenses = Object.values(otherExpenses).reduce((s, v) => s + v, 0);
    const netIncome = grossProfit - totalOperatingExpenses + totalOtherIncome - totalOtherExpenses;

    return {
      revenue: Object.entries(revenue).map(([code, amount]) => ({ code, name: accMap[code], amount })),
      costOfSales: Object.entries(costOfSales).map(([code, amount]) => ({ code, name: accMap[code], amount })),
      operatingExpenses: Object.entries(operatingExpenses).map(([code, amount]) => ({ code, name: accMap[code], amount })),
      otherIncome: Object.entries(otherIncome).map(([code, amount]) => ({ code, name: accMap[code], amount })),
      otherExpenses: Object.entries(otherExpenses).map(([code, amount]) => ({ code, name: accMap[code], amount })),
      totalRevenue,
      totalCostOfSales,
      grossProfit,
      totalOperatingExpenses,
      totalOtherIncome,
      totalOtherExpenses,
      netIncome,
      accMap
    };
  },

  async generateBalanceSheet(companyId, asOfDate) {
    const trial = await this.generateTrialBalance(companyId, asOfDate);
    const accounts = await this.getAccounts(companyId);
    const accMap = {};
    accounts.forEach(a => { accMap[a.code] = a; });

    const categorize = (items, prefix) => {
      const result = {};
      items.filter(i => i.code.startsWith(prefix) && !i.isHeader).forEach(i => {
        const net = i.nature === 'debit' ? (i.debit - i.credit) : (i.credit - i.debit);
        if (Math.abs(net) > 0.01) result[i.code] = net;
      });
      return result;
    };

    const currentAssets = categorize(trial, '11');
    const nonCurrentAssets = categorize(trial, '12');
    const currentLiabilities = categorize(trial, '21');
    const nonCurrentLiabilities = categorize(trial, '22');
    const equity = categorize(trial, '3');

    const totalCurrentAssets = Object.values(currentAssets).reduce((s, v) => s + v, 0);
    const totalNonCurrentAssets = Object.values(nonCurrentAssets).reduce((s, v) => s + v, 0);
    const totalAssets = totalCurrentAssets + totalNonCurrentAssets;

    const totalCurrentLiabilities = Object.values(currentLiabilities).reduce((s, v) => s + v, 0);
    const totalNonCurrentLiabilities = Object.values(nonCurrentLiabilities).reduce((s, v) => s + v, 0);
    const totalLiabilities = totalCurrentLiabilities + totalNonCurrentLiabilities;
    const totalEquity = Object.values(equity).reduce((s, v) => s + v, 0);

    return {
      currentAssets, nonCurrentAssets, currentLiabilities, nonCurrentLiabilities, equity,
      totalCurrentAssets, totalNonCurrentAssets, totalAssets,
      totalCurrentLiabilities, totalNonCurrentLiabilities, totalLiabilities,
      totalEquity,
      totalLiabilitiesAndEquity: totalLiabilities + totalEquity,
      isBalanced: Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01,
      accMap
    };
  },

  async generateCashFlow(companyId, fromDate, toDate) {
    const entries = await db.collection('companies').doc(companyId)
      .collection('journalEntries')
      .where('status', '==', 'posted')
      .where('date', '>=', fromDate)
      .where('date', '<=', toDate)
      .get();

    let operating = 0, investing = 0, financing = 0;
    // Support both COA structures: old (1101-1103) and new (1111-1113)
    const cashAccounts = ['1101', '1102', '1103', '1111', '1112', '1113'];

    entries.docs.forEach(doc => {
      const entry = doc.data();
      const hasCash = entry.lines.some(l => cashAccounts.includes(l.accountCode));
      if (!hasCash) return;

      let cashChange = 0;
      entry.lines.forEach(line => {
        if (cashAccounts.includes(line.accountCode)) {
          cashChange += (line.debit || 0) - (line.credit || 0);
        }
      });

      const nonCashLine = entry.lines.find(l => !cashAccounts.includes(l.accountCode));
      if (!nonCashLine) return;
      const nc = nonCashLine.accountCode;

      // Operating: revenue (4xxx), COGS (5xxx), operating expenses (6xxx), current assets/liabilities (11xx/21xx)
      if (nc.startsWith('4') || nc.startsWith('5') || nc.startsWith('6') ||
          nc.startsWith('11') || nc.startsWith('21')) {
        operating += cashChange;
      }
      // Investing: non-current assets (12xx)
      else if (nc.startsWith('12')) {
        investing += cashChange;
      }
      // Financing: non-current liabilities (22xx), equity (3xxx), other expenses (7xxx related to finance)
      else if (nc.startsWith('22') || nc.startsWith('3')) {
        financing += cashChange;
      }
      // Default to operating
      else {
        operating += cashChange;
      }
    });

    return {
      operating,
      investing,
      financing,
      netCashFlow: operating + investing + financing
    };
  },

  // ===================== AI FINANCIAL ANALYSIS =====================
  async getFinancialHealthScore(companyId) {
    const now = new Date();
    const yearStart = new Date(now.getFullYear(), 0, 1).toISOString();
    const today = now.toISOString().split('T')[0];

    try {
      const income = await this.generateIncomeStatement(companyId, yearStart, today);
      const balance = await this.generateBalanceSheet(companyId, today);

      let score = 50;
      const indicators = [];

      // Profitability
      if (income.totalRevenue > 0) {
        const profitMargin = (income.netIncome / income.totalRevenue) * 100;
        if (profitMargin > 20) { score += 15; indicators.push({ key: 'profit_margin', value: profitMargin, status: 'excellent' }); }
        else if (profitMargin > 10) { score += 10; indicators.push({ key: 'profit_margin', value: profitMargin, status: 'good' }); }
        else if (profitMargin > 0) { score += 5; indicators.push({ key: 'profit_margin', value: profitMargin, status: 'fair' }); }
        else { score -= 10; indicators.push({ key: 'profit_margin', value: profitMargin, status: 'poor' }); }
      }

      // Liquidity (Current Ratio)
      if (balance.totalCurrentLiabilities > 0) {
        const currentRatio = balance.totalCurrentAssets / balance.totalCurrentLiabilities;
        if (currentRatio > 2) { score += 15; indicators.push({ key: 'current_ratio', value: currentRatio, status: 'excellent' }); }
        else if (currentRatio > 1.5) { score += 10; indicators.push({ key: 'current_ratio', value: currentRatio, status: 'good' }); }
        else if (currentRatio > 1) { score += 5; indicators.push({ key: 'current_ratio', value: currentRatio, status: 'fair' }); }
        else { score -= 10; indicators.push({ key: 'current_ratio', value: currentRatio, status: 'poor' }); }
      }

      // Debt ratio
      if (balance.totalAssets > 0) {
        const debtRatio = (balance.totalLiabilities / balance.totalAssets) * 100;
        if (debtRatio < 30) { score += 10; indicators.push({ key: 'debt_ratio', value: debtRatio, status: 'excellent' }); }
        else if (debtRatio < 50) { score += 5; indicators.push({ key: 'debt_ratio', value: debtRatio, status: 'good' }); }
        else if (debtRatio < 70) { indicators.push({ key: 'debt_ratio', value: debtRatio, status: 'fair' }); }
        else { score -= 10; indicators.push({ key: 'debt_ratio', value: debtRatio, status: 'poor' }); }
      }

      // Revenue trend
      if (income.totalRevenue > income.totalCostOfSales) { score += 5; }

      score = Math.max(0, Math.min(100, score));

      let status = 'poor';
      if (score >= 80) status = 'excellent';
      else if (score >= 60) status = 'good';
      else if (score >= 40) status = 'fair';

      return { score, status, indicators, income, balance };
    } catch (e) {
      console.error('Health score error:', e);
      return { score: 50, status: 'fair', indicators: [], income: null, balance: null };
    }
  }
};

window.AccountingEngine = AccountingEngine;
