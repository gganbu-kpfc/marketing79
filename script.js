window.addEventListener("load", () => {

  const loader = document.getElementById("siteLoader");

  if (loader) {
    loader.classList.add("hide");
  }

});


const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");

if (mobileToggle && mobileNav) {

  mobileToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

    document.body.classList.toggle("menu-open");

  });

}


const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

  const header = document.getElementById("siteHeader");

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (topButton) {

    if (window.scrollY > 400) {
      topButton.classList.add("show");
    } else {
      topButton.classList.remove("show");
    }

  }

});


if (topButton) {

  topButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  });

}


const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  const triggerBottom = window.innerHeight * 0.9;

  reveals.forEach((item) => {

    const rect = item.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      item.classList.add("active");
    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


const counters = document.querySelectorAll("[data-count]");

counters.forEach((counter) => {

  const update = () => {

    const target = +counter.getAttribute("data-count");

    const current = +counter.innerText.replace(/,/g, "");

    const increment = target / 60;

    if (current < target) {

      counter.innerText =
        Math.ceil(current + increment).toLocaleString();

      setTimeout(update, 20);

    } else {

      counter.innerText = target.toLocaleString();

    }

  };

  update();

});


const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const message = document.getElementById("formMessage");

    if (message) {

      message.innerText =
        "문의가 정상적으로 접수되었습니다.";

    }

    form.reset();

  });

}
