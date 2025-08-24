document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var isOpen = this.classList.contains("open");
      faqItems.forEach(function (el) {
        el.classList.remove("open");
        el.querySelector(".expand-collapse-icon").classList.remove("collapsed");
      });
      if (!isOpen) {
        this.classList.add("open");
        this.querySelector(".expand-collapse-icon").classList.add("collapsed");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("main img.img-popup").forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      document.getElementById("imgLightboxImg").src = img.src;
      document.getElementById("imgLightbox").classList.add("active");
    });
  });
  document.getElementById("imgLightbox").addEventListener("click", function () {
    this.classList.remove("active");
    document.getElementById("imgLightboxImg").src = "";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsNavItem = document.getElementById("about-us-dropdown");
  const aboutdropdownMenu = document.getElementById(
    "aboutusdropdown-menu-mobile"
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

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector(".quickbar");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

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
