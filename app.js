let img = document.querySelector(".spaceship");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  img.animate([{ transform: `translate(${x - 150}px,${y - 530}px)` }], {
    duration: 3000,
  });
});
