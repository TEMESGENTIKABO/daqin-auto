const arTranslations = {
  // Header
  header: {
    title: "دا تشين أوتو",
    companyFull: "شركة شيآن دا تشين داو ري للتجارة الدولية المحدودة",
    company: "شركة شيآن دا تشين داو ري للتجارة الدولية المحدودة",
    brandTitle: "دا تشين أوتو", // Arabic brand name
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      brands: "العلامات التجارية",
      vehicles: "المركبات",
      services: "الخدمات",
      contact: "اتصل بنا",
      models: "الموديلات",
    },
    contactBtn: "٨٦-١٥٥٩٤٦٣٤٩٥٥+",
    // New keys for Header component
    searchPlaceholder: "ابحث عن مركبات، علامات تجارية، موديلات...",
    searchButton: "بحث",
    clearSearch: "مسح البحث",
    language: "اللغة",
    premiumVehicleExporter: "مصدر مركبات فاخر",
    quickSearches: "بحث سريع:",
  },

  // Hero
  hero: {
    tagline: "مصدر سيارات موثوق",
    title: "سيارات صينية فاخرة",
    subtitle: "توصيل عالمي",
    description:
      "شركة شيآن دا تشين داو ري للتجارة الدولية المحدودة توفر سيارات بنزين، كهربائية، وهجينة عالية الجودة من ماركات رائدة عالمياً.",
    stats: {
      brands: "ماركة",
      vehicles: "مركبة تم تصديرها",
      support: "دعم",
    },
    cta: {
      quote: "احصل على عرض سعر مجاني",
      brands: "عرض الماركات",
    },
    features: {
      quality: "ضمان الجودة",
      shipping: "شحن عالمي",
      support: "دعم متخصص",
    },
    statsTitles: {
      quality: "جودة",
      supply: "توريد",
      team: "فريق",
      logistics: "لوجستيات",
      support24: "دعم",
    },
    statsDescriptions: {
      quality: "فحوصات صارمة: 100% قبل الشحن",
      supply: "إمداد مستقر: مرحب بالطلبات الكبيرة",
      team: "فريق خبير: خبرة تصدير موثوقة",
      logistics: "لوجستيات عالمية: من الباب إلى الباب",
      support24: "دعم عالمي: مساعدة مخصصة على مدار الساعة",
    },
    statsNumbers: {
      quality: "100%",
      supply: "10,000+",
      team: "50,000+",
      logistics: "20+",
      support24: "24/7",
    },
    premiumExport: "تصدير سيارات فاخرة",
    years: "سنوات",

    // New keys for the Hero component:
    heroTitle: "مورد السيارات الموثوق به في الصين",
    rigorousQC: "فحوصات صارمة: 100% قبل الشحن",
    stableSupply: "إمداد مستقر: مرحب بالطلبات الكبيرة",
    expertTeam: "فريق خبير: خبرة تصدير موثوقة",
    globalLogistics: "لوجستيات عالمية: من الباب إلى الباب",
    globalSupport: "دعم عالمي: مساعدة مخصصة على مدار الساعة",
  },
  // Services
  services: {
    title: "حلول تصدير شاملة",
    subtitle: "عملية تصدير مركبات مبسطة من التوريد إلى التسليم",
    items: [
      {
        title: "توريد المركبات",
        description: "شبكة واسعة لإيجاد المركبة المثالية المناسبة لك",
      },
      {
        title: "فحص الجودة",
        description: "فحص شامل قبل الشحن والاعتماد",
      },
      {
        title: "معالجة التصدير",
        description: "معالجة كاملة للوثائق التصديرية واللوجستيات",
      },
    ],
  },
  // Vehicles
  vehicles: {
    title: "أنواع المركبات",
    subtitle: "مجموعة شاملة من تقنيات المركبات لاحتياجات السوق المتنوعة",
    portfolio: "الحافظة",
    keySpecifications: "المواصفات الرئيسية",
    mainFeatures: "المميزات الرئيسية",
    mobileInstructions: "انقر على أي بطاقة مركبة لعرض المواصفات والمميزات التفصيلية",
    requestQuote: "طلب عرض سعر",
    viewAllVehicles: "عرض جميع المركبات",
    requestDetails: "طلب تفاصيل {name}",
    // Vehicle type specific translations
    ev: {
      name: "مركبة كهربائية",
      fullName: "المركبة الكهربائية",
      description: "مركبات كهربائية بالكامل ذات انبعاثات صفرية وتقنية متقدمة",
      features: [
        "انبعاثات صفرية من العادم",
        "تسليم عزم دوران فوري",
        "تكاليف تشغيل منخفضة",
        "اتصال متقدم",
        "قابلية الشحن السريع"
      ],
      specifications: [
        { label: "النطاق", value: "٣٠٠-٥٠٠ كم" },
        { label: "وقت الشحن", value: "٣٠-٤٥ دقيقة (تيار مباشر)" },
        { label: "عمر البطارية", value: "٨-١٠ سنوات" }
      ]
    },
    phev: {
      name: "هايبرد قابلة للشحن",
      fullName: "مركبة هجينة قابلة للشحن",
      description: "تجمع بين المحرك الكهربائي ومحرك البنزين لتحقيق أقصى مرونة",
      features: [
        "قيادة كهربائية حصرية في المدينة",
        "نطاق إجمالي ممتد",
        "خيارات شحن مرنة",
        "حوافز حكومية",
        "تقليل استهلاك الوقود"
      ],
      specifications: [
        { label: "النطاق الكهربائي", value: "٥٠-٨٠ كم" },
        { label: "النطاق الإجمالي", value: "٦٠٠-٨٠٠ كم" },
        { label: "اقتصاد الوقود", value: "١.٥-٢.٠لتر/١٠٠كم" }
      ]
    },
    reev: {
      name: "مركبة كهربائية ممتدة النطاق",
      fullName: "مركبة كهربائية بمولد ممتد النطاق",
      description: "دفع كهربائي بمولد على متن المركبة لقدرات نطاق ممتدة",
      features: [
        "تجربة قيادة كهربائية نقية",
        "لا قلق من نطاق القيادة",
        "تكلفة بطارية أقل",
        "مصادر طاقة مرنة",
        "تشغيل سلس"
      ],
      specifications: [
        { label: "نطاق البطارية", value: "١٥٠-٢٠٠ كم" },
        { label: "النطاق الممتد", value: "٥٠٠-٧٠٠ كم" },
        { label: "نوع المولد", value: "بنزين/غاز طبيعي مضغوط" }
      ]
    },
    petrol: {
      name: "احتراق داخلي",
      fullName: "محرك احتراق داخلي",
      description: "مركبات بنزين/ديزل تقليدية ذات موثوقية مثبتة",
      features: [
        "موثوقية مثبتة",
        "شبكة خدمة واسعة الانتشار",
        "إعادة التزود بالوقود السريع",
        "تكلفة أولية أقل",
        "بنية تحتية عالمية"
      ],
      specifications: [
        { label: "أنواع الوقود", value: "بنزين/ديزل/غاز طبيعي مضغوط" },
        { label: "الكفاءة", value: "١٥-٢٥ كم/لتر" },
        { label: "قوة الإخراج", value: "١٠٠-٣٠٠ حصان" }
      ]
    }
  },
  // Contact details (in Arabic format with RTL numbers)
  contactDetails: {
    phone: "٨٦-١٥٥-٩٤٦٣-٤٩٥٥+",
    phoneDisplay: "٨٦-١٥٥-٩٤٦٣-٤٩٥٥+",
    email: "contact@daqinauto.com",
    address: "شيآن، مقاطعة شانشي، الصين",
    wechatId: "daqin_auto",
    telegramId: "@daqinauto",
    whatsapp: "٨٦-١٥٥-٩٤٦٣-٤٩٥٥+"
  },
  
  // Contact
  contact: {
    title: "اتصل بنا في أي وقت",
    subtitle: "دعم احترافي على مدار الساعة لاستفسارات المركبات والأسعار وفرص الشراكة",
    clickToContact: "انقر للاتصال",
    clickToViewLocation: "انقر لعرض الموقع",
    instant: "فوري",
    location: "الموقع",
    directCall: "مكالمة مباشرة",
    available247: "متاح 24/7",
    whatsapp: "واتساب",
    instantMessaging: "رسائل فورية",
    wechat: "وي شات",
    scanQRCode: "مسح رمز الاستجابة السريعة",
    telegram: "تيليجرام",
    secureMessaging: "رسائل آمنة",
    email: "البريد الإلكتروني",
    businessInquiries: "استفسارات العمل",
    officeAddress: "عنوان المكتب",
    visitOurShowroom: "زيارة معرضنا",
    preferToSpeakDirectly: "تفضل التحدث مباشرة؟",
    salesTeamAvailable: "فريق المبيعات لدينا متاح للمساعدة الفورية",
    callNow: "اتصل الآن",
    businessHours: "ساعات العمل: 24/7 • وقت الاستجابة: خلال 30 دقيقة"
  },
  // Featured Models
  featuredModels: {
    title: "الموديلات المميزة",
    subtitle: "اختيار مميز من المخزون",
    viewAllModels: "جميع الموديلات",
    filterAll: "الكل",
    filterNew: "جديد",
    filterInStock: "متوفر",
    filterSoon: "قريباً",
    noModelsFound: "لم يتم العثور على موديلات",
    noModelsMatch: "لا توجد موديلات تطابق التصفية الحالية.",
    showAllModels: "عرض جميع الموديلات",
    details: "تفاصيل",
    inquire: "استفسر",
    getQuote: "الحصول على عرض سعر",
    contactForQuote: "اتصل للحصول على عرض سعر",
    fobChina: "فوب الصين",
    featured: "مميز",
    statusNew: "جديد",
    statusInStock: "متوفر",
    statusSoon: "قريباً",
    statusLimited: "محدود",
    statusBest: "الأفضل",
    statusPreOrder: "طلبية مسبقة",
    statusSpecial: "إصدار خاص"
  },
  // About
  about: {
    title: "عن دا تشين أوتو",
    description: "شريكك الموثوق لتصدير السيارات الصينية مع أكثر من عقد من الخبرة",
    storyTitle: "قصتنا",
    fullDescription: "دا تشين أوتو، التابعة لشركة شيآن دا تشين داو ري للتجارة الدولية المحدودة، هي مورد ومصدر سيارات مستقل مقرها في الصين.",
    mission: {
      title: "مهمتنا",
      text: "توفير مركبات عالية الجودة بأسعار تنافسية مع خدمة استثنائية، مما يجعل تصدير السيارات من الصين متاحًا وموثوقًا به للشركاء في جميع أنحاء العالم."
    },
    vision: {
      title: "رؤيتنا",
      text: "أن نصبح الشريك الأكثر ثقة وابتكارًا في تصدير السيارات من الصين، معترف به عالميًا لجودته ونزاهته ورضا العملاء."
    },
    values: {
      title: "قيمنا",
      text: "النزاهة، ضمان الجودة، تركيز العملاء، التحسين المستمر، والشراكات المستدامة المبنية على الثقة والنجاح المتبادل."
    },
    whyChooseUs: "لماذا تختار دا تشين أوتو",
    features: {
      experience: {
        title: "الخبرة",
        description: "أكثر من 10 سنوات من الخبرة في تصدير السيارات، وفهم احتياجات السوق في مختلف المناطق."
      },
      quality: {
        title: "ضمان الجودة",
        description: "فحص دقيق للمركبات وعمليات مراقبة الجودة لضمان وصول أفضل السيارات فقط لعملائنا."
      },
      global: {
        title: "الوصول العالمي",
        description: "شبكة لوجستية راسخة وشراكات لشحن سلس إلى الوجهات في جميع أنحاء العالم."
      },
      support: {
        title: "دعم العملاء",
        description: "فريق دعم متعدد اللغات على مدار الساعة مكرس لمساعدة العملاء طوال العملية."
      }
    },
    ctaTitle: "مستعدون للشراكة معنا؟",
    ctaDescription: "انضم إلى مئات الشركاء الراضين في جميع أنحاء العالم الذين يثقون بشركة دا تشين أوتو لاحتياجاتهم من السيارات.",
    viewModels: "عرض سياراتنا"
  },

  // Common
  common: {
    phone: "٨٦-١٥٥٩٤٦٣٤٩٥٥+",
    email: "contact@daqinauto.com",
    address: "شيآن، مقاطعة شانشي، الصين",
    available: "متوفر ٢٤/٧",
    learnMore: "المزيد →",
    services: "خدماتنا",
    process: "كيف يعمل",
    getStarted: "ابدأ اليوم",
  },
// Process
  process: {
    title: "عملية تصدير مبسطة",
    subtitle: "نهج شفاف خطوة بخطوة يضمن الجودة والتسليم في الوقت المناسب",
    ctaTitle: "هل أنت مستعد لبدء رحلة التصدير الخاصة بك؟",
    ctaDescription: "تواصل مع خبرائنا للحصول على استشارة شخصية",
    steps: [
      {
        title: "الاستشارة الأولية",
        description: "نحن نفهم متطلباتك وميزانيتك والجدول الزمني"
      },
      {
        title: "اختيار المركبة",
        description: "نقوم بتوريد مركبات مناسبة وتقديم مواصفات مفصلة"
      },
      {
        title: "فحص الجودة",
        description: "فحص شامل قبل الشحن مع تقرير مفصل"
      },
      {
        title: "الشحن والتسليم",
        description: "تسليم من الباب إلى الباب مع دعم التخليص الجمركي"
      }
    ]
  },
  // Footer
  footer: {
    companyTagline: "شريكك الموثوق لتصدير السيارات الصينية.",
    headquarters: "المقر الرئيسي",
    clickToContact: "انقر على أي رمز للاتصال فوراً",
    contactDetails: "تفاصيل الاتصال",
    contactVia: "الاتصال عبر:",
    quickLinks: "روابط سريعة",
    whyChooseUs: "لماذا تختارنا",
    language: "اللغة:",
    copyright: "جميع الحقوق محفوظة.",
    qualityAssurance: "ضمان الجودة",
    globalShipping: "شحن عالمي",
    support24_7: "دعم ٢٤/٧",
    yearsExperience: "١٠+ سنوات خبرة",
  },

  // Dropdowns (new section for Header)
  dropdowns: {
    brands: {
      allBrands: "جميع العلامات التجارية",
      chineseBrands: "العلامات التجارية الصينية",
      internationalBrands: "العلامات التجارية الدولية",
      featuredModels: "الموديلات المميزة",
    },
    models: {
      allModels: "جميع الموديلات",
      newArrivals: "وصلات جديدة",
      electricVehicles: "المركبات الكهربائية",
      suvs: "دفع رباعي",
      sedans: "سيدان",
    },
    quickSearch: {
      electricVehicles: "المركبات الكهربائية",
      suvs: "دفع رباعي",
      byd: "بي واي دي",
      tesla: "تسلا",
    },
  },
};

export { arTranslations };
