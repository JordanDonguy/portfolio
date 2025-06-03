const navbar = document.getElementById('navbar');

const présentation = document.getElementById('présentation');
const Hi = document.getElementById('Hi');

const arrows = document.getElementsByClassName('arrow-img')
const arrowArray = Array.from(arrows);

const aPropos = document.getElementById('a-propos');
const projectSection = document.getElementById('projects');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');

const logoImages = document.getElementsByClassName('images');
const logoArray = Array.from(logoImages);

const projectContainers = document.getElementsByClassName('project-container');
const projectsArray = Array.from(projectContainers);

window.onload = function () {
    navbar.style.opacity = '1';
    navbar.style.fontSize = '1.5rem';

    aPropos.style.opacity = '1';
    projectSection.style.opacity = '1';
    skills.style.opacity = '1';
    contact.style.opacity = '1';

    arrowArray.forEach(arrow => {
        arrow.style.opacity = '1';
        arrow.style.width = '4rem';
    });

    Hi.style.fontSize = '3rem';
};


const skillsObserver = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            logoArray.forEach(logo => logo.style.transform = 'scale(1)');
            setTimeout(() => logoBounce(), 2000);
        }
    },
    {
        threshold: 0.5,
    }
);

const projectsObserver = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            projectsArray.forEach(project => project.style.transform = 'scale(1)');
            setTimeout(() => projectsBounce(), 1500);
        }
    },
    {
        threshold: 0.15,
    }
);

function logoBounce() {
    for (i = 0; i < logoArray.length; i++) {
        let randomNumber = Math.random() * (5 - 3) + 3;
        logoArray[i].style.animation = `bounce ease ${randomNumber}s infinite`
    }
};

function projectsBounce() {
    for (i = 0; i < projectsArray.length; i++) {
        let randomNumber = Math.random() * (8 - 5) + 3;
        projectsArray[i].style.animation = `bounce ease ${randomNumber}s infinite`
    }
};

skillsObserver.observe(skills);
projectsObserver.observe(projectSection);
