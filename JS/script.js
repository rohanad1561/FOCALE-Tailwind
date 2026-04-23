const menu = document.querySelector(".menu");
const navbarCollpased = document.querySelector(".navbar-collapsed");
let open = true;

menu.addEventListener("click", () => {
  if (open == true) {
    menu.classList.add("show");
    navbarCollpased.style.top = "0";
    open = false;
  } else {
    menu.classList.remove("show");
    navbarCollpased.style.top = "-100%";

    open = true;
  }
});

const splide = new Splide("#auto", {
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 3,
  gap: "20px",
  autoPlay: true,
  autoScroll: {
    speed: 2,
  },
  breakpoints: {
    1440: {
      perPage: 2,
      gap: ".7rem",
    },
    950: {
      perPage: 1,
      gap: ".7rem",
    },
  },
});

splide.mount(window.splide.Extensions);

