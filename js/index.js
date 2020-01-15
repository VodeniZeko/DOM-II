// Your code goes here

const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseenter", () => {
  // hovering over logo text rotates it and color is changed
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
  // pressing key arrows changes the body color
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

var tl = gsap.timeline({ defaults: { duration: 1, ease: "none" } });

window.addEventListener("load", () => {
  tl.to("div > h2", {
    // on load text grows and changes color
    duration: 3,
    font: 50,
    color: "#660000"
  });
});

const img1 = document.querySelector("div > img:nth-child(1)");
const img2 = document.querySelector(".img-fluid");
img1.addEventListener("wheel", e => {
  e.preventDefault(); // preventing scrolling the website while scalling the image
  let scale = 1;
  scale = Math.min(Math.max(0.125, scale), 4);
  scale += event.deltaY * -0.01;
  img1.style.transform = `scale(${scale})`;
});
img2.addEventListener("wheel", e => {
  e.preventDefault(); //preventing scrolling the website while scalling the image
  let scale = 1;
  scale = Math.min(Math.max(0.125, scale), 4);
  scale += event.deltaY * -0.01;
  img2.style.transform = `scale(${scale})`;
});

const bus = document.querySelector("header > img");

window.addEventListener("resize", e => {
  gsap.to("header > img", {
    // resizing the browser skews the image
    skewY: -180,
    skewX: 180
  });
});

window.scrollTo({
  //scroll on load
  top: 300,
  left: 100,
  behavior: "smooth"
});

const a = document.querySelectorAll("p");
const div = document.querySelectorAll(".text-content");
console.log(div);

Array.from(div).forEach(el =>
  el.addEventListener("click", () => {
    // on click changes background color (we are going to prevent this if clicking on paragraph)
    el.style.background = "gray";
  })
);
Array.from(a).forEach((
  item //loop over the p and add event listener
) =>
  item.addEventListener("click", e => {
    item.style.color = "#fff";
    e.stopPropagation(); //div is not changing background to gray
  })
);

const wl = document.querySelector("header > h2");
wl.addEventListener("dblclick", e => {
  //click twice to flip the h2
  gsap.to("header > h2", {
    rotateX: -200
  });
});

const navLink = document.querySelectorAll("a");
Array.from(navLink).forEach((
  el // links are taking you to KNOWHERE
) =>
  el.addEventListener("click", e => {
    e.preventDefault();
  })
);
