document.querySelectorAll(".round").forEach(function(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
       document.querySelectorAll(".arrow").forEach(function(arrow){
           arrow.classList.toogle("bounceAlpha");
       });
    });
});