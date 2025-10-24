document.getElementsByClassName("proto-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default link behavior
    window.open(this.href, "_blank");
});