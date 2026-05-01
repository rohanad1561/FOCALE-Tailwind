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

const slider = document.querySelectorAll(".bimg-card");
let current = 2;

function slide() {
  const w = window.innerWidth;
  let spread, yOffset, scaleDown;

  if (w < 360) {
    spread = 0.18;
    yOffset = 60;
    scaleDown = 0.55;
  } else if (w < 480) {
    spread = 0.22;
    yOffset = 70;
    scaleDown = 0.6;
  } else if (w < 768) {
    spread = 0.32;
    yOffset = 110;
    scaleDown = 0.75;
  } else if (w < 1024) {
    spread = 0.36;
    yOffset = 140;
    scaleDown = 0.85;
  } else {
    spread = 0.38;
    yOffset = 160;
    scaleDown = 0.9;
  }

  return {
    [-2]: { x: -w * spread, y: yOffset, rot: -18, scale: 0.78 * scaleDown },
    [-1]: { x: -w * (spread * 0.6), y: yOffset * 0.5, rot: -8, scale: 0.9 * scaleDown },
    [0]: { x: 0, y: yOffset * 0.3, rot: 0, scale: 1.05 * scaleDown },
    [1]: { x: w * (spread * 0.6), y: yOffset * 0.5, rot: 8, scale: 0.9 * scaleDown },
    [2]: { x: w * spread, y: yOffset, rot: 18, scale: 0.78 * scaleDown }
  };
}

function update() {
  const layout = slide();

  slider.forEach((card, i) => {
    let pos = i - current;

    if (pos < -3) pos += slider.length;
    if (pos > 3) pos -= slider.length;

    if (Math.abs(pos) > 2) {
      card.style.opacity = "0";
      return;
    }

    const d = layout[pos];

    card.style.opacity = "1";

    gsap.to(card, {
      x: d.x,
      y: pos === 0 ? d.y + 25 : d.y,
      rotation: d.rot,
      scale: d.scale,
      zIndex: 100 - Math.abs(pos),
      duration: 0.3,
      ease: "power3.out"
    });
  });
}

function moveNext() {
  current = (current + 1) % slider.length;
  update();
}

update();
setInterval(moveNext, 2000);
