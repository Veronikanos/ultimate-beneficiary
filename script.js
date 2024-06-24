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
  var currentRotation = 0; // Current angle of rotation
  var rotating = false; // State to manage rotation direction

  setInterval(function () {
    if (!rotating) {
      // Rotate to 90 degrees
      currentRotation = 90;
      image.style.transition = "transform 0.3s ease-in-out";
    } else {
      // Rotate back to 0 degrees
      currentRotation = 0;
      image.style.transition = "transform 0.3s ease-in-out";
    }
    // Apply the rotation
    image.style.transform =
      "translate(-50%, -50%) rotate(" + currentRotation + "deg)";
    rotating = !rotating; // Toggle rotation state
  }, 3000); // Change rotation every 3.3 seconds to include pause time

  // YOUTUBE VIDEO PLAYS
  var cover = document.getElementById("video-cover");
  var video = document.getElementById("video");

  cover.addEventListener("click", function () {
    cover.style.display = "none";
    video.style.display = "block";
    video.src += "?autoplay=1"; // Automatically start the video
  });
}

// SLIDER HERO

function initializeSwiper() {
  if (window.innerWidth < 1440) {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      // direction: "vertical",
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      // If we need pagination
      // pagination: {
      //   el: ".swiper-pagination",
      // },

      // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    });
  }

  const swiperTestimonials = new Swiper(".swiper-testimonials", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1440) {
    if (swiper !== undefined) swiper.destroy(true, true);
  } else {
    initializeSwiper();
  }
});

document.addEventListener(
  "DOMContentLoaded",
  changeHeroImage(),
  rotateLogo(),
  initializeSwiper()
);
