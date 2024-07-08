let heroSwiper = null;
let testimonialsSwiper = null;

function toggleMobileMenu() {
  const menuButton = document.querySelector("#navMenuButton");
  const mobileMenu = document.querySelector("#navMenu");
  const menuLinks = mobileMenu.querySelectorAll("a");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });
}

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
  }, 3000);
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
  // if (!testimonialsSwiper && window.innerWidth < 1280) {
  // console.log("Initializing testimonials Swiper");
  testimonialsSwiper = new Swiper(".swiper-testimonials", {
    loop: true,
    // effect: "cards",
    // autoplay: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // }
}
function initializeFlipSwiper() {
  //  console.log("Initializing flip Swiper");
  flipSwiper = new Swiper(".swiper-flip", {
    effect: "flip",
    cssMode: true,
  });
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

function initScrollToTopBtn() {
  // Get the button
  let mybutton = document.getElementById("scrollToTopBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

window.addEventListener("resize", function () {
  // console.log("Resizing window: ", window.innerWidth);

  if (window.innerWidth < 1280) {
    initializeHeroSwiper();
    initializeTestimonialsSwiper();
  } else destroySwipers();
});

function modal() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openModalBtn");
  var span = document.getElementsByClassName("close")[0];
  console.log("SOMETHING WORKS!!");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const telephone = document.getElementById("telephone").value;
      const comment = document.getElementById("comment").value;

      const token = "7412078159:AAHGL2DD3HiwJFxeomF5eQ63kWhrCRQ0-XA";
      const chatId = "-1002150953194";
      const message = `Ім'я: ${name}\nТелефон: ${telephone}\nКоментар: ${comment}`;

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;

      fetch(url)
        .then((response) => {
          if (response.ok) {
            alert("Message sent successfully!");
            modal.style.display = "none";
          } else {
            alert("Failed to send message.");
          }
        })
        .catch((error) => {
          alert("Error occurred: " + error.message);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM content loaded");
  toggleMobileMenu();
  changeHeroImage();
  // initializeFlipSwiper();
  rotateLogo();
  initScrollToTopBtn();
  modal();
  if (window.innerWidth < 1280) {
    console.log(" window: ", window.innerWidth);
    initializeHeroSwiper();
    initializeTestimonialsSwiper();
  }
});
