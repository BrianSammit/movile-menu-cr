const burBtn = document.getElementById('burBtn');
const butClose = document.getElementById('butClose');
const navMob = document.getElementById('navMob');

burBtn.addEventListener('click', function () {
  burBtn.classList.add('display-none');
  butClose.classList.remove('display-none');
  navMob.classList.remove('display-none');
});

butClose.addEventListener('click', function () {
  burBtn.classList.remove('display-none');
  butClose.classList.add('display-none');
  navMob.classList.add('display-none');
});
