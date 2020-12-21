

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    'linear-gradient(to right top, #e35d5b, #e53935)', 
    'linear-gradient(to right top, #0b8793, #360033)',
    'linear-gradient(to right top, #eea849, #f46b45)'
];



const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".nav__menu");
    const navLinks = document.querySelectorAll('.nav__menu li');

// Toggle Nav
burguer.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => { 
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
        }
    });
    burguer.classList.toggle('toggle');
});
}
navSlide();

//     // Toggle nav - hamburger
//     function addClass() {
//         let $menu = document.querySelector('.nav__menu');
//         $menu.classList.toggle('nav-active');
//     }


// // listener Hamburguer Icon
//     let $hamburger = document.querySelector('.burguer');
//     $hamburger.addEventListener('click', addClass);

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientindex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = gradients[gradientindex];
        }        
    });
}

sections.forEach(section => {
    observer.observe(section);
})

