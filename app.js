const header = document.getElementsByTagName('header')[0];

const name = document.getElementById('name');
const navbar = document.getElementById('navbar');
const listMenu = document.getElementById('list-menu');
const backdropFilter = document.getElementById('backdropFilter');

const présentation = document.getElementById('présentation');

const hello = document.getElementById('hello');
const myName =document.getElementById('my-name');
const me = document.getElementById('me');


window.onload = function() {
    header.style.width = '100%';

    name.style.opacity = '1';
    navbar.style.opacity = '1';
    listMenu.style.opacity = '1';

    if (window.innerWidth > 500) {
        présentation.style.clipPath = 'polygon(0% -90%,90% 100%, 0% 100%)';
    } else {
        présentation.style.clipPath = 'polygon(0% -60%,100% 100%, 0% 100%)';
    };

    hello.style.color = 'rgb(185, 205, 230)';
    myName.style.color = 'rgb(255, 255, 255)';
    me.style.color = 'rgb(190, 240, 200)';
}

const navLink = document.getElementsByClassName('nav-link');

listMenu.onclick = function() {
   if (navbar.style.display === 'none') {
        navbar.style.display = 'flex';
        backdropFilter.style.display = 'flex'
    } else {
        navbar.style.display = 'none';
        backdropFilter.style.display = 'none'
    };
};

window.onresize = function() {
    if (window.innerWidth > 950) {
        navbar.style.display = 'flex';
        backdropFilter.style.display = 'flex';
        présentation.style.clipPath = 'polygon(0% -90%,90% 100%, 0% 100%)';
    } else if (window.innerWidth > 500) {
        navbar.style.display = 'none';
        backdropFilter.style.display = 'none';
        présentation.style.clipPath = 'polygon(0% -90%,90% 100%, 0% 100%)';
    } else {
        navbar.style.display = 'none';
        backdropFilter.style.display = 'none';
        présentation.style.clipPath = 'polygon(0% -60%,100% 100%, 0% 100%)';
    };
};

for (let i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function() {
        if (window.innerWidth < 950) {
            navbar.style.display = 'none';
            backdropFilter.style.display = 'none'
        } else {
            navbar.style.display = 'flex';
            backdropFilter.style.display = 'flex'
        };
    }
};