// =============================================
// Rekaz i18n - Complete Translation System
// =============================================
const translations = {
ar:{appName:'ركاز',appTagline:'نظام محاسبة سحابي متكامل',save:'حفظ',cancel:'إلغاء',delete:'حذف',edit:'تعديل',add:'إضافة',search:'بحث',filter:'تصفية',export:'تصدير',import:'استيراد',print:'طباعة',close:'إغلاق',confirm:'تأكيد',back:'رجوع',next:'التالي',loading:'جاري التحميل...',noData:'لا توجد بيانات',total:'الإجمالي',subtotal:'المجموع الفرعي',date:'التاريخ',from:'من',to:'إلى',status:'الحالة',actions:'إجراءات',description:'الوصف',amount:'المبلغ',currency:'العملة',notes:'ملاحظات',number:'الرقم',name:'الاسم',type:'النوع',code:'الكود',all:'الكل',active:'نشط',inactive:'غير نشط',success:'تمت العملية بنجاح',error:'حدث خطأ',warning:'تحذير',logout:'تسجيل خروج',settings:'الإعدادات',language:'اللغة',arabic:'العربية',english:'English',exportPDF:'تصدير PDF',exportExcel:'تصدير Excel',welcomeBack:'مرحباً بعودتك',required:'مطلوب',optional:'اختياري',yes:'نعم',no:'لا',
nav:{dashboard:'لوحة التحكم',accounting:'المحاسبة',chartOfAccounts:'شجرة الحسابات',journalEntries:'القيود اليومية',documents:'المستندات',invoices:'الفواتير',receipts:'سندات القبض',payments:'سندات الصرف',quotations:'عروض الأسعار',reports:'التقارير',incomeStatement:'قائمة الدخل',balanceSheet:'الميزانية العمومية',cashFlow:'التدفقات النقدية',trialBalance:'ميزان المراجعة',generalLedger:'دفتر الأستاذ',aiAssistant:'المساعد الذكي',companySettings:'إعدادات الشركة',users:'المستخدمين',subscription:'الاشتراك'},
dashboard:{title:'لوحة التحكم',totalRevenue:'إجمالي الإيرادات',totalExpenses:'إجمالي المصروفات',netIncome:'صافي الدخل',cashBalance:'الرصيد النقدي',recentTransactions:'أحدث المعاملات',quickActions:'إجراءات سريعة',newInvoice:'فاتورة جديدة',newEntry:'قيد جديد',newReceipt:'سند قبض جديد',newPayment:'سند صرف جديد',financialHealth:'الصحة المالية',monthlyOverview:'نظرة شهرية',pendingInvoices:'فواتير معلقة',overdueInvoices:'فواتير متأخرة',thisMonth:'هذا الشهر',lastMonth:'الشهر السابق',thisYear:'هذه السنة'},
coa:{title:'شجرة الحسابات',addAccount:'إضافة حساب',editAccount:'تعديل حساب',deleteAccount:'حذف حساب',accountCode:'رقم الحساب',accountName:'اسم الحساب',accountNameEn:'اسم الحساب (إنجليزي)',accountType:'نوع الحساب',parentAccount:'الحساب الرئيسي',noParent:'حساب رئيسي (بدون أب)',balance:'الرصيد',isActive:'نشط',nature:'طبيعة الحساب',debit:'مدين',credit:'دائن',types:{assets:'الأصول',currentAssets:'أصول متداولة',fixedAssets:'أصول ثابتة',liabilities:'الالتزامات',currentLiabilities:'التزامات متداولة',longTermLiabilities:'التزامات طويلة الأجل',equity:'حقوق الملكية',revenue:'الإيرادات',expenses:'المصروفات',cogs:'تكلفة المبيعات'},defaultAccounts:'تحميل الحسابات الافتراضية',confirmDefault:'هل تريد تحميل شجرة الحسابات الافتراضية (IFRS)؟',hasChildren:'لا يمكن حذف حساب له حسابات فرعية',hasTransactions:'لا يمكن حذف حساب له معاملات',expandAll:'توسيع الكل',collapseAll:'طي الكل',searchAccounts:'بحث في الحسابات...'},
journal:{title:'القيود اليومية',newEntry:'قيد جديد',editEntry:'تعديل القيد',entryNumber:'رقم القيد',entryDate:'تاريخ القيد',reference:'المرجع',account:'الحساب',debit:'مدين',credit:'دائن',addLine:'إضافة سطر',removeLine:'حذف السطر',totalDebit:'إجمالي المدين',totalCredit:'إجمالي الدائن',difference:'الفرق',balanced:'متوازن',unbalanced:'غير متوازن',post:'ترحيل',draft:'مسودة',posted:'مرحّل',reversed:'معكوس',reverseEntry:'عكس القيد',postConfirm:'هل تريد ترحيل هذا القيد؟',narration:'البيان',createdBy:'بواسطة',balanceError:'القيد غير متوازن'},
invoices:{title:'الفواتير',newInvoice:'فاتورة جديدة',editInvoice:'تعديل الفاتورة',invoiceNumber:'رقم الفاتورة',invoiceDate:'تاريخ الفاتورة',dueDate:'تاريخ الاستحقاق',customer:'العميل',customerName:'اسم العميل',customerAddress:'عنوان العميل',customerPhone:'هاتف العميل',customerEmail:'بريد العميل',customerTax:'الرقم الضريبي',item:'الصنف',itemDescription:'وصف الصنف',quantity:'الكمية',unitPrice:'سعر الوحدة',discount:'الخصم',discountPercent:'نسبة الخصم',tax:'الضريبة',taxPercent:'نسبة الضريبة',taxAmount:'مبلغ الضريبة',lineTotal:'الإجمالي',addItem:'إضافة صنف',totalDiscount:'إجمالي الخصم',totalTax:'إجمالي الضريبة',grandTotal:'الإجمالي النهائي',amountPaid:'المبلغ المدفوع',amountDue:'المبلغ المستحق',paymentTerms:'شروط الدفع',termsAndConditions:'الشروط والأحكام',generatePDF:'تصدير PDF',markPaid:'تحديد كمدفوعة',duplicate:'نسخ الفاتورة',status:{draft:'مسودة',sent:'مرسلة',paid:'مدفوعة',partial:'مدفوعة جزئياً',overdue:'متأخرة',cancelled:'ملغاة'}},
receipts:{title:'سندات القبض',newReceipt:'سند قبض جديد',receiptNumber:'رقم سند القبض',receivedFrom:'استلمنا من',amountReceived:'المبلغ المستلم',paymentMethod:'طريقة الدفع',cash:'نقداً',bank:'تحويل بنكي',check:'شيك',card:'بطاقة',other:'أخرى',checkNumber:'رقم الشيك',bankName:'اسم البنك',forPaymentOf:'وذلك عن',receiptDate:'التاريخ'},
payments:{title:'سندات الصرف',newPayment:'سند صرف جديد',paymentNumber:'رقم سند الصرف',paidTo:'صُرف إلى',amountPaid:'المبلغ المصروف',forPaymentOf:'وذلك عن',paymentDate:'التاريخ',approvedBy:'اعتمد بواسطة',receivedBy:'استلم بواسطة'},
quotations:{title:'عروض الأسعار',newQuotation:'عرض سعر جديد',quotationNumber:'رقم العرض',quotationDate:'تاريخ العرض',validUntil:'صالح حتى',convertToInvoice:'تحويل إلى فاتورة',status:{draft:'مسودة',sent:'مرسل',accepted:'مقبول',rejected:'مرفوض',expired:'منتهي'}},
reports:{title:'التقارير المالية',dateRange:'الفترة الزمنية',generate:'إنشاء التقرير',noDataForPeriod:'لا توجد بيانات لهذه الفترة',incomeStatement:{title:'قائمة الدخل',revenue:'الإيرادات',totalRevenue:'إجمالي الإيرادات',cogs:'تكلفة المبيعات',grossProfit:'مجمل الربح',operatingExpenses:'المصروفات التشغيلية',totalOperatingExpenses:'إجمالي المصروفات التشغيلية',operatingIncome:'الدخل التشغيلي',incomeBeforeTax:'الدخل قبل الضريبة',incomeTax:'ضريبة الدخل',netIncome:'صافي الدخل',period:'الفترة'},balanceSheet:{title:'الميزانية العمومية',assets:'الأصول',currentAssets:'الأصول المتداولة',totalCurrentAssets:'إجمالي الأصول المتداولة',nonCurrentAssets:'الأصول غير المتداولة',totalNonCurrentAssets:'إجمالي الأصول غير المتداولة',totalAssets:'إجمالي الأصول',liabilities:'الالتزامات',currentLiabilities:'الالتزامات المتداولة',totalCurrentLiabilities:'إجمالي الالتزامات المتداولة',nonCurrentLiabilities:'الالتزامات غير المتداولة',totalNonCurrentLiabilities:'إجمالي الالتزامات غير المتداولة',totalLiabilities:'إجمالي الالتزامات',equity:'حقوق الملكية',capital:'رأس المال',retainedEarnings:'أرباح مبقاة',totalEquity:'إجمالي حقوق الملكية',totalLiabilitiesAndEquity:'إجمالي الالتزامات وحقوق الملكية',asOf:'كما في'},cashFlow:{title:'قائمة التدفقات النقدية',operating:'الأنشطة التشغيلية',investing:'الأنشطة الاستثمارية',financing:'الأنشطة التمويلية',netChange:'صافي التغير في النقد',openingBalance:'الرصيد الافتتاحي',closingBalance:'الرصيد الختامي'},trialBalance:{title:'ميزان المراجعة',account:'الحساب',debit:'مدين',credit:'دائن',totals:'الإجماليات'},generalLedger:{title:'دفتر الأستاذ',selectAccount:'اختر الحساب',runningBalance:'الرصيد الجاري'}},
ai:{title:'المساعد الذكي',subtitle:'تحليل مالي ذكي بالذكاء الاصطناعي',placeholder:'اسأل عن تحليل مالي، مؤشرات الأداء، نصائح محاسبية...',send:'إرسال',analyzing:'جاري التحليل...',healthScore:'مؤشر الصحة المالية',excellent:'ممتاز',good:'جيد',fair:'مقبول',poor:'ضعيف',critical:'حرج',suggestions:'توصيات',ratios:'النسب المالية',currentRatio:'نسبة التداول',quickRatio:'نسبة السيولة السريعة',debtToEquity:'نسبة الدين إلى حقوق الملكية',profitMargin:'هامش الربح',roe:'العائد على حقوق الملكية',roa:'العائد على الأصول',upgradeRequired:'هذه الميزة تتطلب ترقية الباقة',questionsLeft:'أسئلة متبقية',unlimited:'غير محدود'},
subscription:{title:'الباقات والاشتراكات',free:'مجانية',basic:'أساسية',pro:'احترافية',current:'الباقة الحالية',upgrade:'ترقية',monthly:'شهري',yearly:'سنوي',savemonth:'وفّر شهر',features:'المميزات',price:{free:'0',basicMonthly:'15',basicYearly:'165',proMonthly:'25',proYearly:'275',currency:'ر.ع.'},freeFeatures:['شجرة حسابات أساسية (20 حساب)','القيود اليومية (30 قيد/شهر)','المستندات (10/شهر)','ميزان المراجعة فقط','مستخدم واحد'],basicFeatures:['شجرة حسابات موسّعة (100 حساب)','القيود (200 قيد/شهر)','المستندات (100/شهر)','3 مستخدمين (+5 ر.ع./إضافي)','قائمة الدخل + الميزانية','تصدير PDF مع الشعار'],proFeatures:['شجرة حسابات غير محدودة','جميع المستندات غير محدودة','10 مستخدمين (+3 ر.ع./إضافي)','جميع التقارير المالية','المساعد الذكي AI','تصدير PDF كامل','متعدد العملات','دعم فني أولوية']},
auth:{companyName:'اسم الشركة',username:'اسم المستخدم',password:'كلمة المرور',login:'تسجيل الدخول',loginTitle:'الدخول إلى النظام',invalidCredentials:'بيانات الدخول غير صحيحة',companyNotFound:'الشركة غير موجودة',userNotFound:'المستخدم غير موجود',wrongPassword:'كلمة المرور خاطئة'},
company:{name:'اسم الشركة',nameEn:'اسم الشركة (إنجليزي)',address:'العنوان',phone:'الهاتف',email:'البريد الإلكتروني',taxNumber:'الرقم الضريبي',crNumber:'السجل التجاري',logo:'الشعار',signature:'التوقيع',stamp:'الختم',uploadLogo:'رفع الشعار',uploadSignature:'رفع التوقيع',uploadStamp:'رفع الختم',fiscalYear:'السنة المالية',defaultCurrency:'العملة الافتراضية',taxRate:'نسبة الضريبة الافتراضية'},
confirmDelete:'هل أنت متأكد من الحذف؟',confirmAction:'هل أنت متأكد من هذا الإجراء؟',
// Flat aliases for underscore keys used in HTML/JS
nav_dashboard:'لوحة التحكم',nav_accounting:'المحاسبة',nav_chart_of_accounts:'شجرة الحسابات',nav_journal_entries:'القيود اليومية',nav_documents:'المستندات',nav_invoices:'الفواتير',nav_receipts:'سندات القبض',nav_payments:'سندات الصرف',nav_quotations:'عروض الأسعار',nav_reports:'التقارير',nav_income_statement:'قائمة الدخل',nav_balance_sheet:'الميزانية العمومية',nav_cash_flow:'التدفقات النقدية',nav_trial_balance:'ميزان المراجعة',nav_general_ledger:'دفتر الأستاذ',nav_ai_assistant:'المساعد الذكي',nav_settings:'الإعدادات',nav_private_space:'مساحتك الخاصة',
dash_total_revenue:'إجمالي الإيرادات',dash_total_expenses:'إجمالي المصروفات',dash_net_profit:'صافي الربح',dash_cash_balance:'الرصيد النقدي',dash_new_entry:'قيد جديد',dash_new_invoice:'فاتورة جديدة',dash_new_receipt:'سند قبض',dash_new_payment:'سند صرف',dash_financial_health:'مؤشر الصحة المالية',dash_recent_entries:'آخر القيود',
coa_title:'شجرة الحسابات',coa_add_account:'إضافة حساب',coa_edit_account:'تعديل حساب',coa_account_code:'رقم الحساب',coa_account_name:'اسم الحساب (عربي)',coa_account_name_en:'الاسم بالإنجليزية',coa_account_type:'نوع الحساب',coa_parent_account:'الحساب الرئيسي',coa_nature:'طبيعة الحساب',coa_debit:'مدين',coa_credit:'دائن',coa_level:'حساب رئيسي (عنوان)',coa_search:'بحث في الحسابات...',coa_no_accounts:'لا توجد حسابات. أضف حساباً جديداً أو حمّل الحسابات الافتراضية.',coa_assets:'الأصول',coa_liabilities:'الالتزامات',coa_equity:'حقوق الملكية',coa_revenue:'الإيرادات',coa_expenses:'المصروفات',coa_confirm_delete:'هل أنت متأكد من حذف هذا الحساب؟',coa_has_children:'لا يمكن حذف حساب له حسابات فرعية',coa_has_entries:'لا يمكن حذف حساب له معاملات',coa_current_assets:'أصول متداولة',coa_non_current_assets:'أصول غير متداولة',coa_current_liabilities:'التزامات متداولة',
je_new_entry:'قيد جديد',je_entry_number:'رقم القيد',je_date:'التاريخ',je_description:'البيان',je_reference:'المرجع',je_account:'الحساب',je_debit:'مدين',je_credit:'دائن',je_add_line:'إضافة سطر',je_total_debit:'إجمالي المدين',je_total_credit:'إجمالي الدائن',je_balanced:'متوازن',je_not_balanced:'غير متوازن',je_save:'حفظ القيد',je_post:'حفظ وترحيل',je_draft:'مسودة',je_posted:'مرحّل',je_void:'ملغي',je_no_entries:'لا توجد قيود يومية.',je_status:'الحالة',je_amount:'المبلغ',je_min_lines:'يجب إضافة سطرين على الأقل',je_confirm_post:'هل تريد ترحيل هذا القيد؟',je_confirm_void:'هل تريد إلغاء هذا القيد؟',
inv_new:'فاتورة جديدة',inv_number:'رقم الفاتورة',inv_no_invoices:'لا توجد فواتير.',inv_due_date:'تاريخ الاستحقاق',
rec_new:'سند قبض جديد',rec_number:'رقم سند القبض',rec_no_receipts:'لا توجد سندات قبض.',rec_received_from:'استلمنا من',
pay_new:'سند صرف جديد',pay_number:'رقم سند الصرف',pay_no_payments:'لا توجد سندات صرف.',pay_paid_to:'صُرف إلى',
quot_new:'عرض سعر جديد',quot_number:'رقم العرض',quot_no_quotations:'لا توجد عروض أسعار.',quot_valid_until:'صالح حتى',quot_terms:'الشروط والأحكام',quot_pending:'معلّق',quot_accepted:'مقبول',quot_rejected:'مرفوض',
doc_date:'التاريخ',doc_client:'العميل',doc_grand_total:'الإجمالي',doc_status:'الحالة',doc_amount:'المبلغ',doc_number:'الرقم',doc_payment_method:'طريقة الدفع',doc_cash:'نقداً',doc_bank_transfer:'تحويل بنكي',doc_check:'شيك',doc_check_number:'رقم الشيك',doc_bank_name:'اسم البنك',doc_subtotal:'المجموع الفرعي',doc_tax:'الضريبة',doc_discount:'الخصم',doc_notes:'ملاحظات',doc_item_description:'الوصف',doc_item_qty:'الكمية',doc_item_price:'السعر',doc_item_total:'الإجمالي',doc_paid:'مدفوعة',doc_unpaid:'غير مدفوعة',doc_cancelled:'ملغاة',
rep_generate:'عرض التقرير',rep_no_data:'اختر الفترة ثم اضغط عرض التقرير',rep_income_statement:'قائمة الدخل',rep_balance_sheet:'الميزانية العمومية',rep_cash_flow:'التدفقات النقدية',rep_trial_balance:'ميزان المراجعة',rep_total_revenue:'إجمالي الإيرادات',rep_cost_of_sales:'تكلفة المبيعات',rep_gross_profit:'مجمل الربح',rep_operating_expenses:'المصروفات التشغيلية',rep_other_income:'إيرادات أخرى',rep_net_income:'صافي الدخل',rep_total_assets:'إجمالي الأصول',rep_total_liabilities:'إجمالي الالتزامات',rep_total_equity:'إجمالي حقوق الملكية',rep_operating_activities:'الأنشطة التشغيلية',rep_investing_activities:'الأنشطة الاستثمارية',rep_financing_activities:'الأنشطة التمويلية',rep_net_cash:'صافي التغير في النقد',
ai_health_score:'مؤشر الصحة المالية',ai_health_excellent:'ممتاز',ai_health_good:'جيد',ai_health_fair:'مقبول',ai_health_poor:'ضعيف',ai_profit_analysis:'تحليل الربحية',ai_liquidity_analysis:'تحليل السيولة',ai_expense_analysis:'تحليل المصروفات',ai_trend_analysis:'تحليل الاتجاهات',ai_welcome:'مرحباً! أنا المساعد المالي الذكي. كيف يمكنني مساعدتك؟',ai_placeholder:'اسأل عن أي شيء مالي...',ai_analyzing:'جاري التحليل...',
rec_purpose:'الغرض',rec_amount:'المبلغ',pay_purpose:'الغرض',pay_amount:'المبلغ',
risk_alerts:'تنبيهات المخاطر',smart_insights:'رؤى ذكية',
confirmDelete:'هل تريد الحذف نهائياً؟',required:'مطلوب',
set_title:'الإعدادات',set_company_name:'اسم الشركة',set_company_name_en:'اسم الشركة بالإنجليزية',set_tax_number:'الرقم الضريبي',set_cr_number:'رقم السجل التجاري',set_phone:'الهاتف',set_email:'البريد الإلكتروني',set_address:'العنوان',set_currency:'العملة',set_country:'الدولة',set_tax_rate:'نسبة الضريبة',set_fiscal_year:'بداية السنة المالية',set_logo:'شعار الشركة',set_signature:'التوقيع',set_stamp:'الختم',set_save:'حفظ الإعدادات',
sub_current_plan:'الباقة الحالية',sub_monthly:'شهري',sub_yearly:'سنوي',sub_save_month:'وفّر شهر',
nav_pos:'نقطة البيع',nav_tax_declaration:'الإقرار الضريبي',sub_manage:'إدارة الاشتراكات',sub_plan_title:'الباقة والاشتراك',
gl_title:'دفتر الأستاذ',gl_select_account:'اختر الحساب',gl_running_balance:'الرصيد الجاري',gl_no_data:'اختر حساباً لعرض دفتر الأستاذ',
ps_title:'مساحتك الخاصة',ps_subtitle:'أنشئ قواعد بيانات مخصصة تناسب احتياجاتك',ps_new_db:'قاعدة بيانات جديدة',ps_new_record:'سجل جديد',ps_db_name:'اسم القاعدة',ps_field_name:'اسم الحقل',ps_field_type:'نوع الحقل',ps_add_field:'إضافة حقل',ps_text:'نص',ps_number:'رقم',ps_date:'تاريخ',ps_location:'موقع',ps_phone:'هاتف',ps_email:'بريد',ps_select:'قائمة اختيار',ps_no_dbs:'لا توجد قواعد بيانات. أنشئ واحدة جديدة!',
nav_pos:'نقاط البيع',nav_tax_declaration:'الإقرار الضريبي',
pos_add_product:'إضافة منتج',pos_cart:'السلة',pos_empty_cart:'السلة فارغة',pos_no_products:'لا توجد منتجات. أضف منتجات للبدء.',pos_clear:'مسح',pos_checkout:'إتمام البيع',pos_product_name:'اسم المنتج',pos_price:'السعر',pos_sku:'رمز المنتج',
tax_no_data:'اختر الفترة ثم اضغط عرض التقرير',tax_declaration:'الإقرار الضريبي',tax_period:'الفترة الضريبية',tax_total_sales:'إجمالي المبيعات',tax_output_vat:'ضريبة المخرجات',tax_total_purchases:'إجمالي المشتريات',tax_input_vat:'ضريبة المدخلات',tax_net_payable:'صافي الضريبة المستحقة',
validation:{required:'هذا الحقل مطلوب',balanceMismatch:'المدين لا يساوي الدائن',duplicateCode:'هذا الكود مستخدم مسبقاً'},
nav_pos:'نقطة البيع',nav_tax_declaration:'الإقرار الضريبي',pos_no_products:'لا توجد منتجات.',pos_cart:'السلة',pos_complete:'إتمام البيع',pos_print:'طباعة إيصال',tax_total_sales:'إجمالي المبيعات',tax_vat_collected:'ضريبة المخرجات',tax_total_purchases:'إجمالي المشتريات',tax_vat_paid:'ضريبة المدخلات',tax_net_payable:'صافي الضريبة المستحقة',sub_manage:'إدارة الاشتراكات',sub_plan_title:'الباقة والاشتراك',
nav_pos:'نقاط البيع',nav_tax_declaration:'الإقرار الضريبي',
pos_cart:'السلة',pos_no_products:'لا توجد منتجات. أضف منتجات للبدء.',pos_complete_sale:'إتمام البيع',pos_add_product:'إضافة منتج',pos_product_name:'اسم المنتج',pos_barcode:'الباركود',pos_price:'سعر البيع',pos_category:'التصنيف',pos_cart_empty:'السلة فارغة',
tax_declaration:'الإقرار الضريبي',tax_total_sales:'إجمالي المبيعات',tax_vat_collected:'ضريبة القيمة المضافة المحصّلة',tax_total_purchases:'إجمالي المشتريات',tax_vat_paid:'ضريبة القيمة المضافة المدفوعة',tax_net_vat:'صافي الضريبة المستحقة',
months:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
},

en:{appName:'Rekaz',appTagline:'Cloud Accounting System',save:'Save',cancel:'Cancel',delete:'Delete',edit:'Edit',add:'Add',search:'Search',filter:'Filter',export:'Export',import:'Import',print:'Print',close:'Close',confirm:'Confirm',back:'Back',next:'Next',loading:'Loading...',noData:'No data available',total:'Total',subtotal:'Subtotal',date:'Date',from:'From',to:'To',status:'Status',actions:'Actions',description:'Description',amount:'Amount',currency:'Currency',notes:'Notes',number:'Number',name:'Name',type:'Type',code:'Code',all:'All',active:'Active',inactive:'Inactive',success:'Operation completed successfully',error:'An error occurred',warning:'Warning',logout:'Logout',settings:'Settings',language:'Language',arabic:'العربية',english:'English',exportPDF:'Export PDF',exportExcel:'Export Excel',welcomeBack:'Welcome Back',required:'Required',optional:'Optional',yes:'Yes',no:'No',
nav:{dashboard:'Dashboard',accounting:'Accounting',chartOfAccounts:'Chart of Accounts',journalEntries:'Journal Entries',documents:'Documents',invoices:'Invoices',receipts:'Receipt Vouchers',payments:'Payment Vouchers',quotations:'Quotations',reports:'Reports',incomeStatement:'Income Statement',balanceSheet:'Balance Sheet',cashFlow:'Cash Flow',trialBalance:'Trial Balance',generalLedger:'General Ledger',aiAssistant:'AI Assistant',companySettings:'Company Settings',users:'Users',subscription:'Subscription'},
dashboard:{title:'Dashboard',totalRevenue:'Total Revenue',totalExpenses:'Total Expenses',netIncome:'Net Income',cashBalance:'Cash Balance',recentTransactions:'Recent Transactions',quickActions:'Quick Actions',newInvoice:'New Invoice',newEntry:'New Entry',newReceipt:'New Receipt',newPayment:'New Payment',financialHealth:'Financial Health',monthlyOverview:'Monthly Overview',pendingInvoices:'Pending Invoices',overdueInvoices:'Overdue Invoices',thisMonth:'This Month',lastMonth:'Last Month',thisYear:'This Year'},
coa:{title:'Chart of Accounts',addAccount:'Add Account',editAccount:'Edit Account',deleteAccount:'Delete Account',accountCode:'Account Code',accountName:'Account Name',accountNameEn:'Account Name (English)',accountType:'Account Type',parentAccount:'Parent Account',noParent:'Root Account (No Parent)',balance:'Balance',isActive:'Active',nature:'Account Nature',debit:'Debit',credit:'Credit',types:{assets:'Assets',currentAssets:'Current Assets',fixedAssets:'Fixed Assets',liabilities:'Liabilities',currentLiabilities:'Current Liabilities',longTermLiabilities:'Long-term Liabilities',equity:'Equity',revenue:'Revenue',expenses:'Expenses',cogs:'Cost of Goods Sold'},defaultAccounts:'Load Default Accounts',confirmDefault:'Load default IFRS Chart of Accounts?',hasChildren:'Cannot delete account with sub-accounts',hasTransactions:'Cannot delete account with transactions',expandAll:'Expand All',collapseAll:'Collapse All',searchAccounts:'Search accounts...'},
journal:{title:'Journal Entries',newEntry:'New Entry',editEntry:'Edit Entry',entryNumber:'Entry No.',entryDate:'Entry Date',reference:'Reference',account:'Account',debit:'Debit',credit:'Credit',addLine:'Add Line',removeLine:'Remove Line',totalDebit:'Total Debit',totalCredit:'Total Credit',difference:'Difference',balanced:'Balanced',unbalanced:'Unbalanced',post:'Post',draft:'Draft',posted:'Posted',reversed:'Reversed',reverseEntry:'Reverse Entry',postConfirm:'Post this entry?',narration:'Narration',createdBy:'Created By',balanceError:'Entry is unbalanced'},
invoices:{title:'Invoices',newInvoice:'New Invoice',editInvoice:'Edit Invoice',invoiceNumber:'Invoice No.',invoiceDate:'Invoice Date',dueDate:'Due Date',customer:'Customer',customerName:'Customer Name',customerAddress:'Customer Address',customerPhone:'Customer Phone',customerEmail:'Customer Email',customerTax:'Tax Number',item:'Item',itemDescription:'Item Description',quantity:'Quantity',unitPrice:'Unit Price',discount:'Discount',discountPercent:'Discount %',tax:'Tax',taxPercent:'Tax %',taxAmount:'Tax Amount',lineTotal:'Total',addItem:'Add Item',totalDiscount:'Total Discount',totalTax:'Total Tax',grandTotal:'Grand Total',amountPaid:'Amount Paid',amountDue:'Amount Due',paymentTerms:'Payment Terms',termsAndConditions:'Terms & Conditions',generatePDF:'Export PDF',markPaid:'Mark as Paid',duplicate:'Duplicate',status:{draft:'Draft',sent:'Sent',paid:'Paid',partial:'Partially Paid',overdue:'Overdue',cancelled:'Cancelled'}},
receipts:{title:'Receipt Vouchers',newReceipt:'New Receipt',receiptNumber:'Receipt No.',receivedFrom:'Received From',amountReceived:'Amount Received',paymentMethod:'Payment Method',cash:'Cash',bank:'Bank Transfer',check:'Check',card:'Card',other:'Other',checkNumber:'Check Number',bankName:'Bank Name',forPaymentOf:'For Payment Of',receiptDate:'Date'},
payments:{title:'Payment Vouchers',newPayment:'New Payment',paymentNumber:'Payment No.',paidTo:'Paid To',amountPaid:'Amount Paid',forPaymentOf:'For Payment Of',paymentDate:'Date',approvedBy:'Approved By',receivedBy:'Received By'},
quotations:{title:'Quotations',newQuotation:'New Quotation',quotationNumber:'Quotation No.',quotationDate:'Quotation Date',validUntil:'Valid Until',convertToInvoice:'Convert to Invoice',status:{draft:'Draft',sent:'Sent',accepted:'Accepted',rejected:'Rejected',expired:'Expired'}},
reports:{title:'Financial Reports',dateRange:'Date Range',generate:'Generate Report',noDataForPeriod:'No data for this period',incomeStatement:{title:'Income Statement',revenue:'Revenue',totalRevenue:'Total Revenue',cogs:'Cost of Goods Sold',grossProfit:'Gross Profit',operatingExpenses:'Operating Expenses',totalOperatingExpenses:'Total Operating Expenses',operatingIncome:'Operating Income',incomeBeforeTax:'Income Before Tax',incomeTax:'Income Tax',netIncome:'Net Income',period:'Period'},balanceSheet:{title:'Balance Sheet',assets:'Assets',currentAssets:'Current Assets',totalCurrentAssets:'Total Current Assets',nonCurrentAssets:'Non-Current Assets',totalNonCurrentAssets:'Total Non-Current Assets',totalAssets:'Total Assets',liabilities:'Liabilities',currentLiabilities:'Current Liabilities',totalCurrentLiabilities:'Total Current Liabilities',nonCurrentLiabilities:'Non-Current Liabilities',totalNonCurrentLiabilities:'Total Non-Current Liabilities',totalLiabilities:'Total Liabilities',equity:'Equity',capital:'Capital',retainedEarnings:'Retained Earnings',totalEquity:'Total Equity',totalLiabilitiesAndEquity:'Total Liabilities & Equity',asOf:'As of'},cashFlow:{title:'Cash Flow Statement',operating:'Operating Activities',investing:'Investing Activities',financing:'Financing Activities',netChange:'Net Change in Cash',openingBalance:'Opening Balance',closingBalance:'Closing Balance'},trialBalance:{title:'Trial Balance',account:'Account',debit:'Debit',credit:'Credit',totals:'Totals'},generalLedger:{title:'General Ledger',selectAccount:'Select Account',runningBalance:'Running Balance'}},
ai:{title:'AI Assistant',subtitle:'Smart Financial Analysis powered by AI',placeholder:'Ask about financial analysis, KPIs, accounting tips...',send:'Send',analyzing:'Analyzing...',healthScore:'Financial Health Score',excellent:'Excellent',good:'Good',fair:'Fair',poor:'Poor',critical:'Critical',suggestions:'Recommendations',ratios:'Financial Ratios',currentRatio:'Current Ratio',quickRatio:'Quick Ratio',debtToEquity:'Debt to Equity',profitMargin:'Profit Margin',roe:'Return on Equity',roa:'Return on Assets',upgradeRequired:'This feature requires a plan upgrade',questionsLeft:'Questions remaining',unlimited:'Unlimited'},
subscription:{title:'Plans & Subscriptions',free:'Free',basic:'Basic',pro:'Professional',current:'Current Plan',upgrade:'Upgrade',monthly:'Monthly',yearly:'Yearly',savemonth:'Save 1 Month',features:'Features',price:{free:'0',basicMonthly:'15',basicYearly:'165',proMonthly:'25',proYearly:'275',currency:'OMR'},freeFeatures:['Basic Chart of Accounts (20 accounts)','Journal Entries (30/month)','Documents (10/month)','Trial Balance only','1 User'],basicFeatures:['Extended Chart of Accounts (100 accounts)','Entries (200/month)','Documents (100/month)','3 Users (+5 OMR/extra)','Income Statement + Balance Sheet','PDF Export with Logo'],proFeatures:['Unlimited Chart of Accounts','Unlimited Documents','10 Users (+3 OMR/extra)','All Financial Reports','AI Assistant','Full PDF Export','Multi-Currency','Priority Support']},
auth:{companyName:'Company Name',username:'Username',password:'Password',login:'Login',loginTitle:'System Login',invalidCredentials:'Invalid credentials',companyNotFound:'Company not found',userNotFound:'User not found',wrongPassword:'Wrong password'},
company:{name:'Company Name',nameEn:'Company Name (English)',address:'Address',phone:'Phone',email:'Email',taxNumber:'Tax Number',crNumber:'Commercial Register',logo:'Logo',signature:'Signature',stamp:'Stamp',uploadLogo:'Upload Logo',uploadSignature:'Upload Signature',uploadStamp:'Upload Stamp',fiscalYear:'Fiscal Year',defaultCurrency:'Default Currency',taxRate:'Default Tax Rate'},
confirmDelete:'Are you sure you want to delete?',confirmAction:'Are you sure about this action?',
nav_dashboard:'Dashboard',nav_accounting:'Accounting',nav_chart_of_accounts:'Chart of Accounts',nav_journal_entries:'Journal Entries',nav_documents:'Documents',nav_invoices:'Invoices',nav_receipts:'Receipt Vouchers',nav_payments:'Payment Vouchers',nav_quotations:'Quotations',nav_reports:'Reports',nav_income_statement:'Income Statement',nav_balance_sheet:'Balance Sheet',nav_cash_flow:'Cash Flow',nav_trial_balance:'Trial Balance',nav_general_ledger:'General Ledger',nav_ai_assistant:'AI Assistant',nav_settings:'Settings',nav_private_space:'Your Private Space',
dash_total_revenue:'Total Revenue',dash_total_expenses:'Total Expenses',dash_net_profit:'Net Profit',dash_cash_balance:'Cash Balance',dash_new_entry:'New Entry',dash_new_invoice:'New Invoice',dash_new_receipt:'New Receipt',dash_new_payment:'New Payment',dash_financial_health:'Financial Health',dash_recent_entries:'Recent Entries',
coa_title:'Chart of Accounts',coa_add_account:'Add Account',coa_edit_account:'Edit Account',coa_account_code:'Account Code',coa_account_name:'Account Name (Arabic)',coa_account_name_en:'Account Name (English)',coa_account_type:'Account Type',coa_parent_account:'Parent Account',coa_nature:'Account Nature',coa_debit:'Debit',coa_credit:'Credit',coa_level:'Header Account',coa_search:'Search accounts...',coa_no_accounts:'No accounts found. Add a new one or load defaults.',coa_assets:'Assets',coa_liabilities:'Liabilities',coa_equity:'Equity',coa_revenue:'Revenue',coa_expenses:'Expenses',coa_confirm_delete:'Are you sure you want to delete this account?',coa_has_children:'Cannot delete: has sub-accounts',coa_has_entries:'Cannot delete: has transactions',coa_current_assets:'Current Assets',coa_non_current_assets:'Non-Current Assets',coa_current_liabilities:'Current Liabilities',
je_new_entry:'New Entry',je_entry_number:'Entry No.',je_date:'Date',je_description:'Description',je_reference:'Reference',je_account:'Account',je_debit:'Debit',je_credit:'Credit',je_add_line:'Add Line',je_total_debit:'Total Debit',je_total_credit:'Total Credit',je_balanced:'Balanced',je_not_balanced:'Unbalanced',je_save:'Save Entry',je_post:'Save & Post',je_draft:'Draft',je_posted:'Posted',je_void:'Void',je_no_entries:'No journal entries.',je_status:'Status',je_amount:'Amount',je_min_lines:'Minimum 2 lines required',je_confirm_post:'Post this entry?',je_confirm_void:'Void this entry?',
inv_new:'New Invoice',inv_number:'Invoice No.',inv_no_invoices:'No invoices.',inv_due_date:'Due Date',
rec_new:'New Receipt',rec_number:'Receipt No.',rec_no_receipts:'No receipts.',rec_received_from:'Received From',
pay_new:'New Payment',pay_number:'Payment No.',pay_no_payments:'No payments.',pay_paid_to:'Paid To',
quot_new:'New Quotation',quot_number:'Quotation No.',quot_no_quotations:'No quotations.',quot_valid_until:'Valid Until',quot_terms:'Terms & Conditions',quot_pending:'Pending',quot_accepted:'Accepted',quot_rejected:'Rejected',
doc_date:'Date',doc_client:'Client',doc_grand_total:'Total',doc_status:'Status',doc_amount:'Amount',doc_number:'Number',doc_payment_method:'Payment Method',doc_cash:'Cash',doc_bank_transfer:'Bank Transfer',doc_check:'Check',doc_check_number:'Check Number',doc_bank_name:'Bank Name',doc_subtotal:'Subtotal',doc_tax:'Tax',doc_discount:'Discount',doc_notes:'Notes',doc_item_description:'Description',doc_item_qty:'Qty',doc_item_price:'Price',doc_item_total:'Total',doc_paid:'Paid',doc_unpaid:'Unpaid',doc_cancelled:'Cancelled',
rep_generate:'Generate Report',rep_no_data:'Select period and click Generate',rep_income_statement:'Income Statement',rep_balance_sheet:'Balance Sheet',rep_cash_flow:'Cash Flow Statement',rep_trial_balance:'Trial Balance',rep_total_revenue:'Total Revenue',rep_cost_of_sales:'Cost of Sales',rep_gross_profit:'Gross Profit',rep_operating_expenses:'Operating Expenses',rep_other_income:'Other Income',rep_net_income:'Net Income',rep_total_assets:'Total Assets',rep_total_liabilities:'Total Liabilities',rep_total_equity:'Total Equity',rep_operating_activities:'Operating Activities',rep_investing_activities:'Investing Activities',rep_financing_activities:'Financing Activities',rep_net_cash:'Net Change in Cash',
ai_health_score:'Financial Health Score',ai_profit_analysis:'Profit Analysis',ai_liquidity_analysis:'Liquidity Analysis',ai_expense_analysis:'Expense Analysis',ai_trend_analysis:'Trend Analysis',ai_welcome:'Hello! I\'m your financial AI assistant. How can I help?',ai_placeholder:'Ask about financial analysis...',ai_analyzing:'Analyzing...',
set_title:'Settings',set_company_name:'Company Name',set_company_name_en:'Company Name (English)',set_tax_number:'Tax Number',set_cr_number:'Commercial Register',set_phone:'Phone',set_email:'Email',set_address:'Address',set_currency:'Currency',set_fiscal_year:'Fiscal Year Start',set_logo:'Company Logo',set_signature:'Signature',set_stamp:'Stamp',set_save:'Save Settings',
sub_current_plan:'Current Plan',sub_monthly:'Monthly',sub_yearly:'Yearly',sub_save_month:'Save 1 Month',
nav_pos:'Point of Sale',nav_tax_declaration:'Tax Declaration',sub_manage:'Manage Subscriptions',sub_plan_title:'Plan & Subscription',
gl_title:'General Ledger',gl_select_account:'Select Account',gl_running_balance:'Running Balance',gl_no_data:'Select an account to view ledger',
ps_title:'Your Private Space',ps_subtitle:'Create custom databases that fit your needs',ps_new_db:'New Database',ps_new_record:'New Record',ps_db_name:'Database Name',ps_field_name:'Field Name',ps_field_type:'Field Type',ps_add_field:'Add Field',ps_text:'Text',ps_number:'Number',ps_date:'Date',ps_location:'Location',ps_phone:'Phone',ps_email:'Email',ps_select:'Dropdown',ps_no_dbs:'No databases yet. Create one!',
nav_pos:'Point of Sale',nav_tax_declaration:'Tax Declaration',
pos_add_product:'Add Product',pos_cart:'Cart',pos_empty_cart:'Cart is empty',pos_no_products:'No products. Add products to start.',pos_clear:'Clear',pos_checkout:'Complete Sale',pos_product_name:'Product Name',pos_price:'Price',pos_sku:'SKU',
tax_no_data:'Select period and click Generate',tax_declaration:'Tax Declaration',tax_period:'Tax Period',tax_total_sales:'Total Taxable Sales',tax_output_vat:'Output VAT Collected',tax_total_purchases:'Total Purchases',tax_input_vat:'Input VAT Paid',tax_net_payable:'Net Tax Payable',
validation:{required:'This field is required',balanceMismatch:'Debits do not equal credits',duplicateCode:'This code is already in use'},
nav_pos:'Point of Sale',nav_tax_declaration:'Tax Declaration',pos_no_products:'No products.',pos_cart:'Cart',pos_complete:'Complete Sale',pos_print:'Print Receipt',tax_total_sales:'Total Sales',tax_vat_collected:'Output VAT',tax_total_purchases:'Total Purchases',tax_vat_paid:'Input VAT',tax_net_payable:'Net Tax Payable',sub_manage:'Manage Subscriptions',sub_plan_title:'Plan & Subscription',
nav_pos:'Point of Sale',nav_tax_declaration:'Tax Declaration',
pos_cart:'Cart',pos_no_products:'No products. Add products to start.',pos_complete_sale:'Complete Sale',pos_add_product:'Add Product',pos_product_name:'Product Name',pos_barcode:'Barcode',pos_price:'Price',pos_category:'Category',pos_cart_empty:'Cart is empty',
tax_declaration:'Tax Declaration',tax_total_sales:'Total Sales',tax_vat_collected:'VAT Collected',tax_total_purchases:'Total Purchases',tax_vat_paid:'VAT Paid',tax_net_vat:'Net VAT Due',
months:['January','February','March','April','May','June','July','August','September','October','November','December']
}
};

class I18nService {
  constructor() { this.currentLang = localStorage.getItem('rekaz_lang') || 'ar'; this.listeners = []; this._cache = {}; this._buildCache(); }
  get lang() { return this.currentLang; }
  get isRTL() { return this.currentLang === 'ar'; }
  get dir() { return this.isRTL ? 'rtl' : 'ltr'; }

  _buildCache() {
    this._cache = {};
    const flatten = (obj, prefix) => {
      for (const [key, val] of Object.entries(obj)) {
        const full = prefix ? `${prefix}_${key}` : key;
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          flatten(val, full);
        } else {
          this._cache[full] = val;
          // Also add snake_case version: camelCase → camel_case
          const snake = full.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
          if (snake !== full) this._cache[snake] = val;
        }
      }
    };
    flatten(translations[this.currentLang], '');
  }

  t(key) {
    // 1. Try flat cache (supports underscore keys)
    if (this._cache[key] !== undefined) return this._cache[key];
    // 2. Try dot notation
    const keys = key.split('.');
    let val = translations[this.currentLang];
    for (const k of keys) { if (val && val[k] !== undefined) val = val[k]; else return key; }
    if (typeof val === 'string') return val;
    return key;
  }

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('rekaz_lang', lang);
    this._buildCache();
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', this.dir);
    document.body.setAttribute('data-lang', lang);
    document.body.style.direction = this.dir;
    this.applyTranslations();
    this.listeners.forEach(fn => fn(lang));
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  }

  toggleLang() { this.setLang(this.currentLang === 'ar' ? 'en' : 'ar'); }
  onChange(fn) { this.listeners.push(fn); }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val && val !== key) {
        if (el.tagName === 'INPUT' && el.type !== 'hidden') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });
  }

  formatNumber(num) {
    if (num == null) return '0.00';
    // Always use English digits regardless of language
    return Number(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  formatCurrency(num, currency) {
    if (num == null) return '0.00';
    const curr = currency || (APP && APP.companyData && APP.companyData.currency) || 'OMR';
    const symbols = { SAR: 'ر.س', AED: 'د.إ', OMR: 'ر.ع.', KWD: 'د.ك', BHD: 'د.ب', QAR: 'ر.ق', EGP: 'ج.م', USD: '$' };
    const sym = this.currentLang === 'ar' ? (symbols[curr] || curr) : curr;
    return `${this.formatNumber(num)} ${sym}`;
  }

  formatDate(date) {
    if (!date) return '';
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) return date; // Return raw string if invalid
    // Always Gregorian, always English digits
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const monthNames = this.currentLang === 'ar'
      ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${day} ${monthNames[month-1]} ${year}`;
  }

  numberToWords(num, lang) {
    const useLang = lang || this.currentLang;
    if (!num || isNaN(num)) return useLang === 'ar' ? 'صفر' : 'Zero';
    num = Math.abs(Number(num));
    const integer = Math.floor(num);
    const decimal = Math.round((num - integer) * 100);

    if (useLang === 'ar') {
      return this._arabicNumberToWords(integer, decimal);
    } else {
      return this._englishNumberToWords(integer, decimal);
    }
  }

  _arabicNumberToWords(integer, decimal) {
    if (integer === 0 && decimal === 0) return 'صفر';
    const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة',
      'عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
    const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
    const hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
    const scales = ['', 'ألف', 'مليون', 'مليار'];

    const convertGroup = (n) => {
      if (n === 0) return '';
      let result = '';
      if (n >= 100) { result += hundreds[Math.floor(n / 100)]; n %= 100; if (n > 0) result += ' و'; }
      if (n >= 20) { const t = Math.floor(n / 10); const o = n % 10; if (o > 0) result += ones[o] + ' و'; result += tens[t]; }
      else if (n > 0) { result += ones[n]; }
      return result;
    };

    let parts = [];
    let scaleIdx = 0;
    let temp = integer;
    while (temp > 0) {
      const group = temp % 1000;
      if (group > 0) {
        let groupText = convertGroup(group);
        if (scaleIdx > 0) {
          if (group === 1) groupText = scales[scaleIdx];
          else if (group === 2) groupText = scales[scaleIdx] + 'ان';
          else groupText = groupText + ' ' + scales[scaleIdx];
        }
        parts.unshift(groupText);
      }
      temp = Math.floor(temp / 1000);
      scaleIdx++;
    }
    let result = parts.join(' و') || 'صفر';
    if (decimal > 0) result += ` و${decimal}/100`;
    return result + ' فقط لا غير';
  }

  _englishNumberToWords(integer, decimal) {
    if (integer === 0 && decimal === 0) return 'Zero';
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Million', 'Billion'];

    const convertGroup = (n) => {
      if (n === 0) return '';
      let result = '';
      if (n >= 100) { result += ones[Math.floor(n / 100)] + ' Hundred'; n %= 100; if (n > 0) result += ' and '; }
      if (n >= 20) { result += tens[Math.floor(n / 10)]; if (n % 10 > 0) result += '-' + ones[n % 10]; }
      else if (n > 0) { result += ones[n]; }
      return result;
    };

    let parts = [];
    let scaleIdx = 0;
    let temp = integer;
    while (temp > 0) {
      const group = temp % 1000;
      if (group > 0) {
        let groupText = convertGroup(group);
        if (scaleIdx > 0) groupText += ' ' + scales[scaleIdx];
        parts.unshift(groupText);
      }
      temp = Math.floor(temp / 1000);
      scaleIdx++;
    }
    let result = parts.join(', ') || 'Zero';
    if (decimal > 0) result += ` and ${decimal}/100`;
    return result + ' Only';
  }
}
const i18n = new I18nService();
