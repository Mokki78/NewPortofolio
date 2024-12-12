document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".icon-arrow");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");

            const targetElement = document.querySelector(`.open-close[data-id="${targetId}"]`);

            if(targetElement) {
                if(targetElement.style.display === "block") {
                    targetElement.style.display = "none";
                }else {
                    targetElement.style.display = "block";
                }
            }
        });
    });
});