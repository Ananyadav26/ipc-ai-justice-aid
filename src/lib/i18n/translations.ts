
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  // English
  en: {
    // Common
    "app.name": "IPC Justice Aid",
    "app.version": "v1.0.0",
    "app.disclaimer": "Disclaimer: This analysis is for informational purposes only and does not constitute legal advice. Consult a legal professional for personalized guidance.",
    
    // Navigation
    "nav.home": "Home",
    "nav.search": "Search",
    "nav.history": "History",
    "nav.about": "About",
    "nav.back": "Back",
    
    // User actions
    "action.notifications": "Notifications",
    "action.resources": "Legal Resources",
    "action.profile": "Profile",
    "action.settings": "Settings",
    "action.logout": "Log out",
    
    // Search results
    "results.title": "Search Results",
    "results.showing": "Showing results for:",
    "results.sections": "Applicable IPC Sections",
    "results.relevance": "Relevance:",
    "results.punishment": "Punishment:",
    "results.empty": "No results found",
    "results.try_different": "Try a different search term",
    
    // Summary
    "summary.results": "Results",
    "summary.high_relevance": "High Relevance",
    "summary.medium_relevance": "Medium Relevance",
    "summary.low_relevance": "Low Relevance",
    
    // Prediction
    "prediction.title": "Case Prediction Analysis",
    "prediction.disclaimer": "Based on similar historical cases",
    "prediction.chance": "Conviction chance",
    "prediction.advice": "Legal Advice",
  },

  // Hindi
  hi: {
    // Common
    "app.name": "आईपीसी न्याय सहायता",
    "app.version": "संस्करण 1.0.0",
    "app.disclaimer": "अस्वीकरण: यह विश्लेषण केवल जानकारी के उद्देश्यों के लिए है और कानूनी सलाह नहीं है। व्यक्तिगत मार्गदर्शन के लिए किसी कानूनी पेशेवर से परामर्श करें।",
    
    // Navigation
    "nav.home": "होम",
    "nav.search": "खोज",
    "nav.history": "इतिहास",
    "nav.about": "परिचय",
    "nav.back": "वापस",
    
    // User actions
    "action.notifications": "सूचनाएं",
    "action.resources": "कानूनी संसाधन",
    "action.profile": "प्रोफाइल",
    "action.settings": "सेटिंग्स",
    "action.logout": "लॉग आउट",
    
    // Search results
    "results.title": "खोज परिणाम",
    "results.showing": "के लिए परिणाम दिखा रहे हैं:",
    "results.sections": "लागू आईपीसी धाराएं",
    "results.relevance": "प्रासंगिकता:",
    "results.punishment": "सजा:",
    "results.empty": "कोई परिणाम नहीं मिला",
    "results.try_different": "अलग खोज शब्द का प्रयास करें",
    
    // Summary
    "summary.results": "परिणाम",
    "summary.high_relevance": "उच्च प्रासंगिकता",
    "summary.medium_relevance": "मध्यम प्रासंगिकता",
    "summary.low_relevance": "कम प्रासंगिकता",
    
    // Prediction
    "prediction.title": "केस पूर्वानुमान विश्लेषण",
    "prediction.disclaimer": "समान ऐतिहासिक मामलों के आधार पर",
    "prediction.chance": "सजा की संभावना",
    "prediction.advice": "कानूनी सलाह",
  },

  // Marathi
  mr: {
    // Common
    "app.name": "आयपीसी न्याय सहाय्य",
    "app.version": "आवृत्ती 1.0.0",
    "app.disclaimer": "अस्वीकरण: हे विश्लेषण केवळ माहितीसाठी आहे आणि कायदेशीर सल्ला नाही. वैयक्तिक मार्गदर्शनासाठी कायदेशीर व्यावसायिकांचा सल्ला घ्या.",
    
    // Navigation
    "nav.home": "मुख्यपृष्ठ",
    "nav.search": "शोध",
    "nav.history": "इतिहास",
    "nav.about": "आमच्याबद्दल",
    "nav.back": "मागे",
    
    // User actions
    "action.notifications": "सूचना",
    "action.resources": "कायदेशीर संसाधने",
    "action.profile": "प्रोफाइल",
    "action.settings": "सेटिंग्ज",
    "action.logout": "बाहेर पडा",
    
    // Search results
    "results.title": "शोध परिणाम",
    "results.showing": "यासाठी परिणाम दाखवत आहे:",
    "results.sections": "लागू आयपीसी कलमे",
    "results.relevance": "प्रासंगिकता:",
    "results.punishment": "शिक्षा:",
    "results.empty": "कोणतेही परिणाम सापडले नाहीत",
    "results.try_different": "वेगळा शोध शब्द वापरून पहा",
    
    // Summary
    "summary.results": "परिणाम",
    "summary.high_relevance": "उच्च प्रासंगिकता",
    "summary.medium_relevance": "मध्यम प्रासंगिकता",
    "summary.low_relevance": "कमी प्रासंगिकता",
    
    // Prediction
    "prediction.title": "केस अंदाज विश्लेषण",
    "prediction.disclaimer": "समान ऐतिहासिक केसेसवर आधारित",
    "prediction.chance": "दोषी ठरण्याची शक्यता",
    "prediction.advice": "कायदेशीर सल्ला",
  },

  // Telugu
  te: {
    // Common
    "app.name": "ఐపిసి న్యాయ సహాయం",
    "app.version": "వెర్షన్ 1.0.0",
    "app.disclaimer": "డిస్క్లేమర్: ఈ విశ్లేషణ కేవలం సమాచార ప్రయోజనాల కోసం మాత్రమే మరియు చట్టపరమైన సలహా కాదు. వ్యక్తిగత మార్గదర్శకత్వం కోసం చట్టపరమైన నిపుణులను సంప్రదించండి.",
    
    // Navigation
    "nav.home": "హోమ్",
    "nav.search": "శోధన",
    "nav.history": "చరిత్ర",
    "nav.about": "గురించి",
    "nav.back": "వెనుకకు",
    
    // User actions
    "action.notifications": "నోటిఫికేషన్స్",
    "action.resources": "చట్టపరమైన వనరులు",
    "action.profile": "ప్రొఫైల్",
    "action.settings": "సెట్టింగ్స్",
    "action.logout": "లాగ్ అవుట్",
    
    // Search results
    "results.title": "శోధన ఫలితాలు",
    "results.showing": "కోసం ఫలితాలు చూపిస్తోంది:",
    "results.sections": "వర్తించే ఐపిసి సెక్షన్లు",
    "results.relevance": "సంబంధిత:",
    "results.punishment": "శిక్ష:",
    "results.empty": "ఫలితాలు కనుగొనబడలేదు",
    "results.try_different": "వేరే శోధన పదాన్ని ప్రయత్నించండి",
    
    // Summary
    "summary.results": "ఫలితాలు",
    "summary.high_relevance": "అధిక సంబంధం",
    "summary.medium_relevance": "మధ్యస్థ సంబంధం",
    "summary.low_relevance": "తక్కువ సంబంధం",
    
    // Prediction
    "prediction.title": "కేసు ఊహించడం విశ్లేషణ",
    "prediction.disclaimer": "సారూప్య చరిత్ర కేసుల ఆధారంగా",
    "prediction.chance": "దోషి నిర్ధారణ అవకాశం",
    "prediction.advice": "చట్టపరమైన సలహా",
  },

  // Gujarati
  gu: {
    // Common
    "app.name": "આઈપીસી ન્યાય સહાય",
    "app.version": "સંસ્કરણ 1.0.0",
    "app.disclaimer": "અસ્વીકરણ: આ વિશ્લેષણ માત્ર માહિતીના હેતુઓ માટે છે અને કાનૂની સલાહ નથી. વ્યક્તિગત માર્ગદર્શન માટે કાનૂની વ્યાવસાયિકનો સંપર્ક કરો.",
    
    // Navigation
    "nav.home": "હોમ",
    "nav.search": "શોધ",
    "nav.history": "ઇતિહાસ",
    "nav.about": "વિશે",
    "nav.back": "પાછા",
    
    // User actions
    "action.notifications": "સૂચનાઓ",
    "action.resources": "કાનૂની સંસાધનો",
    "action.profile": "પ્રોફાઇલ",
    "action.settings": "સેટિંગ્સ",
    "action.logout": "લૉગ આઉટ",
    
    // Search results
    "results.title": "શોધ પરિણામો",
    "results.showing": "માટે પરિણામો બતાવી રહ્યાં છે:",
    "results.sections": "લાગુ આઈપીસી કલમો",
    "results.relevance": "પ્રસ્તુતતા:",
    "results.punishment": "સજા:",
    "results.empty": "કોઈ પરિણામ મળ્યાં નથી",
    "results.try_different": "અલગ શોધ શબ્દ પ્રયાસ કરો",
    
    // Summary
    "summary.results": "પરિણામો",
    "summary.high_relevance": "ઉચ્ચ પ્રસ્તુતતા",
    "summary.medium_relevance": "મધ્યમ પ્રસ્તુતતા",
    "summary.low_relevance": "નીચી પ્રસ્તુતતા",
    
    // Prediction
    "prediction.title": "કેસ પૂર્વાનુમાન વિશ્લેષણ",
    "prediction.disclaimer": "સમાન ઐતિહાસિક કેસો પર આધારિત",
    "prediction.chance": "દોષિત થવાની શક્યતા",
    "prediction.advice": "કાનૂની સલાહ",
  },

  // Bengali
  bn: {
    // Common
    "app.name": "আইপিসি ন্যায় সহায়তা",
    "app.version": "সংস্করণ 1.0.0",
    "app.disclaimer": "দাবিত্যাগ: এই বিশ্লেষণটি শুধুমাত্র তথ্যগত উদ্দেশ্যে এবং আইনি পরামর্শ নয়। ব্যক্তিগত নির্দেশনার জন্য একজন আইনি পেশাদারের সাথে পরামর্শ করুন।",
    
    // Navigation
    "nav.home": "হোম",
    "nav.search": "অনুসন্ধান",
    "nav.history": "ইতিহাস",
    "nav.about": "সম্পর্কে",
    "nav.back": "পিছনে",
    
    // User actions
    "action.notifications": "বিজ্ঞপ্তি",
    "action.resources": "আইনি সম্পদ",
    "action.profile": "প্রোফাইল",
    "action.settings": "সেটিংস",
    "action.logout": "লগ আউট",
    
    // Search results
    "results.title": "অনুসন্ধান ফলাফল",
    "results.showing": "এর জন্য ফলাফল দেখাচ্ছে:",
    "results.sections": "প্রযোজ্য আইপিসি ধারা",
    "results.relevance": "প্রাসঙ্গিকতা:",
    "results.punishment": "শাস্তি:",
    "results.empty": "কোন ফলাফল পাওয়া যায়নি",
    "results.try_different": "একটি ভিন্ন অনুসন্ধান শব্দ চেষ্টা করুন",
    
    // Summary
    "summary.results": "ফলাফল",
    "summary.high_relevance": "উচ্চ প্রাসঙ্গিকতা",
    "summary.medium_relevance": "মাঝারি প্রাসঙ্গিকতা",
    "summary.low_relevance": "কম প্রাসঙ্গিকতা",
    
    // Prediction
    "prediction.title": "মামলা পূর্বাভাস বিশ্লেষণ",
    "prediction.disclaimer": "অনুরূপ ঐতিহাসিক মামলার উপর ভিত্তি করে",
    "prediction.chance": "দোষী সাব্যস্ত হওয়ার সম্ভাবনা",
    "prediction.advice": "আইনি পরামর্শ",
  },

  // Tamil
  ta: {
    // Common
    "app.name": "ஐபிசி நீதி உதவி",
    "app.version": "பதிப்பு 1.0.0",
    "app.disclaimer": "மறுப்பு: இந்த பகுப்பாய்வு தகவல் நோக்கங்களுக்காக மட்டுமே மற்றும் சட்ட ஆலோசனை அல்ல. தனிப்பட்ட வழிகாட்டுதலுக்கு ஒரு சட்ட நிபுணரை அணுகவும்.",
    
    // Navigation
    "nav.home": "முகப்பு",
    "nav.search": "தேடல்",
    "nav.history": "வரலாறு",
    "nav.about": "பற்றி",
    "nav.back": "பின்",
    
    // User actions
    "action.notifications": "அறிவிப்புகள்",
    "action.resources": "சட்ட வளங்கள்",
    "action.profile": "சுயவிவரம்",
    "action.settings": "அமைப்புகள்",
    "action.logout": "வெளியேறு",
    
    // Search results
    "results.title": "தேடல் முடிவுகள்",
    "results.showing": "முடிவுகள் காட்டப்படுகின்றன:",
    "results.sections": "பொருந்தக்கூடிய ஐபிசி பிரிவுகள்",
    "results.relevance": "தொடர்புடைய:",
    "results.punishment": "தண்டனை:",
    "results.empty": "முடிவுகள் எதுவும் இல்லை",
    "results.try_different": "வேறு தேடல் சொல்லை முயற்சிக்கவும்",
    
    // Summary
    "summary.results": "முடிவுகள்",
    "summary.high_relevance": "உயர் தொடர்பு",
    "summary.medium_relevance": "நடுத்தர தொடர்பு",
    "summary.low_relevance": "குறைந்த தொடர்பு",
    
    // Prediction
    "prediction.title": "வழக்கு முன்னறிவிப்பு பகுப்பாய்வு",
    "prediction.disclaimer": "ஒத்த வரலாற்று வழக்குகளின் அடிப்படையில்",
    "prediction.chance": "குற்றம் சாட்டப்படும் வாய்ப்பு",
    "prediction.advice": "சட்ட ஆலோசனை",
  },

  // Assamese
  as: {
    // Common
    "app.name": "আইপিচি ন্যায় সহায়",
    "app.version": "সংস্কৰণ 1.0.0",
    "app.disclaimer": "দায়ত্যাগ: এই বিশ্লেষণ কেৱল তথ্যৰ উদ্দেশ্যৰ বাবে আৰু আইনী পৰামৰ্শ নহয়। ব্যক্তিগত নিৰ্দেশনাৰ বাবে আইনী পেছাদাৰীৰ পৰামৰ্শ লওক।",
    
    // Navigation
    "nav.home": "হোম",
    "nav.search": "সন্ধান",
    "nav.history": "ইতিহাস",
    "nav.about": "বিষয়ে",
    "nav.back": "পিছলৈ",
    
    // User actions
    "action.notifications": "জাননী",
    "action.resources": "আইনী সম্পদ",
    "action.profile": "প্ৰোফাইল",
    "action.settings": "ছেটিংছ",
    "action.logout": "লগ আউট",
    
    // Search results
    "results.title": "সন্ধানৰ ফলাফল",
    "results.showing": "ফলাফল দেখুওৱা হৈছে:",
    "results.sections": "প্ৰযোজ্য আইপিচি বিভাগসমূহ",
    "results.relevance": "প্ৰাসংগিকতা:",
    "results.punishment": "শাস্তি:",
    "results.empty": "কোনো ফলাফল পোৱা নাই",
    "results.try_different": "এটা ভিন্ন সন্ধান শব্দ চেষ্টা কৰক",
    
    // Summary
    "summary.results": "ফলাফল",
    "summary.high_relevance": "উচ্চ প্ৰাসংগিকতা",
    "summary.medium_relevance": "মধ্যম প্ৰাসংগিকতা",
    "summary.low_relevance": "নিম্ন প্ৰাসংগিকতা",
    
    // Prediction
    "prediction.title": "গোচৰ পূৰ্বানুমান বিশ্লেষণ",
    "prediction.disclaimer": "সমান ঐতিহাসিক গোচৰৰ ওপৰত ভিত্তি কৰি",
    "prediction.chance": "দোষী সাব্যস্ত হোৱাৰ সম্ভাৱনা",
    "prediction.advice": "আইনী পৰামৰ্শ",
  },

  // Punjabi
  pa: {
    // Common
    "app.name": "ਆਈਪੀਸੀ ਨਿਆਂ ਸਹਾਇਤਾ",
    "app.version": "ਵਰਜਨ 1.0.0",
    "app.disclaimer": "ਅਸਵੀਕਾਰ: ਇਹ ਵਿਸ਼ਲੇਸ਼ਣ ਸਿਰਫ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਹੈ ਅਤੇ ਕਾਨੂੰਨੀ ਸਲਾਹ ਨਹੀਂ ਹੈ। ਨਿੱਜੀ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਕਾਨੂੰਨੀ ਪੇਸ਼ੇਵਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।",
    
    // Navigation
    "nav.home": "ਹੋਮ",
    "nav.search": "ਖੋਜ",
    "nav.history": "ਇਤਿਹਾਸ",
    "nav.about": "ਬਾਰੇ",
    "nav.back": "ਵਾਪਸ",
    
    // User actions
    "action.notifications": "ਸੂਚਨਾਵਾਂ",
    "action.resources": "ਕਾਨੂੰਨੀ ਸਰੋਤ",
    "action.profile": "ਪ੍ਰੋਫਾਈਲ",
    "action.settings": "ਸੈਟਿੰਗਾਂ",
    "action.logout": "ਲੌਗ ਆਉਟ",
    
    // Search results
    "results.title": "ਖੋਜ ਨਤੀਜੇ",
    "results.showing": "ਲਈ ਨਤੀਜੇ ਦਿਖਾ ਰਿਹਾ ਹੈ:",
    "results.sections": "ਲਾਗੂ ਆਈਪੀਸੀ ਧਾਰਾਵਾਂ",
    "results.relevance": "ਪ੍ਰਸੰਗਿਕਤਾ:",
    "results.punishment": "ਸਜ਼ਾ:",
    "results.empty": "ਕੋਈ ਨਤੀਜੇ ਨਹੀਂ ਮਿਲੇ",
    "results.try_different": "ਵੱਖਰੇ ਖੋਜ ਸ਼ਬਦ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
    
    // Summary
    "summary.results": "ਨਤੀਜੇ",
    "summary.high_relevance": "ਉੱਚ ਪ੍ਰਸੰਗਿਕਤਾ",
    "summary.medium_relevance": "ਮੱਧਮ ਪ੍ਰਸੰਗਿਕਤਾ",
    "summary.low_relevance": "ਘੱਟ ਪ੍ਰਸੰਗਿਕਤਾ",
    
    // Prediction
    "prediction.title": "ਕੇਸ ਭਵਿੱਖਬਾਣੀ ਵਿਸ਼ਲੇਸ਼ਣ",
    "prediction.disclaimer": "ਸਮਾਨ ਇਤਿਹਾਸਕ ਮਾਮਲਿਆਂ ਦੇ ਆਧਾਰ 'ਤੇ",
    "prediction.chance": "ਦੋਸ਼ੀ ਠਹਿਰਾਉਣ ਦੀ ਸੰਭਾਵਨਾ",
    "prediction.advice": "ਕਾਨੂੰਨੀ ਸਲਾਹ",
  }
};
