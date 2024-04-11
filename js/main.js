function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.width = mobileMenu.style.width === '100%' ? '0' : '100%';
}

function cerrarNav() {
  document.getElementById('mobile-menu').style.width = '0';
}
