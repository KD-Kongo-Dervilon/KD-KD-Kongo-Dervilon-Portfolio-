// button-menu responsive 
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');


btnMenu.addEventListener('click', () => btnMenu.classList.toggle('active'));

btnMenu.addEventListener('click', () => menu.classList.toggle('active'));

btnMenu.addEventListener('click', () => body.classList.toggle('hidden'));

// header sticky

let head = document.querySelector("header");

window.addEventListener('scroll', () => {
    if(this.scrollY > 30) {
        head.classList.add('sticky'); 
    }  else {
        head.classList.remove('sticky');
    }

})

// scroll smooth 
const btn = document.querySelector('.fleche');

btn.addEventListener('click', () => {
    this.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// scroll smooth  top none
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        btn.style.display ="block";
    } else {
        btn.style.display ="none";
    }
})

// animation myBar

window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

})

// Animation Texte Bienvenue sur mon :
const txtAnim = document.querySelector(".animationType");

new Typewriter(txtAnim, {
    // deleteSpeed: 20
})

.pauseFor(4000)
.typeString(" site")
.pauseFor(1000)
.deleteChars(4)
.pauseFor(700)
.typeString("portfolio")
.start()

// Tab animation:


let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for(let i=0;i<tabsPane.length;i++){
    tabsPane[i].addEventListener("click",function(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");
    
    tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
    });
}

// Portfolio 
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

// contact

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
