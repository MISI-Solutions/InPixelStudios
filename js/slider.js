const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const currentImage = document.querySelector(".current-image");
const images = document.querySelectorAll(".image");
let currentImageId = 1;

arrowLeft.addEventListener("click", function() {
   if(currentImageId === 1) {
       currentImageId = 5;
   } else {
       currentImageId--;
   }

    refresh();
});

arrowRight.addEventListener("click", function() {
   if(currentImageId === 5) {
       currentImageId = 1;
   } else {
       currentImageId++;
   }

   refresh();
});

function refresh() {
    // Change active image in gallery
    images.forEach(function(item) {
        if(item.classList.contains(currentImageId)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Change main image
    switch(currentImageId) {
        case 1:
            currentImage.classList.add("img1");
            currentImage.classList.remove("img2");
            currentImage.classList.remove("img3");
            currentImage.classList.remove("img4")
            currentImage.classList.remove("img5");
            break;
        case 2:
            currentImage.classList.remove("img1");
            currentImage.classList.add("img2");
            currentImage.classList.remove("img3");
            currentImage.classList.remove("img4")
            currentImage.classList.remove("img5");
            break;
        case 3:
            currentImage.classList.remove("img1");
            currentImage.classList.remove("img2");
            currentImage.classList.add("img3");
            currentImage.classList.remove("img4")
            currentImage.classList.remove("img5");
            break;
        case 4:
            currentImage.classList.remove("img1");
            currentImage.classList.remove("img2");
            currentImage.classList.remove("img3");
            currentImage.classList.add("img4")
            currentImage.classList.remove("img5");
            break;
        case 5:
            currentImage.classList.remove("img1");
            currentImage.classList.remove("img2");
            currentImage.classList.remove("img3");
            currentImage.classList.remove("img4")
            currentImage.classList.add("img5");
            break;
    }
}