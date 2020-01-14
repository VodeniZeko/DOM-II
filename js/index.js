// Your code goes here

const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseenter", () => {
  gsap.to(".logo-heading", {
    duration: 1,
    rotate: 180,
    color: "#fff",
    yoyo: true,
    y: 150,
    x: 300,
    repeat: 1
  });
});

const home = document.querySelector("body");
home.addEventListener("keydown", e => {
  if (e.keyCode === 38) {
    // if key arrow up
    gsap.to("body", {
      duration: 0.1,
      background: "#008000",
      yoyo: true,
      repeat: 1
    });
  } else {
    // else key arrow down
    gsap.to("body", {
      duration: 0.1,
      background: "#FF0000",
      yoyo: true,
      repeat: 1
    });
  }
});

const text = document.querySelectorAll("div > h2");
const para = document.querySelectorAll("header > p");

var tl = gsap.timeline({ defaults: { duration: 1, ease: "none" } });

window.addEventListener("load", () => {
  tl.to("div > h2", {
    duration: 3,
    font: 50,
    color: "#660000"
  });
});

const img1 = document.querySelector("div > img:nth-child(1)");
const img2 = document.querySelector(".img-fluid");
img1.addEventListener("wheel", e => {
  e.preventDefault();
  let scale = 1;
  scale = Math.min(Math.max(0.125, scale), 4);
  scale += event.deltaY * -0.01;
  img1.style.transform = `scale(${scale})`;
});
img2.addEventListener("wheel", e => {
  e.preventDefault();
  let scale = 1;
  scale = Math.min(Math.max(0.125, scale), 4);
  scale += event.deltaY * -0.01;
  img2.style.transform = `scale(${scale})`;
});

const bus = document.querySelector("header > img");

window.addEventListener("resize", e => {
  gsap.to("header > img", {
    skewY: -180,
    skewX: 180
  });
});

window.scrollTo({
  top: 300,
  left: 100,
  behavior: "smooth"
});

const a = document.querySelectorAll("p");
Array.from(a).forEach(item =>
  item.addEventListener("click", () => {
    item.style.color = "#fff";
  })
);

const wl = document.querySelector("header > h2");
wl.addEventListener("dblclick", e => {
  gsap.to("header > h2", {
    rotateX: -200,
    yoyo: true,
    repeat: 1
  });
});
