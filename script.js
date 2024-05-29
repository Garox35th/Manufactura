document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#e65c00";
    });
    ctaButton.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#ff6600";
    });
});