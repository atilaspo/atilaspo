const $toggleBtn = document.getElementsByClassName('toggle-button')[0];
let $navLinks = document.getElementsByClassName('navbar__links')[0];

$toggleBtn.addEventListener('click', () => {
    $navLinks.classList.toggle('active');
})