function changeHeroImage() {
  var image1 = document.getElementById("image1");
  var image2 = document.getElementById("image2");
  var isImage1Active = true;

  setInterval(function () {
    if (isImage1Active) {
      image1.classList.remove("active");
      image2.classList.add("active");
    } else {
      image2.classList.remove("active");
      image1.classList.add("active");
    }
    isImage1Active = !isImage1Active;
  }, 3000); // змінює зображення кожні 3 секунди
}

function rotateLogo() {
  var image = document.getElementById("rotatedLogo");
  var rotationDirection = 1; // Напрямок обертання: 1 - вправо, -1 - вліво
  var rotationAngle = 90; // Кут обертання
  var currentRotation = 0; // Поточний кут обертання

  setInterval(function () {
    // Зміна напрямку обертання
    rotationDirection *= -1;
    // Обчислення нового кута обертання
    var newRotation = currentRotation + rotationDirection * rotationAngle;
    // Застосування обертання до зображення
    image.style.transform = "rotate(" + newRotation + "deg)";
    // Оновлення поточного кута обертання
    currentRotation = newRotation;
  }, 3000); // змінює кут обертання кожні 3 секунди

  // YOUTUBE VIDEO PLAYS
  var cover = document.getElementById("video-cover");
  var video = document.getElementById("video");

  cover.addEventListener("click", function () {
    cover.style.display = "none";
    video.style.display = "block";
    video.src += "?autoplay=1"; // Automatically start the video
  });
}

document.addEventListener("DOMContentLoaded", changeHeroImage(), rotateLogo());
