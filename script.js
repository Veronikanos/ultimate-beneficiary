let heroSwiper = null;
let testimonialsSwiper = null;

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
  if (!heroSwiper && window.innerWidth < 1280) {
    // console.log("Initializing hero Swiper");
    heroSwiper = new Swiper(".swiper-hero", {
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
  if (!testimonialsSwiper && window.innerWidth < 1280) {
    // console.log("Initializing testimonials Swiper");
    testimonialsSwiper = new Swiper(".swiper-testimonials", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

function destroySwipers() {
  if (heroSwiper && window.innerWidth >= 1280) {
    if (heroSwiper) {
      // console.log("Destroying hero Swiper");
      heroSwiper.destroy(true, true);
      heroSwiper = null;
    }
    if (testimonialsSwiper && testimonialsSwiper) {
      console.log("Destroying testimonials Swiper");
      testimonialsSwiper.destroy(true, true);
      testimonialsSwiper = null;
    }
  }
}

window.addEventListener("resize", function () {
  // console.log("Resizing window: ", window.innerWidth);

  if (window.innerWidth < 1280) {
    initializeHeroSwiper();
    initializeTestimonialsSwiper();
  } else destroySwipers();
});

document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM content loaded");

  changeHeroImage();
  rotateLogo();
  if (window.innerWidth < 1280) {
    console.log(" window: ", window.innerWidth);
    initializeHeroSwiper();
    initializeTestimonialsSwiper();
  }
});
