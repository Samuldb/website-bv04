// Mobile nav toggle
(function(){
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (!burger || !navLinks) return;
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
})();

// Sportangebot tabs (only present on sportangebot.html)
(function(){
  const tabs = document.querySelectorAll('.tab-btn');
  const schedules = document.querySelectorAll('.schedule');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      schedules.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });
})();
