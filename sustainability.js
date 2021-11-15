window.addEventListener("load", textcarusel);

function textcarusel() {
  document.querySelector(".rotatingText-adjective1").classList.add("rot1");
  document.querySelector(".rotatingText-adjective2").classList.add("rot2");
  document.querySelector(".rotatingText-adjective3").classList.add("rot3");
  document.querySelector(".rotatingText-adjective4").classList.add("rot4");
}
/* 
document
  .querySelector(".rotatingText-adjective4")
  .addEventListener("animationend", endof);

function endof() {
  document.querySelector(".rotatingText-adjective1").classList.remove("rot1");
  document.querySelector(".rotatingText-adjective2").classList.remove("rot2");
  document.querySelector(".rotatingText-adjective3").classList.remove("rot3");
  document.querySelector(".rotatingText-adjective4").classList.remove("rot4");
  textcarusel();
}
 */

/* --------------- COLLAPSED SIDE BAR ------------------- */

document.querySelector("#open").addEventListener("click", openSideMenu);
let flag;

function openSideMenu() {
  document.querySelector(".side-nav").classList.toggle("width");
  var tl = gsap.timeline();

  if (flag) {
    flag = 0;
    /* tl.reverse(); */
    tl.to("rect.one", { opacity: 1, duration: 0.35, rotation: 0 });
    tl.to("rect.two", { opacity: 1, duration: 0.7 }, "<");
    tl.to("rect.three", { opacity: 1, duration: 0.35, rotation: 0 }, "<");
  } else {
    flag = 1;
    tl.to("rect.one", { duration: 0.35, rotation: 42 });
    tl.to("rect.two", { opacity: 0, duration: 0.7 }, "<");
    tl.to("rect.three", { duration: 0.35, rotation: -42 }, "<");
  }
}
