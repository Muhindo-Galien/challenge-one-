let Toggler = document.getElementById("Toggler-btn");
let icon = document.querySelector(".navbar-toggler-icon");

Toggler.addEventListener("click", function () {
  if (icon.classList.contains("navbar-toggler-icon")) {
    icon.classList.replace("navbar-toggler-icon", "bi-x-lg");
  } else {
    icon.classList.replace("bi-x-lg", "navbar-toggler-icon");
  }
});

let btn_learnMore = document.getElementById("LearnMore");
let para_content = document.querySelector(".para2");
let isRolling = true;

btn_learnMore.addEventListener("click", function () {

    if (isRolling) {
        isRolling = false;
        btn_learnMore.innerText = "Lire peu";
        para_content.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
        Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />`;
    }else{
        isRolling = true;
        btn_learnMore.innerText = "Lire plus"
        para_content.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
        Lorem ipsum dolor sit.`
    }
  
});
