function toggleTheme() {
  const body = document.body;
  const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5', 'theme-6', 'theme-7', 'theme-8', 'theme-9', 'theme-10', 'theme-11', 'theme-12', 'theme-13', 'theme-14', 'theme-15', 'theme-16', 'theme-17', 'theme-18', 'theme-19', 'theme-20'];
  let currentThemeIndex = themes.findIndex(theme => body.classList.contains(theme));
  body.classList.remove(themes[currentThemeIndex]);
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  body.classList.add(themes[currentThemeIndex]);
}

function toggleFont() {
  const body = document.body;
  const fonts = ['font-1', 'font-2', 'font-3', 'font-4', 'font-5', 'font-6', 'font-7', 'font-8', 'font-9', 'font-10', 'font-11', 'font-12', 'font-13', 'font-14', 'font-15', 'font-16', 'font-17', 'font-18', 'font-19', 'font-20'];
  let currentFontIndex = fonts.findIndex(font => body.classList.contains(font));
  body.classList.remove(fonts[currentFontIndex]);
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
  body.classList.add(fonts[currentFontIndex]);
}