$(document).ready(function($){
    let navbarClone = function(){
        $(".clone-nav").each(function(){
            let clonage = $(this);
            clonage.clone().attr("class","clone-look").appendTo(".mobile-look-body");
        });
    }
    navbarClone()
});