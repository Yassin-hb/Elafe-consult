const row2 = document.querySelector(".buttone ");
observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = " animation-img 3s  ";
  }
});
observer.observe(row2);
const row3 = document.querySelector(".radio");
observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = " animatin-radio 3s  ";
  }
});
observer.observe(row3);
const row4 = document.querySelector(".buttone-animation ");
observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = " animation-img 3s  ";
  }
});
observer.observe(row4);

const row5 = document.querySelector(".buttone-animation2 ");
observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = " animation-img 3s  ";
  }
});
observer.observe(row5);

const row6 = document.querySelector(".div-main3 ");
observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = " black-animation 6s";
  }
});
observer.observe(row6);

const row7 = document.querySelector(".hbaba ");
observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = " animation-fine 6s";
  }
});
observer.observe(row7);

const bar = document.getElementById("nave-bar");

const naveBar = (eo) => {
  if (document.documentElement.scrollTop >= 100) {
    // bar.style.display="flex";
  } else {
    // bar.style.display="none";
    bar.style.animation = "none";
  }
};

addEventListener("scroll", naveBar);

const HOME = document.getElementById("HOME");
const home2Scrol = document.getElementById("home2Scrol");

HOME.addEventListener("click", (eo) => {
  home2Scrol.scrollIntoView({ behavior: "smooth" });
});

const SERVER = document.getElementById("SERVER");
const SERVER2Scrol = document.getElementById("SERVER2Scrol");

SERVER.addEventListener("click", (eo) => {
  SERVER2Scrol.scrollIntoView({ behavior: "smooth" });
});

const ABOUT = document.getElementById("ABOUT");
const ABOUT3Scroll = document.getElementById("ABOUT3Scroll");

ABOUT.addEventListener("click", (eo) => {
  ABOUT3Scroll.scrollIntoView({ behavior: "smooth" });
});

const COMPANY = document.getElementById("COMPANY");
const COMPANY7Scroll = document.getElementById("COMPANY7Scroll");

COMPANY.addEventListener("click", (eo) => {
  COMPANY7Scroll.scrollIntoView({ behavior: "smooth" });
});

const CONTACT = document.getElementById("CONTACT");
const CONTACTfScroll = document.getElementById("CONTACTfScroll");

CONTACT.addEventListener("click", (eo) => {
  CONTACTfScroll.scrollIntoView({ behavior: "smooth" });
});

// ski.onclick = (eo) => {
//     mane2Scrol.scrollIntoView({ behavior: "smooth" });
// };
