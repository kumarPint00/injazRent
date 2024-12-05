import WhatsIncludeScreen from '../screens/app/dashboard/home/features/whats/WhatsIncludeScreen';
import KeyFeaturesScreen from '../screens/app/dashboard/home/features/key/KeyFeaturesScreen';
import CarAllDetails from '../screens/app/dashboard/home/carAllDetails/CarAllDetails';
import CarFeaturesScreen from '../screens/app/dashboard/home/carFeatures/CarFeaturesScreen';
import CarRequireMentScreen from '../screens/app/dashboard/home/carRequireMent/CarRequireMentScreen';
import YourDocumentsScreen from '../screens/app/dashboard/home/documents/yourDocuments/YourDocumentsScreen';
import AddOnDriversScreen from '../screens/app/dashboard/home/addOnDrivers/AddOnDriversScreen';
import TermsConditionScreen from '../screens/app/dashboard/home/agreement/termsConditions/TermsConditionsScreen';
import SubscriptionScreen from '../screens/app/dashboard/home/agreement/subscription/SubscriptionScreen';
import colors from './colors';
import images from './images';

export const tabs = [
  {
    label: {en: "What's Included", ar: 'ما يتضمنه'},
    screen: <WhatsIncludeScreen />,
  },
  {
    label: {en: 'Key Features', ar: 'الميزات الرئيسية'},
    screen: <KeyFeaturesScreen />,
  },
];

export const tabCarSpecs = [
  {
    label: {en: 'Car All Details', ar: 'كافة تفاصيل السيارة'},
    screen: <CarAllDetails />,
  },
  {label: {en: 'Features', ar: 'الميزات'}, screen: <CarFeaturesScreen />},
  {
    label: {en: 'Requirements', ar: 'المتطلبات'},
    screen: <CarRequireMentScreen />,
  },
];

export const tabDocuments = [
  {
    label: {en: 'Your Documents', ar: 'مستنداتك'},
    screen: <YourDocumentsScreen />,
  },
  {
    label: {en: 'Add On Drivers', ar: 'إضافة السائقين'},
    screen: <AddOnDriversScreen />,
  },
];

export const CountriesAndCities = [
  {
    country: 'United Arab Emirates',
    cities: ['Riyadh', 'Dmam', 'AI Ain'],
  },
];
export const agreement = [
  {
    label: {en: 'T & C’s', ar: 'الشروط والأحكام'},
    screen: <TermsConditionScreen />,
  },
  {
    label: {en: 'Subscriptions', ar: 'الاشتراكات'},
    screen: <SubscriptionScreen />,
  },
];
export const countryCodes = [
  {code: '+1', flag: images.UAE_FLAG},
  {code: '+44', flag: images.UAE_FLAG},
];

export const bannerData = [
  {
    id: '1',
    image: images.BANNER,
  },
  {
    id: '2',
    image: images.BANNER,
  },
  {
    id: '3',
    image: images.BANNER,
  },
  {
    id: '4',
    image: images.BANNER,
  },
];

export const categoriesData = [
  {
    id: '1',
    image: images.CAT_1,
    category: 'ALL',
    title: {en: 'ALL', ar: 'الجميع'},
  },
  {
    id: '2',
    image: images.CAT_2,
    category: 'ECONOMY',
    title: {en: 'ECONOMY', ar: 'اقتصاد'},
  },
  {
    id: '3',
    image: images.CAT_3,
    category: 'SUV',
    title: {en: 'SUV', ar: 'سيارات الدفع الرباعي'},
  },
  {
    id: '4',
    image: images.CAT_4,
    category: 'SEDAN',
    title: {en: 'SEDAN', ar: 'سيدان'},
  },
  {
    id: '5',
    image: images.CAT_3,
    category: 'COMPACT',
    title: {en: 'COMPACT', ar: 'المدمج'},
  },
  {
    id: '6',
    image: images.CAT_5,
    category: 'HATCHBACK',
    title: {en: 'HATCHBACK', ar: 'هاتشباك'},
  },
  {
    id: '7',
    image: images.CAT_3,
    category: 'LUXURY',
    title: {en: 'LUXURY', ar: 'رفاهية'},
  },
  {
    id: '7',
    image: images.CAT_2,
    category: 'CROSSOVER',
    title: {en: 'CROSSOVER', ar: 'عبور'},
  },
];

export const carouselData = [
  {id: '1', images: [{id: '1', image: images.ARROW_LEFT}]},
  {id: '2', images: [{id: '2', image: images.ARROW_LEFT}]},
  {id: '3', images: [{id: '3', image: images.ARROW_LEFT}]},
  {id: '4', images: [{id: '4', image: images.ARROW_LEFT}]},
];

export const carsSpecsData = [
  {
    id: '1',
    title: 'View full specs',
  },
  {
    id: '2',
    title: '2023',
  },
  {
    id: '3',
    title: '69,00 KM',
  },
  {
    id: '4',
    title: 'Sedan',
  },
  {
    id: '5',
    title: 'white',
  },
];
export const WhatsIncData = [
  {
    id: '1',
    title: 'Certified car',
  },
  {
    id: '2',
    title: 'Basic insurance',
  },
  {
    id: '3',
    title: 'Free cancelation',
  },
  {
    id: '4',
    title: 'Maintencnce',
  },
  {
    id: '5',
    title: 'Less paperwork',
  },
  {
    id: '6',
    title: 'Car replacement',
  },
];
export const keyFeaturesData = [
  {
    id: '1',
    title: {en: 'Cruise control', ar: 'التحكم في السرعة'},
    icon: images.CRUISE_CONTROL,
  },
  {
    id: '2',
    title: {en: 'Seating', ar: 'الجلوس'},
    icon: images.SEAT,
  },
  {
    id: '3',
    title: {en: 'Abs Brakes', ar: 'فرامل ABS'},
    icon: images.ABS,
  },
  {
    id: '4',
    title: {en: 'Dual front Airbags', ar: 'وسائد هوائية أمامية مزدوجة'},
    icon: images.AIR_BAG,
  },
  {
    id: '5',
    title: {en: 'Bluetooth', ar: 'بلوتوث'},
    icon: images.BLUETOOTH,
  },
  {
    id: '6',
    title: {en: '', ar: ''},
  },
];

export const technicalDetails = [
  {
    id: '1',
    name: 'Engine',
    info: '1.5 Engine',
  },
  {
    id: '2',
    name: 'Transmission',
    info: 'Automatic',
  },
  {
    id: '3',
    name: 'Max Power',
    info: '99 bhp',
  },
  {
    id: '4',
    name: 'Fuel System',
    info: 'Electronic Fuel Injection',
  },
];
export const categories = [
  {title: 'Brand', key: 'Brand', image: images.RIGHT},
  {title: 'Model', key: 'Model', image: images.RIGHT},
  {title: 'Year', key: 'Year', image: images.RIGHT},
  {title: 'Price', key: 'Price', image: images.RIGHT},
];

export const brand = [
  {title: 'Maruti Suzuki', key: 'Maruti Suzuki'},
  {title: 'Audi', key: 'Audi'},
  {title: 'i20', key: 'i20'},
];

export const model = [
  {title: 'XUV 300', key: 'XUV 300'},
  {title: 'Verna', key: 'Verna'},
  {title: 'City', key: 'City'},
];

export const year = [
  {title: '2020', key: '2020'},
  {title: '2021', key: '2021'},
  {title: '2022', key: '2022'},
];
export const priceList = [
  {title: 'Low High', key: 'Low High'},
  {title: 'High Low', key: 'High Low'},
];

export const yourDocuments = [
  {
    id: '1',
    title: {en: 'UAE Driving License', ar: 'رخصة القيادة الإماراتية'},
  },
  {
    id: '2',
    title: {en: 'Emirates ID', ar: 'بطاقة الهوية الإماراتية'},
    sub_title: {en: 'Front and Back', ar: 'الوجه والظهر'},
  },
];

// export const profileData = [
//   {
//     id: '1',
//     title: {en: 'Booking History', ar: 'سجل الحجوزات'},
//     image: images.CALENDARSS,
//     right: images.RIGHT,
//     background: '#E8EEF6',
//   },
//   {
//     id: '2',
//     title: {en: 'Documents', ar: 'المستندات'},
//     image: images.FILE,
//     right: images.RIGHT,
//     background: '#CED1E0',
//   },
//   {
//     id: '3',
//     title: {en: 'Invoice', ar: 'الفاتورة'},
//     image: images.FILE,
//     right: images.RIGHT,
//     background: '#D2DBF8',
//   },
//   {
//     id: '4',
//     title: {en: 'Wallet', ar: 'المحفظة'},
//     image: images.WALLETT,
//     right: images.RIGHT,
//     background: '#ebdce3',
//   },
//   // {
//   //   id: '5',
//   //   title: {en: 'Address', ar: 'العنوان'},
//   //   image: images.PIN,
//   //   right: images.RIGHT,
//   //   background: '#EEF9DB',
//   // },
//   {
//     id: '5',
//     title: {en: 'Language', ar: 'اللغة'},
//     image: images.LANGUAGE,
//     right: images.RIGHT,
//     background: '#D3D6F7',
//   },
//   {
//     id: '6',
//     title: {en: 'Favourites', ar: 'المفضلة'},
//     image: images.BLACK_HEART,
//     right: images.RIGHT,
//     background: '#E8EEF6',
//   },
//   {
//     id: '7',
//     title: {en: 'Invite & Earn', ar: 'دعوة وكسب'},
//     image: images.SHARE,
//     right: images.RIGHT,
//     background: '#EAE5E4',
//   },
//   {
//     id: '8',
//     title: {en: 'Settings', ar: 'الإعدادات'},
//     image: images.SETTINGS,
//     right: images.RIGHT,
//     background: '#EEF9DB',
//   },

//   {
//     id: '9',
//     title: {en: 'Privacy Policy', ar: 'سياسة الخصوصية'},
//     image: images.PRIVACY,
//     right: images.RIGHT,
//     background: '#CED1E0',
//   },
//   {
//     id: '10',
//     title: {en: 'Logout', ar: 'تسجيل الخروج'},
//     image: images.LOGOUT,
//     right: images.RIGHT,
//     background: '#F50E02',
//   },
// ];
export const profileData = [
  // {
  //   id: '1',
  //   title: {en: 'Booking History', ar: 'سجل الحجوزات'},
  //   image: images.CALENDARSS,
  //   right: images.RIGHT,
  //   background: '#E8EEF6',
  // },
  {
    id: '1',
    title: {en: 'Documents', ar: 'المستندات'},
    image: images.FILE,
    right: images.RIGHT,
    background: '#CED1E0',
  },
  // {
  //   id: '2',
  //   title: {en: 'Invoice', ar: 'الفاتورة'},
  //   image: images.FILE,
  //   right: images.RIGHT,
  //   background: '#D2DBF8',
  // },
  // {
  //   id: '3',
  //   title: {en: 'Wallet', ar: 'المحفظة'},
  //   image: images.WALLETT,
  //   right: images.RIGHT,
  //   background: '#ebdce3',
  // },

  {
    id: '2',
    title: {en: 'Language', ar: 'اللغة'},
    image: images.LANGUAGE,
    right: images.RIGHT,
    background: '#D3D6F7',
  },
  {
    id: '3',
    title: {en: 'Favourites', ar: 'المفضلة'},
    image: images.BLACK_HEART,
    right: images.RIGHT,
    background: '#E8EEF6',
  },
  {
    id: '4',
    title: {en: 'Invite & Earn', ar: 'دعوة وكسب'},
    image: images.SHARE,
    right: images.RIGHT,
    background: '#EAE5E4',
  },
  // {
  //   id: '6',
  //   title: {en: 'Settings', ar: 'الإعدادات'},
  //   image: images.SETTINGS,
  //   right: images.RIGHT,
  //   background: '#EEF9DB',
  // },

  {
    id: '5',
    title: {en: 'Privacy Policy', ar: 'سياسة الخصوصية'},
    image: images.PRIVACY,
    right: images.RIGHT,
    background: '#CED1E0',
  },
  {
    id: '6',
    title: {en: 'Logout', ar: 'تسجيل الخروج'},
    image: images.LOGOUT,
    right: images.RIGHT,
    background: '#F50E02',
  },
];
export const bookingData = [
  {
    id: '1',
    car: {en: 'Hyundai Verna', ar: 'هيونداي فيرنا'},
    type: {en: 'Automatic', ar: 'أوتوماتيك'},
    seater: {en: '5 Seaters', ar: '5 مقاعد'},
    collect: {
      en: 'Collect Date & Time : 28/9/23 , 10:00 AM',
      ar: 'تاريخ ووقت الاستلام: ٢٨/٩/٢٣ ، ١٠:٠٠ صباحًا',
    },
    return: {
      en: 'Return Date & Time : 28/9/23 , 10:00 AM',
      ar: 'تاريخ ووقت الإرجاع: ٢٨/٩/٢٣ ، ١٠:٠٠ صباحًا',
    },
    price: {en: 'AED 2400', ar: 'درهم إماراتي ٢٤٠٠'},
    rating: {en: '3.5/5', ar: '٣.٥/٥'},
    ratingCount: {en: '( 235 )', ar: '( ٢٣٥ )'},
    image: images.STORMY,
  },
];

export const walletData = [
  {
    id: '1',
    received: {en: 'Received From', ar: 'المستلم من'},
    price: {en: '$30', ar: '٣٠'},
    referalId: {en: '#1234567', ar: '#١٢٣٤٥٦٧'},
    type: {en: 'credited', ar: 'تمت الاعتماد'},
    date: {en: '1 day ago', ar: 'قبل يوم واحد'},
    call_type: images.INCOMING,
  },
  {
    id: '2',
    received: {en: 'Received From', ar: 'المستلم من'},
    price: {en: '$30', ar: '٣٠'},
    referalId: {en: '#1234567', ar: '#١٢٣٤٥٦٧'},
    type: {en: 'credited', ar: 'تمت الاعتماد'},
    date: {en: '1 day ago', ar: 'قبل يوم واحد'},
    call_type: images.OUTGOING,
  },
];

export const settingsData = [
  {
    id: '1',
    title: {en: 'Notifications', ar: 'الإشعارات'},
    sub_title: {
      en: 'Notification alert for order confirmation',
      ar: 'تنبيه الإشعار لتأكيد الطلب',
    },
  },
  // {
  //   id: '2',
  //   title: {en: 'Terms & Conditions', ar: 'الشروط والأحكام'},
  //   sub_title: {
  //     en: 'Notification alert for order confirmation',
  //     ar: 'تنبيه الإشعار لتأكيد الطلب',
  //   },
  //   image: images.FILE,
  //   right: images.RIGHT,
  //   background: '#E9F9E7',
  // },
  // {
  //   id: '3',
  //   title: {en: 'Privacy Policy', ar: 'سياسة الخصوصية'},
  //   sub_title: {
  //     en: 'Notification alert for order confirmation',
  //     ar: 'تنبيه الإشعار لتأكيد الطلب',
  //   },
  //   image: images.EDIT,
  //   right: images.RIGHT,
  //   background: '#FDE3AC',
  // },
];

export const bookingDetailsData = [
  {
    id: '1',
    title_rent: {en: 'Rent', ar: 'الإيجار'},
    rent: {en: 'AED500', ar: '500 درهم إماراتي'},
    title_delivery: {en: 'Delivery', ar: 'التوصيل'},
    delivery: {en: 'AED 500', ar: '500 درهم إماراتي'},
    title_collection: {en: 'Collection', ar: 'التحصيل'},
    collection: {en: 'AED 500', ar: '500 درهم إماراتي'},
    title_sub_total: {en: 'Sub Total', ar: 'المجموع الفرعي'},
    sub_total: {en: 'AED 500', ar: '500 درهم إماراتي'},
    title_vat: {
      en: 'VAT+5% (17.70 )%',
      ar: 'ضريبة القيمة المضافة +5% (17.70)%',
    },
    vat: {en: 'AED 500.00', ar: '500.00 درهم إماراتي'},
    title_grand_total: {en: 'Grand total', ar: 'المجموع الكلي'},
    grand_total: {en: 'AED 5000', ar: '5000 درهم إماراتي'},
    title_outstanding: {en: 'Outstanding', ar: 'المستحق'},
    outstanding: {en: 'AED 1500.00', ar: '1500.00 درهم إماراتي'},
  },
];

export const verificationData = [
  {
    id: '1',
    title: {en: 'Driving License', ar: 'رخصة القيادة'},
    sub_title: {en: 'Front image', ar: 'صورة الجهة الأمامية'},
    image: images.LICENSE,
  },
  {
    id: '2',
    title: {en: 'Resident Id', ar: 'هوية المقيم'},
    sub_title: {en: 'Front image', ar: 'صورة الجهة الأمامية'},
    image: images.LICENSE,
  },
  {
    id: '3',
    title: {en: 'Passport Front Side', ar: 'جواز السفر من الجهة الأمامية'},
    sub_title: {en: 'Required', ar: 'مطلوب'},
    image: images.LICENSE,
  },
  {
    id: '4',
    title: {en: 'Passport Front Side', ar: 'جواز السفر من الجهة الأمامية'},
    sub_title: {en: 'Required', ar: 'مطلوب'},
    image: images.LICENSE,
  },
  {
    id: '5',
    title: {en: 'Digital Signature', ar: 'التوقيع الرقمي'},
    sub_title: {en: 'Required', ar: 'مطلوب'},
    signature: {en: 'signature', ar: 'التوقيع'},
  },
];

export const yourDocumentsData = [
  {
    id: '1',
    backgroundColor: colors.GREY_SECONDAY,
  },
  {
    id: '2',
    backgroundColor: colors.GREY_SECONDAY,
  },
  {
    id: '3',
    backgroundColor: colors.GREY_SECONDAY,
  },
];

export const calculationData = [
  {
    id: '1',
    title: {
      en: 'Daily subscription (1-6 days)',
      ar: 'الاشتراك اليومي (1-6 أيام)',
    },
    value: {en: 'AED 500', ar: '500 درهم إماراتي'},
  },
  {
    id: '2',
    title: {en: 'Additional Driver Fee', ar: 'رسوم السائق الإضافي'},
    value: {en: 'AED 500.00', ar: '500.00 درهم إماراتي'},
  },
  {
    id: '3',
    title: {en: 'Insurance', ar: 'التأمين'},
    value: {en: '+AED 500.00', ar: '+500.00 درهم إماراتي'},
  },
  {
    id: '4',
    title: {en: 'Coupon Discount', ar: 'خصم الكوبون'},
    value: {en: '-AED 30.00', ar: '-30.00 درهم إماراتي'},
  },
  {
    id: '5',
    title: {en: 'Total payable', ar: 'المجموع القابل للدفع'},
    value: {en: 'AED 1500.00', ar: '1500.00 درهم إماراتي'},
  },
];

export const searchData = [
  {
    id: '1',
    title: {en: 'i20', ar: 'آي ٢٠'},
  },
  {
    id: '2',
    title: {en: 'innova', ar: 'إنوفا'},
  },
  {
    id: '3',
    title: {en: 'baleno', ar: 'بالينو'},
  },
  {
    id: '4',
    title: {en: 'Mercedez Benz', ar: 'مرسيدس بنز'},
  },
];

export const addOns = [
  {name: 'Additional driver', price: '25.0', image: images.NEW_USER},
  {name: 'Rent', price: '99', image: images.RENT},
  {name: 'Delivery', price: '49', image: images.DELIVERY},
  {name: 'Collection', price: '39', image: images.COLLECTION},
  {name: 'Sub Total', price: '187'},
  {name: 'VAT (5.0%)', price: '100'},
  {name: 'Grand Total', price: '196'},
  {name: 'Outstanding', price: '208', color: colors.GREEN},
];
export const termsData = [
  {
    id: '1',
    title: {
      en: 'Terms and Conditions',
      ar: 'الشروط والأحكام',
    },
    content: {
      en: `These terms and conditions ("Terms") govern your use of [Your App Name] ("the App"), provided by [Your Company Name] ("the Company"). By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not use the App.
    
    1. Use of the App
    
    1.1. The App is provided for personal, non-commercial use only. You may not use the App for any illegal or unauthorized purpose.
    
    1.2. You agree not to modify, adapt, translate, or reverse engineer any part of the App, or use any data mining, robots, or similar data gathering and extraction tools.
    
    2. User Accounts
    
    2.1. In order to access certain features of the App, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.
    
    2.2. You agree to provide accurate and complete information when creating your account, and to update your information promptly if it changes.
    
    3. Content
    
    3.1. The App may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are solely responsible for the Content that you upload, post, or share on the App.
    
    3.2. By posting Content on the App, you grant the Company a non-exclusive, royalty-free, worldwide, perpetual, irrevocable, sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Content in any form, media, or technology.
    
    4. Intellectual Property
    
    4.1. All intellectual property rights in the App and its content, including but not limited to copyright, trademarks, and patents, are owned by the Company or its licensors.
    
    4.2. You may not use the Company's trademarks, logos, or other proprietary graphics without the Company's prior written consent.
    
    5. Disclaimer of Warranties
    
    5.1. The App is provided "as is" and "as available" without any warranties of any kind, whether express or implied. The Company makes no warranties or representations about the accuracy or completeness of the App's content or the content of any third-party websites linked to the App.
    
    6. Limitation of Liability
    
    6.1. In no event shall the Company be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of the App.
    
    7. Governing Law
    
    7.1. These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
    
    8. Changes to Terms
    
    8.1. The Company reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
    
    By continuing to access or use the App after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the App.
    
    9. Contact Us
    
    9.1. If you have any questions about these Terms, please contact us at [Your Contact Information].`,
      ar: `هذه الشروط والأحكام ("الشروط") تحكم استخدامك لـ [اسم التطبيق الخاص بك] ("التطبيق")، الذي يتم توفيره من قبل [اسم الشركة الخاص بك] ("الشركة"). من خلال الوصول إلى التطبيق أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي جزء من الشروط، فلا يمكنك استخدام التطبيق.

    1. استخدام التطبيق

    1.1. يتم توفير التطبيق للاستخدام الشخصي فقط، وليس لأغراض تجارية غير قانونية. قد لا تستخدم التطبيق لأي هدف غير قانوني أو غير مصرح به.

    1.2. أنت توافق على عدم تعديل أو تكييف أو ترجمة أو عكس هندسة أي جزء من التطبيق، أو استخدام أي أدوات لجمع البيانات أو الروبوتات أو أدوات استخراج البيانات المماثلة.

    2. حسابات المستخدمين

    2.1. من أجل الوصول إلى بعض ميزات التطبيق، قد يُطلب منك إنشاء حساب مستخدم. أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور الخاصة بك وعن تقييد الوصول إلى حسابك.

    2.2. أنت توافق على تقديم معلومات دقيقة وكاملة عند إنشاء حسابك، وتحديث معلوماتك بسرعة إذا تغيرت.

    3. المحتوى

    3.1. قد يسمح لك التطبيق بنشر وربط وتخزين ومشاركة وتوفير معلومات معينة، نصوصًا، رسومات، فيديوهات، أو مواد أخرى ("المحتوى"). أنت المسؤول الوحيد عن المحتوى الذي تقوم بتحميله أو نشره أو مشاركته على التطبيق.

    3.2. من خلال نشر المحتوى على التطبيق، تمنح الشركة ترخيصًا غير حصري وخاليًا من الروابط، عالميًا، دائمًا، لا رجعة فيه، قابلًا للترخيص للاستخدام، استنساخ، تعديل، تكييف، نشر، ترجمة، إنشاء أعمال مشتقة من، توزيع، وعرض مثل هذا المحتوى في أي شكل، وسائل الإعلام، أو التكنولوجيا.

    4. الملكية الفكرية

    4.1. كل الحقوق الملكية الفكرية في التطبيق ومحتواه، بما في ذلك على سبيل الحصر للحقوق المؤلفة، العلامات التجارية، والبراءات، مملوكة للشركة أو للمرخصين الخاصين بها.

    4.2. قد لا تستخدم علامات الشركة التجارية أو شعاراتها أو الرسومات الخاصة بها الأخرى دون موافقة مسبقة كتابية من الشركة.

    5. إخلاء المسؤولية من الضمانات

    5.1. يتم توفير التطبيق "كما هو" و "حسب التوفر" دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية. لا تقدم الشركة أي ضمانات أو تمثيلات حول دقة أو اكتمال محتوى التطبيق أو محتوى أي مواقع ويب تابعة طرف ثالث مرتبطة بالتطبيق.

    6. الحد من المسؤولية

    6.1. بأي حال من الأحوال، لا يكون للشركة أي مسؤولية عن أية خسائر غير مباشرة أو عرضية أو خاصة أو ناتجة عن عقوبات، بما في ذلك على سبيل الحصر فقدان الأرباح أو البيانات أو الاستخدام أو السمعة الحسنة أو أي خسائر لا مادية أخرى، ناتجة عن أو في ارتباط باستخدامك للتطبيق.

    7. القانون السائد

    7.1. يجب أن تخضع هذه الشروط للقانون المعمول به وتفسر وفقًا له في [الاختصاص الخاص بك]، دون النظر إلى أحكام القوانين المتعارضة.

    8. التغييرات على الشروط

    8.1. تحتفظ الشركة بالحق في تعديل أو استبدال هذه الشروط في أي وقت. إذا كانت المراجعة مهمة، سنقدم إشعارًا قبل 30 يومًا على الأقل قبل أي شروط جديدة تأخذ مفعولها. سيتم تحديد ما يشكل تغييرًا مهمًا وفقًا لتقديرنا الخاص.

    من خلال مواصلة الوصول إلى التطبيق أو استخدامه بعد أن تصبح أي مراجعات فعالة، فإنك توافق على الالتزام بالشروط المنقحة. إذا لم توافق على الشروط الجديدة، فأنت لم تعد مخولًا بالاستخدام التطبيق.

    9. اتصل بنا

    9.1. إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على [معلومات الاتصال الخاصة بك].`,
    },
  },
];

export const swiperData = [
  {
    id: '1',
    title: 'Find The Ideal \ncar for you',
    sub_title: 'Premium and prestige car monthly rental',
    image: images.TOYOTA,
  },
  {
    id: '2',
    title: 'Find The Ideal  \ncar for you',
    sub_title: 'Premium and prestige car monthly rental',
    image: images.CX5,
  },
];
export const currencydata = [
  {
    id: '1',
    title: 'AED',
  },
  {
    id: '2',
    title: 'USD',
  },
  {
    id: '3',
    title: 'GBP',
  },
  {
    id: '4',
    title: 'EUR',
  },
  {
    id: '5',
    title: 'SAR',
  },
  {
    id: '6',
    title: 'KWD',
  },
  {
    id: '7',
    title: 'RUB',
  },
];

export const carDetailsImage = [
  {
    id: '1',
    icon: images.VEHICLES,
  },
  {
    id: '2',
    icon: images.CAR_ENGINE,
  },
  {
    id: '3',
    icon: images.MANUAL_TRANSMISSION,
  },
  {
    id: '4',
    icon: images.CAR,
  },
];

export const notifications = [
  {
    id: '1',
    icon: images.BELL,
    title: 'Lorem Ipsum is simply dummy text of the printing ',
    sub_title: '2 hours ago',
    close: images.CLOSEE,
  },
  {
    id: '2',
    icon: images.BELL,
    title: 'Lorem Ipsum is simply dummy text of the printing ',
    sub_title: '2 hours ago',
    close: images.CLOSEE,
  },
  {
    id: '3',
    icon: images.BELL,
    title: 'Lorem Ipsum is simply dummy text of the printing ',
    sub_title: '2 hours ago',
    close: images.CLOSEE,
  },
  {
    id: '4',
    icon: images.BELL,
    title: 'Lorem Ipsum is simply dummy text of the printing ',
    sub_title: '2 hours ago',
    close: images.CLOSEE,
  },
];
