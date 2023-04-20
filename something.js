let circle = document.getElementById("circle");
const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);

document.addEventListener("mouseenter", function (e) {
  window.cursorVisible = true;
  circle.style.opacity = 1;
});

document.addEventListener("mouseleave", function (e) {
  window.cursorVisible = true;
  circle.style.opacity = 0;
});

// Anchor hovering
document.querySelectorAll("a").forEach(function (el) {
  el.addEventListener("mouseover", function () {
    circle.style.width = 35;
    circle.style.height = 35;
    circle.style.invert(1);
  });
  el.addEventListener("mouseout", function () {
    circle.style.width = 5;
    circle.style.height = 5;
  });
});
