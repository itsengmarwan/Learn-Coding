(() => {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle?.querySelector('i');
  const storageKey = 'learn-coding-theme';

  const setTheme = (theme) => {
    const isLight = theme === 'light';
    body.classList.toggle('light-mode', isLight);
    icon?.classList.toggle('fa-sun', isLight);
    icon?.classList.toggle('fa-moon', !isLight);
    toggle?.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    toggle?.setAttribute('aria-pressed', String(isLight));
  };

  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem(storageKey) || 'dark'; } catch (_) {}
  setTheme(savedTheme);

  toggle?.addEventListener('click', () => {
    const next = body.classList.contains('light-mode') ? 'dark' : 'light';
    setTheme(next);
    try { localStorage.setItem(storageKey, next); } catch (_) {}
  });

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
