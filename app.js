const header = document.getElementsByTagName('header')[0];

const name = document.getElementById('name');
const navbar = document.getElementById('navbar');
const listMenu = document.getElementById('list-menu');

const présentation = document.getElementById('présentation');
const Hi = document.getElementById('Hi');

window.onload = function () {
    name.style.opacity = '1';
    navbar.style.opacity = '1';
    listMenu.style.opacity = '1';

    Hi.style.width = '100%';
    Hi.style.color = 'rgb(255, 255, 255)';

    if (window.innerWidth > 950) {
        Hi.style.fontSize = '3rem';
    } else if (window.innerWidth > 500) {
        Hi.style.fontSize = '2.5rem';
    } else {
        Hi.style.fontSize = '2rem';
    };
}

const navLink = document.getElementsByClassName('nav-link');

listMenu.onclick = function () {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    };
};

window.onresize = function () {
    if (window.innerWidth > 950) {
        navbar.style.display = 'flex';
        Hi.style.fontSize = '3rem';
    } else if (window.innerWidth > 500) {
        navbar.style.display = 'none';
        Hi.style.fontSize = '2.5rem';
    } else {
        navbar.style.display = 'none';
        Hi.style.fontSize = '2rem';
    };
};

for (let i = 0; i < navLink.length; i++) {
    navLink[i].onclick = function () {
        if (window.innerWidth < 950) {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        };
    }
};
