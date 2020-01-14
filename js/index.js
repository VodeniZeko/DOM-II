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
