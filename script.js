document.addEventListener("DOMContentLoaded", function() {
    filterSelection("all"); // Show all images by default
});

function filterSelection(category) {
    const galleryItems = document.getElementsByClassName("gallery-item");

    if (category === "all") {
        category = "";
    }

    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove("show");
        if (galleryItems[i].className.indexOf(category) > -1) {
            galleryItems[i].classList.add("show");
        }
    }
}
