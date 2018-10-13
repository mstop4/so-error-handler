try {
  console.tree('Hello');
} catch(e) {
  window.open('https://stackoverflow.com/search?q=[js]+' + e.message, '_blank');
  window.focus();
}