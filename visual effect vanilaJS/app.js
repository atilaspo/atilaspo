function scrollIn() {
    let $textHidden = document.querySelector('.text-hidden');
    let position = $textHidden.getBoundingClientRect().top;
    let screenPosition  = window.innerHeight / 2;

    if (position < screenPosition) {
        $textHidden.classList.add('text-show');
    }
}

window.addEventListener('scroll', scrollIn);

