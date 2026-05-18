// ============================================
// Rekaz - Internationalization (i18n) Service
// Default: Arabic | Auto-detects device language
// ============================================

const translations = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_features: 'Features',
    nav_pricing: 'Pricing',
    nav_dashboard: 'Dashboard',
    nav_settings: 'Settings',
    nav_login: 'Login',
    nav_signup: 'Sign Up',
    nav_logout: 'Logout',

    // Landing
    hero_title: 'Financial Management,',
    hero_title2: 'Reimagined.',
    hero_subtitle: 'Rekaz helps businesses manage finances, track expenses, and scale with confidence. Built for teams that demand clarity.',
    hero_cta: 'Get Started Free',
    hero_cta2: 'View Pricing',

    // Features
    features_title: 'Everything You Need',
    features_subtitle: 'Powerful tools designed for modern businesses',
    feat_dashboard: 'Smart Dashboard',
    feat_dashboard_desc: 'Real-time overview of your financial health with intelligent insights and visual analytics.',
    feat_multiuser: 'Multi-User Access',
    feat_multiuser_desc: 'Invite your team with role-based permissions. Admins and staff see exactly what they need.',
    feat_reports: 'Financial Reports',
    feat_reports_desc: 'Generate detailed income, expense, and transaction reports with a single click.',
    feat_security: 'Bank-Grade Security',
    feat_security_desc: 'Your data is encrypted and isolated per company. Multi-tenant architecture you can trust.',
    feat_multilang: 'Bilingual Support',
    feat_multilang_desc: 'Full Arabic (RTL) and English (LTR) support. Switch anytime from settings.',
    feat_subscription: 'Flexible Plans',
    feat_subscription_desc: 'Start free, grow at your pace. Upgrade or downgrade anytime with transparent pricing.',

    // Pricing
    pricing_title: 'Simple, Transparent Pricing',
    pricing_subtitle: 'Choose the plan that fits your business',
    pricing_free: 'Free',
    pricing_basic: 'Basic',
    pricing_pro: 'Pro',
    pricing_popular: 'Most Popular',
    pricing_cta_free: 'Get Started',
    pricing_cta_basic: 'Start Basic',
    pricing_cta_pro: 'Go Pro',
    pricing_mo: '/mo',

    // Auth
    auth_login_title: 'Welcome Back',
    auth_login_subtitle: 'Sign in to your Rekaz account',
    auth_signup_title: 'Create Account',
    auth_signup_subtitle: 'Start your financial journey with Rekaz',
    auth_email: 'Email Address',
    auth_password: 'Password',
    auth_confirm_password: 'Confirm Password',
    auth_google: 'Continue with Google',
    auth_or: 'or',
    auth_no_account: "Don't have an account?",
    auth_has_account: 'Already have an account?',
    auth_login_btn: 'Sign In',
    auth_signup_btn: 'Create Account',

    // Complete Profile
    profile_title: 'Complete Your Profile',
    profile_subtitle: 'Set up your company to get started',
    profile_company_name: 'Company Name',
    profile_phone: 'Phone Number',
    profile_company_number: 'Company Number',
    profile_tax_number: 'Tax Number (Optional)',
    profile_logo: 'Company Logo',
    profile_logo_hint: 'Upload your company logo (PNG, JPG)',
    profile_save: 'Save & Continue',
    profile_your_name: 'Your Name',

    // Dashboard
    dash_welcome: 'Welcome back',
    dash_overview: 'Overview',
    dash_income: 'Total Income',
    dash_expenses: 'Total Expenses',
    dash_balance: 'Balance',
    dash_transactions: 'Transactions',
    dash_recent: 'Recent Transactions',
    dash_add: 'Add Transaction',
    dash_type: 'Type',
    dash_amount: 'Amount',
    dash_description: 'Description',
    dash_date: 'Date',
    dash_action: 'Action',
    dash_delete: 'Delete',
    dash_income_type: 'Income',
    dash_expense_type: 'Expense',
    dash_no_transactions: 'No transactions yet',
    dash_users: 'Users',
    dash_plan: 'Current Plan',

    // Settings
    settings_title: 'Settings',
    settings_theme: 'Theme Colors',
    settings_primary: 'Primary Color',
    settings_accent: 'Accent Color',
    settings_language: 'Language',
    settings_save: 'Save Settings',
    settings_saved: 'Settings saved!',
    settings_subscription: 'Subscription',
    settings_current_plan: 'Current Plan',
    settings_change_plan: 'Change Plan',
    settings_company: 'Company Info',

    // Misc
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    confirm: 'Confirm',
    back: 'Back',

    // Footer
    footer_about: 'Rekaz is a modern financial management platform built for growing businesses.',
    footer_product: 'Product',
    footer_company: 'Company',
    footer_about_us: 'About Us',
    footer_contact: 'Contact',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_rights: '© 2026 Rekaz. All rights reserved.'
  },

  ar: {
    // Nav
    nav_home: 'الرئيسية',
    nav_features: 'المميزات',
    nav_pricing: 'الأسعار',
    nav_dashboard: 'لوحة التحكم',
    nav_settings: 'الإعدادات',
    nav_login: 'تسجيل الدخول',
    nav_signup: 'إنشاء حساب',
    nav_logout: 'تسجيل الخروج',

    // Landing
    hero_title: 'الإدارة المالية،',
    hero_title2: 'بمفهوم جديد.',
    hero_subtitle: 'ركاز يساعد الشركات على إدارة الشؤون المالية وتتبع المصروفات والنمو بثقة. مصمم للفرق التي تطلب الوضوح.',
    hero_cta: 'ابدأ مجاناً',
    hero_cta2: 'عرض الأسعار',

    // Features
    features_title: 'كل ما تحتاجه',
    features_subtitle: 'أدوات قوية مصممة للشركات الحديثة',
    feat_dashboard: 'لوحة تحكم ذكية',
    feat_dashboard_desc: 'نظرة عامة في الوقت الفعلي على صحتك المالية مع رؤى ذكية وتحليلات مرئية.',
    feat_multiuser: 'وصول متعدد المستخدمين',
    feat_multiuser_desc: 'ادعُ فريقك مع صلاحيات حسب الدور. المدراء والموظفون يرون ما يحتاجونه بالضبط.',
    feat_reports: 'تقارير مالية',
    feat_reports_desc: 'أنشئ تقارير مفصلة للدخل والمصروفات والمعاملات بنقرة واحدة.',
    feat_security: 'أمان بمستوى البنوك',
    feat_security_desc: 'بياناتك مشفرة ومعزولة لكل شركة. بنية متعددة المستأجرين يمكنك الوثوق بها.',
    feat_multilang: 'دعم ثنائي اللغة',
    feat_multilang_desc: 'دعم كامل للعربية (RTL) والإنجليزية (LTR). بدّل في أي وقت من الإعدادات.',
    feat_subscription: 'خطط مرنة',
    feat_subscription_desc: 'ابدأ مجاناً، وتوسع بسرعتك. ترقية أو تخفيض في أي وقت مع أسعار شفافة.',

    // Pricing
    pricing_title: 'أسعار بسيطة وشفافة',
    pricing_subtitle: 'اختر الخطة المناسبة لعملك',
    pricing_free: 'مجاني',
    pricing_basic: 'أساسي',
    pricing_pro: 'احترافي',
    pricing_popular: 'الأكثر شعبية',
    pricing_cta_free: 'ابدأ الآن',
    pricing_cta_basic: 'ابدأ الأساسي',
    pricing_cta_pro: 'انطلق احترافياً',
    pricing_mo: '/شهرياً',

    // Auth
    auth_login_title: 'مرحباً بعودتك',
    auth_login_subtitle: 'سجّل الدخول إلى حسابك في ركاز',
    auth_signup_title: 'إنشاء حساب',
    auth_signup_subtitle: 'ابدأ رحلتك المالية مع ركاز',
    auth_email: 'البريد الإلكتروني',
    auth_password: 'كلمة المرور',
    auth_confirm_password: 'تأكيد كلمة المرور',
    auth_google: 'المتابعة مع Google',
    auth_or: 'أو',
    auth_no_account: 'ليس لديك حساب؟',
    auth_has_account: 'لديك حساب بالفعل؟',
    auth_login_btn: 'تسجيل الدخول',
    auth_signup_btn: 'إنشاء حساب',

    // Complete Profile
    profile_title: 'أكمل ملفك الشخصي',
    profile_subtitle: 'قم بإعداد شركتك للبدء',
    profile_company_name: 'اسم الشركة',
    profile_phone: 'رقم الهاتف',
    profile_company_number: 'رقم الشركة',
    profile_tax_number: 'الرقم الضريبي (اختياري)',
    profile_logo: 'شعار الشركة',
    profile_logo_hint: 'ارفع شعار شركتك (PNG, JPG)',
    profile_save: 'حفظ والمتابعة',
    profile_your_name: 'اسمك',

    // Dashboard
    dash_welcome: 'مرحباً بعودتك',
    dash_overview: 'نظرة عامة',
    dash_income: 'إجمالي الدخل',
    dash_expenses: 'إجمالي المصروفات',
    dash_balance: 'الرصيد',
    dash_transactions: 'المعاملات',
    dash_recent: 'المعاملات الأخيرة',
    dash_add: 'إضافة معاملة',
    dash_type: 'النوع',
    dash_amount: 'المبلغ',
    dash_description: 'الوصف',
    dash_date: 'التاريخ',
    dash_action: 'الإجراء',
    dash_delete: 'حذف',
    dash_income_type: 'دخل',
    dash_expense_type: 'مصروف',
    dash_no_transactions: 'لا توجد معاملات بعد',
    dash_users: 'المستخدمون',
    dash_plan: 'الخطة الحالية',

    // Settings
    settings_title: 'الإعدادات',
    settings_theme: 'ألوان المظهر',
    settings_primary: 'اللون الأساسي',
    settings_accent: 'لون التمييز',
    settings_language: 'اللغة',
    settings_save: 'حفظ الإعدادات',
    settings_saved: 'تم حفظ الإعدادات!',
    settings_subscription: 'الاشتراك',
    settings_current_plan: 'الخطة الحالية',
    settings_change_plan: 'تغيير الخطة',
    settings_company: 'معلومات الشركة',

    // Misc
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
    success: 'نجاح',
    cancel: 'إلغاء',
    save: 'حفظ',
    delete: 'حذف',
    confirm: 'تأكيد',
    back: 'رجوع',

    // Footer
    footer_about: 'ركاز منصة إدارة مالية حديثة مصممة للشركات النامية.',
    footer_product: 'المنتج',
    footer_company: 'الشركة',
    footer_about_us: 'من نحن',
    footer_contact: 'اتصل بنا',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'شروط الخدمة',
    footer_rights: '© 2026 ركاز. جميع الحقوق محفوظة.'
  }
};

export const i18n = {
  currentLang: 'ar',

  // Auto-detect language from browser/device, default to Arabic
  detectLanguage() {
    // 1. Check if user saved a preference
    const saved = localStorage.getItem('rekaz_lang');
    if (saved && (saved === 'ar' || saved === 'en')) return saved;

    // 2. Auto-detect from browser/device language
    const browserLang = navigator.language || navigator.userLanguage || '';
    const langCode = browserLang.toLowerCase().split('-')[0];

    // If device is English, use English. Otherwise default Arabic
    if (langCode === 'en') return 'en';

    // Default: Arabic
    return 'ar';
  },

  init(lang = null) {
    this.currentLang = lang || this.detectLanguage();
    this.updateDirection();
    this.translatePage();
  },

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('rekaz_lang', lang);
    this.updateDirection();
    this.translatePage();
  },

  t(key) {
    return translations[this.currentLang]?.[key] || translations['ar']?.[key] || key;
  },

  updateDirection() {
    const dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', this.currentLang);
    document.body.style.direction = dir;
    document.body.style.textAlign = dir === 'rtl' ? 'right' : 'left';
  },

  translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = this.t(key);
    });
  },

  getSavedLanguage() {
    return this.detectLanguage();
  }
};
