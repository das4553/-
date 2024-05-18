const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function loadSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  loadSlides();
}

function goToPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide -= 1;
  }
  loadSlides();
}

loadSlides();

sliderIntervalId = setInterval(goToNextSlide, 5000);

{
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
    counters.forEach((counter) => {
      let initial_count = 0;
      const final_count = counter.dataset.count;
      const counting = setInterval(() => {
        initial_count++;
        counter.innerText = `(${initial_count} % )`;
        if (initial_count >= final_count) {
          clearInterval(counting);
        }
      }, 20);
    });
  });

  const hiddenElements = document.querySelectorAll(".div-02");
  const counters = document.querySelectorAll(".counter");

  hiddenElements.forEach((el) => observer.observe(el));
}
const slides2 = document.querySelectorAll(".slide-2");
const sliderBtns = document.querySelectorAll(".Slidebtn");

let currentSlide2 = 0;

function loadSlides2() {
  slides2.forEach((slide, index) => {
    if (index === currentSlide2) {
      slide.classList.add("active2");
    } else {
      slide.classList.remove("active2");
    }
  });

  sliderBtns.forEach((btn, index) => {
    if (index === currentSlide2) {
      btn.classList.add("active2");
    } else {
      btn.classList.remove("active2");
    }
  });
}

function goToNextSlide2() {
  if (currentSlide2 === slides2.length - 1) {
    currentSlide2 = 0;
  } else {
    currentSlide2 += 1;
  }
  loadSlides2();
}

function goToPrevSlide2() {
  if (currentSlide2 === 0) {
    currentSlide2 = slides2.length - 1;
  } else {
    currentSlide2 -= 1;
  }
  loadSlides2();
}

loadSlides2();

sliderBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    currentSlide2 = index;
    loadSlides2();
  });
});

const fillterButtons = document.querySelectorAll(".category button");
const fillterCards = document.querySelectorAll(".show-projects .Projects");

const fillterCard = (e) => {
  document.querySelector(".active3").classList.remove("active3");
  e.target.classList.add("active3");

  fillterCards.forEach((Projects) => {
    Projects.classList.add("hide");
    if (
      Projects.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      Projects.classList.remove("hide");
    }
  });
};

fillterButtons.forEach((button) =>
  button.addEventListener("click", fillterCard)
);

//
// let form = document.getElementById("form");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   let formData = new FormData(form);
//   for (let item of formData) {
//     console.log(item[0], item[1]);
//   }

//   try {
//     const response = await fetch(
//       "https://borjomi.loremipsum.ge/api/send-message",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// });
