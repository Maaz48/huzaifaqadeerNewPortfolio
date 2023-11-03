const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

/////////////////////// IMAGE CERTIFICATION //////////////////////

// var certificateImages = document.getElementsByClassName("certificate-image");
// var rightIconCertificate = document.getElementById("right-icon-certificate");
// var leftIconCertificate = document.getElementById("left-icon-certificate");
// var slidesMainContainer = document.getElementById("slides-main-container");
// let slideCount = 0;

// //////////////////////// MOVE FORWARD //////////////////
// rightIconCertificate.addEventListener("click", () => {
//   slideCount++;
//   if (slideCount >= certificateImages.length) {
//     slideCount = 0;
//     slidesMainContainer.style.transform = `translate(${
//       window.innerWidth < 400 ? 0 : 250
//     }px)`;
//     certificateImages[0].classList.add("active-certificate");
//   } else {
//     for (var i = 0; i < certificateImages.length; i++) {
//       certificateImages[i].classList.remove("active-certificate");
//       slidesMainContainer.style.transform = `translate(-${
//         certificateImages[slideCount].offsetLeft -
//         (window.innerWidth < 400 ? 120 : 500)
//       }px)`;
//     }
//     certificateImages[slideCount].classList.add("active-certificate");
//   }
// });
// //////////////////////// MOVE BACKWARD //////////////////
// leftIconCertificate.addEventListener("click", () => {
//   slideCount--;
//   if (slideCount < 0) {
//     slideCount = certificateImages.length - 1;
//     slidesMainContainer.style.transform = `translate(${
//       -certificateImages[slideCount].offsetLeft + 120
//     }px)`;
//     certificateImages[slideCount].classList.add("active-certificate");
//   } else {
//     for (var i = 0; i < certificateImages.length; i++) {
//       certificateImages[i].classList.remove("active-certificate");
//       slidesMainContainer.style.transform = `translate(${
//         slideCount !== 0
//           ? -(
//               certificateImages[slideCount].offsetLeft -
//               (window.innerWidth < 400 ? 320 : 550) +
//               300
//             )
//           : window.innerWidth < 400
//           ? 0
//           : 250
//       }px)`;
//     }
//     certificateImages[slideCount].classList.add("active-certificate");
//   }
// });

var certificateImages = document.getElementsByClassName("certificate-image");
var rightIconCertificate = document.getElementById("right-icon-certificate");
var leftIconCertificate = document.getElementById("left-icon-certificate");
var slidesMainContainer = document.getElementById("slides-main-container");
let slideCount = 0;

rightIconCertificate.addEventListener("click", () => {
  navigateSlide(1);
  function navigateSlide(direction) {
    slideCount += direction;

    if (slideCount < 0) {
      slideCount = certificateImages.length - 1;
    } else if (slideCount >= certificateImages.length) {
      slideCount = 0;
    }

    for (var i = 0; i < certificateImages.length; i++) {
      certificateImages[i].classList.remove("active-certificate");
    }

    var imageWidth = certificateImages[slideCount].offsetWidth;
    var containerWidth = slidesMainContainer.offsetWidth;
    var offset = (containerWidth - imageWidth) / 2;

    slidesMainContainer.style.transform = `translate(-${
      slideCount == 0
        ? 0
        : certificateImages[slideCount].offsetLeft -
          offset -
          (window.innerWidth < 400 ? 50 : 150)
    }px)`;

    certificateImages[slideCount].classList.add("active-certificate");
  }
});

leftIconCertificate.addEventListener("click", () => {
  navigateSlide(-1);
  function navigateSlide(direction) {
    slideCount += direction;

    if (slideCount < 0) {
      slideCount = certificateImages.length - 1;
    } else if (slideCount >= certificateImages.length) {
      slideCount = 0;
    }

    for (var i = 0; i < certificateImages.length; i++) {
      certificateImages[i].classList.remove("active-certificate");
    }

    var imageWidth = certificateImages[slideCount].offsetWidth;
    var containerWidth = slidesMainContainer.offsetWidth;
    var offset = (containerWidth - imageWidth) / 2;

    slidesMainContainer.style.transform = `translate(-${
      slideCount == 0
        ? 0
        : certificateImages[slideCount].offsetLeft -
          (window.innerWidth < 400
            ? slideCount == certificateImages.length - 1
              ? 120
              : 20
            : slideCount == certificateImages.length - 1
            ? 500
            : 300)
    }px)`;

    certificateImages[slideCount].classList.add("active-certificate");
  }
});

// function navigateSlide(direction) {
//   slideCount += direction;

//   if (slideCount < 0) {
//     slideCount = certificateImages.length - 1;
//   } else if (slideCount >= certificateImages.length) {
//     slideCount = 0;
//   }

//   for (var i = 0; i < certificateImages.length; i++) {
//     certificateImages[i].classList.remove("active-certificate");
//   }

//   var imageWidth = certificateImages[slideCount].offsetWidth;
//   var containerWidth = slidesMainContainer.offsetWidth;
//   var offset = (containerWidth - imageWidth) / 2;

//   slidesMainContainer.style.transform = `translate(-${
//     slideCount == 0
//       ? 0
//       : certificateImages[slideCount].offsetLeft -
//         offset -
//         (window.innerWidth < 400 ? 50 : 150)
//   }px)`;

//   certificateImages[slideCount].classList.add("active-certificate");
// }
