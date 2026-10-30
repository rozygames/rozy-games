const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Pencarian akan bekerja otomatis setelah kartu-kartu game dimasukkan.
const gameSearch = document.getElementById('gameSearch');
if (gameSearch) {
  gameSearch.addEventListener('input', () => {
    const cards = [...document.querySelectorAll('.game-card')];
    const query = gameSearch.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const matches = card.textContent.toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) shown++;
    });
    const count = document.getElementById('resultCount');
    if (count && cards.length) count.textContent = `Menampilkan ${shown} dari ${cards.length} game`;
  });
}
