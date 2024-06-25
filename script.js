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
  // // YOUTUBE VIDEO PLAYS
  // var cover = document.getElementById("video-cover");
  // var video = document.getElementById("video");
  // cover.addEventListener("click", function () {
  //   cover.style.display = "none";
  //   video.style.display = "block";
  //   video.src += "?autoplay=1"; // Automatically start the video
  // });

  const compass = document.getElementById("rotatedLogo");
  let currentRotation = 0;
  let rotating = false;

  setInterval(() => {
    rotating = !rotating;
    currentRotation = rotating ? 90 : 0;
    compass.style.transition = "transform 0.3s ease-in-out";
    compass.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;
  }, 3300);
}

// SLIDER HERO

function initializeHeroSwiper() {
  if (window.innerWidth < 1440) {
    new Swiper(".swiper-hero", {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }
}

function initializeTestimonialsSwiper() {
  new Swiper(".swiper-testimonials", {
    direction: "vertical",
    loop: true,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1440) {
    if (swiper !== undefined) swiper.destroy(true, true);
  } else {
    initializeSwiper();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  changeHeroImage(),
    rotateLogo(),
    initializeHeroSwiper(),
    initializeTestimonialsSwiper();
});
