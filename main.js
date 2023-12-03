function toggleMobileMenu() {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.width = mobileMenu.style.width === '100%' ? '0' : '100%';
}

function cerrarNav() {
  document.getElementById('mobile-menu').style.width = '0';
}

function message() {
  var Name = document.getElementById('name');
  var email = document.getElementById('email');
  var msg = document.getElementById('msg');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if (Name.value === '' || email.value === '' || msg.value === '') {
    danger.style.display = 'block';
  } else {
    setTimeout(() => {
      Name.value = '';
      email.value = '';
      msg.value = '';
    }, 3000);

    success.style.display = 'block';
  }

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 4000);
}
