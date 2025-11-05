document.addEventListener("DOMContentLoaded", function() {
    const openButtons = document.querySelectorAll(".icon-arrow");
    const closeButtons = document.querySelectorAll("#close-container");

    openButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetElement = document.querySelector(`.open-close[data-id="${targetId}"]`)


            if(targetElement) {
                targetElement.style.display = "block";
                this.style.display = "none";

                }
            });
        })

        closeButtons.forEach(button => {
            button.addEventListener("click", function() {
                const targetId = this.getAttribute("data-target");
                const targetElement = document.querySelector(`.open-close[data-id="${targetId}"]`)
                const openButton = document.querySelector(`.icon-arrow[data-target="${targetId}"]`);

                if(targetElement) {
                    targetElement.style.display = "none";
                    openButton.style.display ="block";
                }

            }) 
        })
    })

