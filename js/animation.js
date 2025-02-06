document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        if (entry.target.classList.contains('slide-left')) {
            entry.target.classList.add('slide-in-left');
            entry.target.classList.remove('slide-out-left');
        } else if (entry.target.classList.contains('slide-right')) {
            entry.target.classList.add('slide-in-right');
            entry.target.classList.remove('slide-out-right');
        }
    }
});
}, observerOptions);
    document.querySelectorAll('.slide-left, .slide-right').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When section enters viewport, apply zoom-in effect
                entry.target.querySelectorAll("button").forEach((button, index) => {
                    setTimeout(() => {
                        button.classList.remove("zoom-out");
                        button.classList.add("zoom-in");
                    }, index * 100);
                });
            } else {
                // When section leaves viewport, apply zoom-out effect
                entry.target.querySelectorAll("button").forEach((button, index) => {
                    setTimeout(() => {
                        button.classList.remove("zoom-in");
                        button.classList.add("zoom-out");
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll(".button-container").forEach((section) => {
        section.querySelectorAll("button").forEach((button) => {
            button.classList.add("hidden"); // Ensure buttons are hidden initially
        });
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.image-marquee-left').classList.add('marquee-left');
            entry.target.querySelector('.image-marquee-right').classList.add('marquee-right');
            observer.unobserve(entry.target);
        }
        });
    }, observerOptions);

    document.querySelectorAll('.image-marquee-container').forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const listSection = document.querySelector('.list-section');
    const listItems = listSection.querySelectorAll('li');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateListItems() {
        if (isInViewport(listSection)) {
            listItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.animationDelay = `${index * 0.3}s`;
                    item.style.opacity = 1;
                }, index * 300);
            });
            window.removeEventListener('scroll', animateListItems);
        }
    }

    window.addEventListener('scroll', animateListItems);
    animateListItems(); // Initial check in case the section is already in the viewport
});