document.querySelectorAll(".icon").forEach(function(icon) {
    icon.addEventListener("click", function(evt) {
        var target = evt.currentTarget;

        if(target.classList.contains("ham")) {
            target.classList.remove("ham");
            target.classList.add("close");
        } else {
            target.classList.remove("close");
            target.classList.add("ham");
        }
    });


    icon.addEventListener("mouseenter", function handleMouseEnter(evt)  {
        evt.currentTarget.classList.add("first-hover");
        icon.removeEventListener("mouseenter", handleMouseEnter)
    });
});