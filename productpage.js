window.addEventListener("load", textcarusel);

function textcarusel() {
  document.querySelector(".rotatingText-adjective1").classList.add("rot1");
  document.querySelector(".rotatingText-adjective2").classList.add("rot2");
  document.querySelector(".rotatingText-adjective3").classList.add("rot3");
  document.querySelector(".rotatingText-adjective4").classList.add("rot4");
}

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
/* -------------------- GALLERY ---------------------------- */
document.querySelector(".img1").addEventListener("click", changeImage);
document.querySelector(".img2").addEventListener("click", changeImage);

function changeImage(e) {
  var fullImg = document.querySelector("#imageBox");
  fullImg.src = this.src;
}

/* -----------------FETCHING DATA---------------------- */
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://silfen-3aa2.restdb.io/rest/silfen-prom/" + id;

const options = {
  headers: {
    "x-apikey": "61925035fc71545b0f5e0810",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleData(data);
  })

  .catch((e) => {
    console.error("An error occured:", e.message);
  });
function handleData(bag) {
  console.log(bag);
  console.log("pieceofart");

  document.querySelector(".product-small-img .img1").src =
    bag.primary_image_url;
  document.querySelector(".product-small-img .img2").src =
    bag.secondary_image_url;
  document.querySelector(".product img").src = bag.primary_image_url;
  document.querySelector(".productname").textContent = bag.title;
  document.querySelector(".description").textContent = bag.description;
  document.querySelector(".strap").textContent = bag.strap;
  document.querySelector(".colorimg img").src = bag.primary_image_url;
  document.querySelector(".arttype").textContent = bag.arttype;
  document.querySelector(".dimensions").textContent = bag.dimensions;
}
