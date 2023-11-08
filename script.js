// Kode untuk membuat navbar menjadi sticky saat digulir
window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    function handleScroll() {
        if (window.scrollY > nav.offsetTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

// Kode untuk menangani klik pada tautan navbar
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    function handleClick(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleClick);
    });
});

// Kode untuk menangani toggle menu
const toggleMenu = document.getElementById('toggle-menu');
const navItems = document.getElementById('navitems');

toggleMenu.addEventListener('click', function() {
    if (navItems.style.display === 'block') {
        navItems.style.display = 'none'; // Menyembunyikan elemen dengan mengubah properti display
    } else {
        navItems.style.display = 'block'; // Menampilkan elemen
    }
});

