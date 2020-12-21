let $mainBox = document.getElementById('mainBox');
let $navLinks = document.getElementById('menu');
let $closeBtn = document.getElementById('close');

$mainBox.addEventListener('click', () => {
    $navLinks.classList.add('active');
});

$closeBtn.addEventListener('click', () => {
    $navLinks.classList.remove('active');
});

function splitScroll() {
    const controller = new ScrollMagic.Controller();


    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    .addIndicators()
    .addTo(controller);
}

splitScroll();


