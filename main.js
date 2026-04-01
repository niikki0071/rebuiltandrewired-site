// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// Scroll fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Netlify form submission with inline confirmation
document.querySelectorAll('form[data-netlify="true"]').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Replace form with success message using safe DOM methods
            while (form.firstChild) { form.removeChild(form.firstChild); }
            const msg = document.createElement('p');
            msg.style.cssText = 'color:var(--navy);font-weight:600;font-family:Lora,serif;font-size:1.1rem;';
            msg.textContent = "You're in. Check your email for the Decision Filter.";
            form.appendChild(msg);
        })
        .catch(() => {
            while (form.firstChild) { form.removeChild(form.firstChild); }
            const msg = document.createElement('p');
            msg.style.cssText = 'color:var(--coral);font-weight:600;';
            msg.textContent = 'Something went wrong. Try subscribing at ';
            const link = document.createElement('a');
            link.href = 'https://rebuiltrewired.substack.com';
            link.style.color = 'var(--gold)';
            link.textContent = 'our Substack';
            msg.appendChild(link);
            msg.appendChild(document.createTextNode(' instead.'));
            form.appendChild(msg);
        });
    });
});
