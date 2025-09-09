// Parallax for hero image and subtle title movement
(() => {
  const hero = document.querySelector('.hero');
  const heroImg = hero?.querySelector('img');
  const title = hero?.querySelector('h1');

  function onPointerMove(e) {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const imgTrans = `translate(${x * 6}px, ${y * 6}px) scale(1.02)`;
    const titleTrans = `translate(${x * -18}px, ${y * -12}px)`;
    if (heroImg) heroImg.style.transform = imgTrans;
    if (title) title.style.transform = titleTrans;
  }

  function resetTransforms() {
    if (heroImg) heroImg.style.transform = '';
    if (title) title.style.transform = '';
  }

  if (hero) {
    hero.addEventListener('pointermove', onPointerMove);
    hero.addEventListener('pointerleave', resetTransforms);
    hero.addEventListener('pointerdown', () => {
      if (title) title.style.opacity = '0.9';
    });
    hero.addEventListener('pointerup', () => {
      if (title) title.style.opacity = '';
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  function setTheme(isDark) {
    if (isDark) document.body.classList.add('dark-theme'); else document.body.classList.remove('dark-theme');
  try { localStorage.setItem('jm_theme_dark', isDark ? '1' : '0'); } catch (_err) { /* ignore storage errors */ }
  }
  if (themeToggle) {
  const prefersDark = (globalThis.matchMedia && globalThis.matchMedia('(prefers-color-scheme: dark)').matches) || false;
  const storedRaw = localStorage.getItem('jm_theme_dark');
  const stored = storedRaw === '1' ? true : (storedRaw === '0' ? false : null);
  setTheme(stored !== null ? stored : prefersDark);
    themeToggle.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('dark-theme');
      setTheme(isDark);
      themeToggle.textContent = isDark ? 'Light' : 'Dark';
    });
  }

  // Simple scroll reveal for grid items
  const reveals = document.querySelectorAll('.grid > *');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) en.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => { r.classList.add('reveal'); io.observe(r); });
})();
