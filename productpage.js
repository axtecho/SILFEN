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

/* -----------------FETCHING DATA---------------------- */
const url = "https://silfen-3aa2.restdb.io/rest/silfen-prom";

const options = {
  headers: {
    "x-apikey": "3f2da07bd3b34d860de5cdb1de1696dbab906",
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
  bag.forEach(artpiece);
}

function artpiece(pieceofart) {
  const template = document.querySelector("#ourtemplate").content;

  const copy = template.cloneNode(true);
  copy
    .querySelector(".artlist a")
    .setAttribute("href", "artpiece.html?id=" + pieceofart._id);
  copy.querySelector(".artistname").textContent = pieceofart.artist;
  copy.querySelector(".artname").textContent = pieceofart.titel;
  copy.querySelector("img").src = pieceofart.img_url;

  const parent = document.querySelector(".grid");

  parent.appendChild(copy);
}
