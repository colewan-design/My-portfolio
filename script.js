var image = document.querySelector("#work img");
var popup = document.querySelector("#popup");
var closeButton = document.querySelector("#close-button");

image.addEventListener("click", function() {
  popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});


var modal = document.querySelector("#image-modal");
var modalImage = modal.querySelector(".modal-image");
var prevButton = modal.querySelector("#prev-button");
var nextButton = modal.querySelector("#next-button");
var closeButton = modal.querySelector(".close-button");
var caption = modal.querySelector("#caption");

var thumbnails = document.querySelectorAll(".thumbnail");
var images = ["landing page.png", "landing page.png", "index page.png"]; // array of image file names
var index = 0; // index of current image

function showImage(i) {
  modalImage.src = images[i];
  modalImage.alt = "Project 1 - Image " + (i + 1);
  caption.innerHTML = modalImage.alt;
}

function openModal() {
  modal.style.display = "block";
  showImage(index);
}

function closeModal() {
  modal.style.display = "none";
}

prevButton.addEventListener("click", function() {
  index--;
  if (index < 0) index = images.length - 1;
  showImage(index);
});

nextButton.addEventListener("click", function() {
  index++;
  if (index >= images.length) index = 0;
  showImage(index);
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", function(event) {
  if (event.target === modal) closeModal();
});

for (var i = 0; i < thumbnails.length; i++) {
    (function(i) {
      thumbnails[i].addEventListener("click", function() {
        index = i;
        openModal();
      });
    })(i);
  }
