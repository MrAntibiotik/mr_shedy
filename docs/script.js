// Ефекти сторінки: шапка, прогрес прокрутки, поява блоків, «прожектор» на картках.
document.documentElement.classList.add('js');

const header = document.querySelector('.top');
const progress = document.querySelector('.progress');

function onScroll() {
  const y = window.scrollY;
  header && header.classList.toggle('scrolled', y > 10);
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Поява при прокрутці, з невеликою затримкою для сусідніх елементів
const groups = 'main section:not(.hero) h2, .trust-item, .card, .steps li, details, .alert, .doctor-photo, .doctor > div:last-child, main .badges li';
const items = document.querySelectorAll(groups);
items.forEach((el) => {
  const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(groups));
  el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 0.08}s`);
  el.classList.add('reveal');
});

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}

// «Прожектор» за курсором на картках послуг
document.querySelectorAll('a.card').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});
