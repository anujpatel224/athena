document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      // Prevent event bubbling
      e.stopPropagation();
      // Toggle the 'open' class - CSS handles the icon and answer display
      this.classList.toggle("open");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("imgLightbox");
  const lightboxImg = document.getElementById("imgLightboxImg");

  // ONLY slider images and heritage slider image
  document
    .querySelectorAll(".service-carousel-image, .gallery-scroll img")
    .forEach(function (img) {
      img.style.cursor = "pointer";

      img.addEventListener("click", function () {
        lightboxImg.src = this.src;
        lightbox.classList.add("active");
      });
    });

  // close lightbox
  lightbox.addEventListener("click", function () {
    this.classList.remove("active");
    lightboxImg.src = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsNavItem = document.getElementById("about-us-dropdown");
  const aboutdropdownMenu = document.getElementById(
    "aboutusdropdown-menu-mobile",
  );

  if (aboutUsNavItem && aboutdropdownMenu) {
    aboutUsNavItem.addEventListener("click", function (e) {
      e.preventDefault();
      aboutdropdownMenu.classList.toggle("active");
    });

    const dropdownLinks = aboutdropdownMenu.querySelectorAll("a");
    dropdownLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });
  }
});
jQuery(document).ready(function () {
  jQuery(".expand-collapse-icon").click(function () {
    jQuery(this).toggleClass("collapsed");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navItem = document.querySelector(".nav-item.start.dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu-mobile");

  navItem.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdownMenu.classList.toggle("active");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   let lastScrollTop = 0;
//   const header = document.querySelector(".quickbar");

//   window.addEventListener("scroll", function () {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//       // Scrolling down
//       header.style.transform = "translateY(-100%)";
//     } else {
//       // Scrolling up
//       header.style.transform = "translateY(0)";
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//   });
// });

function adjustBgHeight() {
  const header = document.querySelector(".quickbar");
  const marquee = document.querySelector(".lets-talk");
  const bgSection = document.querySelector(".bg-ct");

  if (window.innerWidth <= 768) {
    // For mobile, set height to max-content
    if (bgSection) {
      bgSection.style.height = "max-content";
    }
  } else {
    // For larger screens, calculate remaining height
    const headerHeight = header ? header.offsetHeight : 0;
    const marqueeHeight = marquee ? marquee.offsetHeight : 0;
    const remainingHeight = window.innerHeight - headerHeight - marqueeHeight;

    if (bgSection) {
      bgSection.style.height = `${remainingHeight}px`;
    }
  }
}

window.addEventListener("load", adjustBgHeight);
window.addEventListener("resize", adjustBgHeight);

const slider = document.getElementById("slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

leftArrow.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});
