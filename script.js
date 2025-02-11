document.addEventListener('DOMContentLoaded', function() {
    const components = {
        'navbar-placeholder': 'navbar.html',
        'hero-placeholder': 'hero.html',
        'about-placeholder': 'about.html',
        'experience-placeholder': 'experience.html',
        'skills-placeholder': 'skills.html',
        'projects-placeholder': 'projects.html',
        'certifications-placeholder': 'certifications.html',
        'achievements-placeholder': 'achievements.html',
        'volunteering-placeholder': 'volunteering.html',
    };

    Object.entries(components).forEach(([elementId, url]) => {
        loadHTML(elementId, url).then(() => {
            if (elementId === 'navbar-placeholder') {
                initializeTheme();
            }
        });
    });
});

async function loadHTML(elementId, url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
        
        if (elementId === 'certifications-placeholder') {
            initializeCertCards();
        }
        
        return true;
    } catch (error) {
        console.error('Error loading HTML:', error);
        return false;
    }
}

function initializeTheme() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');

    darkModeToggle?.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme === 'dark');
    });
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('#darkModeToggle i');
    if (icon) {
        icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
}

function initializeCertCards() {
    const seeMoreBtn = document.querySelector('.see-more-btn');
    const hiddenCerts = document.querySelector('.hidden-certs');

    if (seeMoreBtn && hiddenCerts) {
        seeMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hiddenCerts.classList.remove('d-none');
            seeMoreBtn.classList.add('d-none');
        });
    }

    document.querySelectorAll('.cert-image-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });
}
function initializeProjects() {
    const seeMoreBtn = document.querySelector('.see-more-projects');
    const hiddenProjects = document.querySelector('.hidden-projects');

    if (seeMoreBtn && hiddenProjects) {
        seeMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hiddenProjects.classList.remove('d-none');
            seeMoreBtn.classList.add('d-none');
        });
    }
}

async function loadHTML(elementId, url) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
        
        if (elementId === 'projects-placeholder') {
            initializeProjects();
        }
        if (elementId === 'certifications-placeholder') {
            initializeCertCards();
        }
        
        return true;
    } catch (error) {
        console.error('Error loading HTML:', error);
        return false;
    }
}