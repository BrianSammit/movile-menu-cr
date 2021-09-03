const burBtn = document.getElementById('burBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');

burBtn.addEventListener('click', function () {
  burBtn.classList.add('display-none');
  closeBtn.classList.remove('display-none');
  mobileNav.classList.remove('display-none');
});

closeBtn.addEventListener('click', function () {
  burBtn.classList.remove('display-none');
  closeBtn.classList.add('display-none');
  mobileNav.classList.add('display-none');
});
