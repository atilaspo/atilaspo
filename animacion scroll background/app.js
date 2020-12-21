function bgChanger() {
    if(this.scrollY > this.innerHeight / 1.2) {
        document.body.classList.add("bg-white");
    } else {
        document.body.classList.remove("bg-white");
    }
};

window.addEventListener("scroll", bgChanger);


