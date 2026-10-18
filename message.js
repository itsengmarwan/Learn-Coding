(() => {
  const params = new URLSearchParams(window.location.search);
  let language = params.get('lang');
  try { language ||= localStorage.getItem('learn-coding-language') || 'en'; } catch (_) { language ||= 'en'; }
  const arabic = language === 'ar';
  document.documentElement.lang = arabic ? 'ar' : 'en';
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  try { localStorage.setItem('learn-coding-language', language); } catch (_) {}
  const text = {
    title: ['Get in Touch', 'تواصل معنا'],
    intro: ["Have a question? We'd love to hear from you.", 'هل لديك سؤال؟ يسعدنا أن نسمع منك.'],
    name: ['Full Name', 'الاسم الكامل'], email: ['Email Address', 'البريد الإلكتروني'], message: ['Your Message', 'رسالتك'],
    submit: ['Send Message', 'إرسال الرسالة'], back: ['Back to home', 'العودة للرئيسية'], switch: ['العربية', 'English']
  };
  document.querySelector('h1').textContent = text.title[arabic ? 1 : 0];
  document.querySelector('.form-intro').textContent = text.intro[arabic ? 1 : 0];
  document.querySelector('label[for="name"]').textContent = text.name[arabic ? 1 : 0];
  document.querySelector('label[for="email"]').textContent = text.email[arabic ? 1 : 0];
  document.querySelector('label[for="message"]').textContent = text.message[arabic ? 1 : 0];
  const submit = document.querySelector('.submit-btn');
  submit.innerHTML = `${text.submit[arabic ? 1 : 0]} <i class="fas fa-paper-plane" aria-hidden="true"></i>`;
  const languageLink = document.querySelector('#language-toggle');
  languageLink.textContent = text.switch[arabic ? 1 : 0];
  languageLink.href = `./message.html?lang=${arabic ? 'en' : 'ar'}`;
  languageLink.setAttribute('aria-label', arabic ? 'Switch to English' : 'التبديل إلى العربية');
  const close = document.querySelector('.close-btn');
  close.href = arabic ? './index-AR.html' : './index.html';
  close.setAttribute('aria-label', text.back[arabic ? 1 : 0]);
})();
