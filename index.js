let slide = document.querySelectorAll(".slider");
let card = document.querySelectorAll(".crd");
let connectBtn = document.getElementById("connect");
let count = 0;

slide.forEach(function (slides, index) {
  slides.style.left = `${index * 100}%`;
});

function myFun() {
  slide.forEach(function (curVal) {
    curVal.style.transform = `translateX(-${count * 100}%)`;
  });
}

setInterval(function () {
  count++;
  if (count == slide.length) {
    count = 0;
  }
  myFun();
}, 2000);

// card Detail

card.forEach(function (curCard) {
  curCard.addEventListener("click", function () {
    document.querySelector(".container").innerHTML = "";

    let div = document.createElement("div");
    div.classList.add("cardDetail");
    div.innerHTML = `
        <h1>Challenge</h1>
        <p>12 Week's</p>
        <img src=${curCard.firstElementChild.src}>
        <h3>About</h3>
        <p class="dumiText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam odit eligendi, ducimus consectetur voluptate ea? Quod sequi voluptatem autem dolor earum. Ex!</p>
        <button>Join</button>
        <a href="">Back</a>
        `;
    document.querySelector("body").appendChild(div);
    console.log(curCard.firstElementChild);
    console.log(document.querySelector("body"));
  });
});


// navbar
// const menuBtn = document.querySelector(".menu-icon span");
// const searchBtn = document.querySelector(".search-icon");
// const cancelBtn = document.querySelector(".cancel-icon");
// const items = document.querySelector(".nav-items");
// const form = document.querySelector("form");
// menuBtn.onclick = () => {
//   items.classList.add("active");
//   menuBtn.classList.add("hide");
//   searchBtn.classList.add("hide");
//   cancelBtn.classList.add("show");
// };
// cancelBtn.onclick = () => {
//   items.classList.remove("active");
//   menuBtn.classList.remove("hide");
//   searchBtn.classList.remove("hide");
//   cancelBtn.classList.remove("show");
//   form.classList.remove("active");
//   cancelBtn.style.color = "#ff3d00";
// };
// searchBtn.onclick = () => {
//   form.classList.add("active");
//   searchBtn.classList.add("hide");
//   cancelBtn.classList.add("show");
// };
