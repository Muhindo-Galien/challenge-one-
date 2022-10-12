let Toggler = document.getElementById("Toggler-btn");
let icon = document.querySelector(".navbar-toggler-icon");

Toggler.addEventListener('click',function(){

    if( icon.classList.contains("navbar-toggler-icon")){
        icon.classList.replace("navbar-toggler-icon","bi-x-lg");
    }else{
        icon.classList.replace("bi-x-lg","navbar-toggler-icon");
    }
})
