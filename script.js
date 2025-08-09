document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Navigációs sáv megjelenítése/elrejtése
        navLinks.classList.toggle('nav-active');

        // Linkek animációja
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger ikon animációja
        hamburger.classList.toggle('toggle');
    });

    // Gépelési animáció
    const typingTextElement = document.getElementById('typing-text');
    const words = ["Frontend Fejlesztő", "Kreatív Problémamegoldó", "Web Design Rajongó", "JavaScript Szakértő"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentText = isDeleting 
            ? currentWord.substring(0, charIndex--) 
            : currentWord.substring(0, charIndex++);
        
        typingTextElement.textContent = currentText;
        const typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, typeSpeed);
    }
    
    type();

    //  Görgetésre beúszó animációk (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // A szekció 10%-a látható legyen
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));


    // Lazy Loading képekhez (Intersection Observer)
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    img.classList.remove('lazy');
                    observer.disconnect();
                }
            });
        });
        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);
listSkiilsFunction();
listProjectsFunction();
});

const skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'Git', 'Webpack', 'Sass', 'React', 'Vue.js', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'Figma', 'Photoshop', 'Illustrator', 'Responsive Design', 'UI/UX Design', 'Agile Methodologies', 'RESTful APIs', 'GraphQL', 'Testing', 'CI/CD', 'Docker',  'Firebase', 'MongoDB', 'PostgreSQL', 'MySQL', 'GraphQL', 'Web Accessibility (a11y)', 'Performance Optimization', 'Cross-Browser Compatibility', 'SEO Best Practices', 'Progressive Web Apps (PWA)', 'Single Page Applications (SPA)', 'Content Management Systems (CMS)', 'E-commerce Platforms', 'Version Control Systems', 'Code Review Practices', 'Agile Development', 'Scrum Methodology',  'API Design and Development', 'WebSockets', 'GraphQL APIs', 'OAuth and OpenID Connect', 'JWT Authentication', 'WebAssembly', 'Progressive Enhancement', 'Mobile-First Design', 'Cross-Platform Development', 'Static Site Generators', 'Content Delivery Networks (CDN)', 'Web Performance Optimization', 'Security Best Practices', 'Data Visualization', 'Real-Time Applications', 'Web Components', 'Custom Elements', 'Shadow DOM', 'CSS Grid Layout', 'CSS Flexbox', 'CSS Animations and Transitions', 'SVG Graphics', 'Canvas API', 'WebGL',  'Fetch API', 'XMLHttpRequest', 'Service Workers', 'Web Push Notifications', 'IndexedDB', 'Local Storage', 'Session Storage', 'WebSockets', 'Server-Sent Events (SSE)', 'Progressive Web Apps (PWA)', 'Responsive Images', 'CSS Variables', 'PostCSS', 'Babel', 'ESLint', 'Prettier', 'Storybook', 'Hot Module Replacement (HMR)', 'Lazy Loading Components', 'Internationalization (i18n)'];
  const projects = [
        {
            title: 'Létezz könnyedén',
            description: 'Az egész oldalt én csináltam Angularral a megrendelő ötlete szerint készült a design.',
            image: 'lk_logo.png'
        },
        {
            title: 'BME Környezetgazdaság tanszék',
            description: 'A backendet is én csináltam (Laravel ) és a frontendet a bladek jelenítik meg (SSR).',
            image: 'bme_logo.png'
        },
        {
            title: 'Zöldséges',
            description: 'A frontendet csináltam ebben a projektben, együtt működve az UI csapattal és backendes csapattal',
            image: 'zoldseges_logo.png'
        },
        {
            title: 'Futárom',
            description: 'A frontendet csináltam ebben a projektben, együtt működve az UI csapattal és backendes csapattal',
            image: 'futarom_logo.png'
        },
        {
            title: 'Pimpa',
            description: 'A backendet is én csináltam (Laravel) és a frontendet a bladek jelenítik meg (SSR).',
            image: 'pimpa_logo.png'
        },
        {
            title: 'Ammarna',
            description: 'A frontendet ( Angular ) csináltam ebben a projektben, együtt működve az UI csapattal és backendes csapattal',
            image: 'ammarna_logo.png'
        }
    ]
const listSkiilsFunction = () => {
    const listSkills = document.querySelector('.skills-container');
    skills.forEach((skill) => {
        const card = document.createElement('div');
        card.classList.add('skill-card');
        card.textContent = skill;
        listSkills.appendChild(card);
    });
};
const listProjectsFunction = () => {
    const listProjects = document.querySelector('.projects-container');
    
    projects.forEach((project) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        const img = document.createElement('img');
        const row = document.createElement('p');
        row.classList.add('text-center');
        row.classList.add('p-1');
        img.src = `assets/${project.image}`;
        img.alt = project.title;
        
        row.appendChild(img);
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.classList.add('text-center');
        description.classList.add('p-1');
        description.textContent = project.description;
        
        card.appendChild(row);
        card.appendChild(title);
        card.appendChild(description);
        
        listProjects.appendChild(card);
    });
}