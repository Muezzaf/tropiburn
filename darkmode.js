// darkmode.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const body = document.body;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
    toggleThemeBtn.textContent = currentTheme === 'dark-mode' ? '☀️ Mode Terang' : '🌙 Mode Gelap';
  }

  toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    toggleThemeBtn.textContent = theme === 'dark-mode' ? '☀️ Mode Terang' : '🌙 Mode Gelap';
    localStorage.setItem('theme', theme);
  });
});
