(() => {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle?.querySelector('i');
  const themeKey = 'learn-coding-theme';
  const languageKey = 'learn-coding-language';
  const track = body.dataset.track || 'web';

  const tracks = {
    game: {
      title: ['Game Development', 'تطوير الألعاب'], subtitle: ['Master Unity & C# from scratch to professional level', 'أتقن Unity وC# من الصفر حتى بناء ألعاب احترافية'],
      steps: [['Install Unity Hub', 'تثبيت Unity Hub'], ['Install VS Code', 'تثبيت VS Code'], ['C# Basics', 'أساسيات C#']],
      cards: [['1. Set up Unity', '١. إعداد Unity', 'Install Unity Hub, choose an LTS editor, and understand scenes, GameObjects, and components.', 'ثبّت Unity Hub واختر إصدار LTS وتعرّف على المشاهد وGameObjects والمكوّنات.', 'Open Unity pathway', 'فتح مسار Unity'], ['2. Learn C# for games', '٢. تعلّم C# للألعاب', 'Practice variables, methods, classes, and the component scripts that drive gameplay.', 'تدرّب على المتغيرات والدوال والكلاسات والسكربتات التي تحرّك أسلوب اللعب.', 'Start the C# tour', 'ابدأ جولة C#'], ['3. Build game systems', '٣. بناء أنظمة اللعبة', 'Create input, movement, UI, prefabs, scenes, and simple game loops with reusable code.', 'أنشئ التحكم والحركة والواجهة والـ Prefabs والمشاهد وحلقات لعب قابلة لإعادة الاستخدام.', 'Build a gameplay loop', 'ابنِ حلقة لعب'], ['4. Test and publish', '٤. الاختبار والنشر', 'Profile performance, test multiple resolutions, package a build, and share a playable prototype.', 'اختبر الأداء ومقاسات الشاشة وجهّز نسخة قابلة للتشغيل وشارك النموذج الأولي.', 'Read build guidance', 'اقرأ إرشادات البناء']]
    },
    web: {
      title: ['Web Development', 'تطوير الويب'], subtitle: ['Build accessible, responsive websites from the first line of HTML to a polished deployment.', 'أنشئ مواقع سريعة ومتجاوبة من أول سطر HTML حتى النشر الاحترافي'],
      steps: [['HTML structure', 'هيكل HTML'], ['CSS layout', 'تنسيق CSS'], ['JavaScript logic', 'منطق JavaScript'], ['Ship a project', 'نشر مشروع']],
      cards: [['1. HTML Foundations', '١. أساسيات HTML', 'Learn semantic structure, forms, links, images, and accessible page landmarks.', 'تعلّم الهيكل الدلالي والنماذج والروابط والصور وبنية الصفحات سهلة الوصول.', 'Open MDN HTML guide', 'فتح دليل HTML'], ['2. CSS & Responsive Design', '٢. CSS والتصميم المتجاوب', 'Practice Flexbox, Grid, responsive breakpoints, typography, and visual hierarchy.', 'تدرّب على Flexbox وGrid ونقاط التوقف والخطوط والتسلسل البصري.', 'Open web.dev CSS course', 'فتح دورة CSS'], ['3. JavaScript Essentials', '٣. أساسيات JavaScript', 'Use events, DOM updates, arrays, modules, and browser APIs to create real interactions.', 'استخدم الأحداث وتحديث DOM والمصفوفات والوحدات وواجهات المتصفح لبناء تفاعلات حقيقية.', 'Open MDN JavaScript guide', 'فتح دليل JavaScript'], ['4. Build & Publish', '٤. البناء والنشر', 'Finish with a responsive portfolio project, test it on mobile, and publish it with GitHub Pages.', 'أنهِ مشروع معرض أعمال متجاوبًا واختبره على الهاتف وانشره عبر GitHub Pages.', 'Learn GitHub Pages', 'تعلّم GitHub Pages']]
    },
    android: {
      title: ['Android Development', 'تطوير تطبيقات Android'], subtitle: ['Learn Kotlin and create modern Android apps with a clear, testable workflow.', 'تعلّم Kotlin وأنشئ تطبيقات Android حديثة بخطوات واضحة وقابلة للاختبار'],
      steps: [['Android Studio', 'Android Studio'], ['Kotlin basics', 'أساسيات Kotlin'], ['Jetpack Compose', 'Jetpack Compose'], ['Test & release', 'الاختبار والإصدار']],
      cards: [['1. Set up your workspace', '١. إعداد بيئة العمل', 'Install Android Studio, create an emulator, and learn the structure of an Android project.', 'ثبّت Android Studio وأنشئ محاكيًا وتعرّف على بنية مشروع Android.', 'Install Android Studio', 'تثبيت Android Studio'], ['2. Kotlin fundamentals', '٢. أساسيات Kotlin', 'Practice variables, functions, collections, null safety, and object-oriented design.', 'تدرّب على المتغيرات والدوال والمجموعات وNull Safety والبرمجة الكائنية.', 'Take the Kotlin tour', 'ابدأ جولة Kotlin'], ['3. Build your first UI', '٣. بناء أول واجهة', 'Create responsive screens with Compose, state, navigation, and reusable components.', 'أنشئ شاشات متجاوبة باستخدام Compose والحالة والتنقل والمكوّنات القابلة لإعادة الاستخدام.', 'Start Android Basics', 'ابدأ أساسيات Android'], ['4. Test and publish', '٤. الاختبار والنشر', 'Add basic tests, check different screen sizes, and prepare a signed release build.', 'أضف الاختبارات وافحص مقاسات الشاشات وجهّز إصدارًا موقّعًا للنشر.', 'Read publishing guidance', 'اقرأ إرشادات النشر']]
    },
    ios: {
      title: ['iOS Development', 'تطوير تطبيقات iOS'], subtitle: ['Learn Swift and build apps for iPhone and iPad', 'تعلّم Swift وأنشئ تطبيقات لأجهزة iPhone وiPad'],
      steps: [['Install Xcode', 'تثبيت Xcode'], ['Learn Swift', 'تعلّم Swift'], ['Build with SwiftUI', 'البناء باستخدام SwiftUI']],
      cards: [['1. Set up Xcode', '١. إعداد Xcode', 'Install Xcode, create a project, and learn the tools used to preview, debug, and test Apple apps.', 'ثبّت Xcode وأنشئ مشروعًا وتعلّم أدوات المعاينة والتصحيح والاختبار.', 'Explore Xcode', 'استكشف Xcode'], ['2. Learn Swift', '٢. تعلّم Swift', 'Build a strong foundation with Swift types, functions, optionals, collections, and protocols.', 'أسّس معرفتك بأنواع Swift والدوال والقيم الاختيارية والمجموعات والبروتوكولات.', 'Read The Swift Book', 'اقرأ كتاب Swift'], ['3. Build with SwiftUI', '٣. البناء باستخدام SwiftUI', 'Create accessible screens with state, navigation, lists, forms, and reusable SwiftUI views.', 'أنشئ شاشات سهلة الوصول باستخدام الحالة والتنقل والقوائم والنماذج والمكوّنات القابلة لإعادة الاستخدام.', 'Start SwiftUI tutorials', 'ابدأ دروس SwiftUI'], ['4. Test and publish', '٤. الاختبار والنشر', 'Test on simulators and devices, handle different screen sizes, and prepare an App Store release.', 'اختبر على المحاكي والأجهزة وتعامل مع مقاسات الشاشة وجهّز إصدار App Store.', 'Read publishing guidance', 'اقرأ إرشادات النشر']]
    }
  };

  const setTheme = (theme) => {
    const isLight = theme === 'light';
    body.classList.toggle('light-mode', isLight);
    icon?.classList.toggle('fa-sun', isLight);
    icon?.classList.toggle('fa-moon', !isLight);
    toggle?.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    toggle?.setAttribute('aria-pressed', String(isLight));
  };
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem(themeKey) || 'dark'; } catch (_) {}
  setTheme(savedTheme);
  toggle?.addEventListener('click', () => {
    const next = body.classList.contains('light-mode') ? 'dark' : 'light';
    setTheme(next);
    try { localStorage.setItem(themeKey, next); } catch (_) {}
  });

  const dictionary = tracks[track] || tracks.web;
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  let language = queryLanguage === 'ar' || queryLanguage === 'en' ? queryLanguage : null;
  try { language ||= localStorage.getItem(languageKey) || 'en'; } catch (_) { language ||= 'en'; }
  const arabic = language === 'ar';
  document.documentElement.lang = arabic ? 'ar' : 'en';
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  body.lang = arabic ? 'ar' : 'en';
  body.dir = arabic ? 'rtl' : 'ltr';
  body.classList.toggle('arabic-page', arabic);
  try { localStorage.setItem(languageKey, language); } catch (_) {}

  const logo = document.querySelector('.logo');
  if (logo) logo.innerHTML = arabic ? 'تعلّم <span>البرمجة</span>' : 'Learn <span>Coding</span>';
  const home = document.querySelector('.nav-btn');
  if (home) home.innerHTML = `<i class="fas fa-home" aria-hidden="true"></i> ${arabic ? 'الرئيسية' : 'Home'}`;
  const back = document.querySelector('.back-link');
  if (back) back.innerHTML = `<i class="fas fa-arrow-${arabic ? 'right' : 'left'}" aria-hidden="true"></i>&nbsp; ${arabic ? 'العودة إلى المسارات' : 'Back to all tracks'}`;
  const title = document.querySelector('.title');
  const subtitle = document.querySelector('.subtitle');
  if (title) title.textContent = dictionary.title[arabic ? 1 : 0];
  if (subtitle) subtitle.textContent = dictionary.subtitle[arabic ? 1 : 0];
  const intros = {
    web: ['Follow the roadmap in order, practice each concept in a small project, and use the official references whenever you need a deeper explanation.', 'اتبع الخطة بالترتيب وطبّق كل مفهوم في مشروع صغير واستعن بالمراجع الرسمية عند الحاجة إلى شرح أعمق.'],
    android: ['Start with Android Studio, build screens with Compose, connect data, and finish by testing your app on an emulator or device.', 'ابدأ بـ Android Studio وابنِ الشاشات باستخدام Compose ثم اربط البيانات واختبر التطبيق على محاكي أو جهاز حقيقي.']
  };
  const intro = document.querySelector('.track-intro');
  if (intro && intros[track]) intro.textContent = intros[track][arabic ? 1 : 0];
  document.querySelectorAll('.step-item').forEach((element, index) => {
    const iconClass = element.querySelector('i')?.className || 'fas fa-circle';
    const item = dictionary.steps[index];
    if (item) element.innerHTML = `<i class="${iconClass}" aria-hidden="true"></i> ${item[arabic ? 1 : 0]}`;
  });
  document.querySelectorAll('.resource-card').forEach((card, index) => {
    const data = dictionary.cards[index];
    if (!data) return;
    const heading = card.querySelector('h2');
    const paragraph = card.querySelector('p');
    const link = card.querySelector('.resource-link');
    if (heading) heading.textContent = data[arabic ? 1 : 0];
    if (paragraph) paragraph.textContent = data[arabic ? 3 : 2];
    if (link) link.innerHTML = `${data[arabic ? 5 : 4]} <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>`;
  });

  const nav = document.querySelector('.nav-links');
  if (nav && !nav.querySelector('.track-language')) {
    const languageLink = document.createElement('a');
    languageLink.className = 'nav-btn track-language';
    languageLink.href = `${window.location.pathname}?lang=${arabic ? 'en' : 'ar'}`;
    languageLink.innerHTML = `<i class="fas fa-language" aria-hidden="true"></i> ${arabic ? 'English' : 'العربية'}`;
    languageLink.setAttribute('aria-label', arabic ? 'Switch to English' : 'التبديل إلى العربية');
    nav.insertBefore(languageLink, toggle || null);
  }

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
