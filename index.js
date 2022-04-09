const description = document.querySelectorAll(".desc-box");
const menuList = document.querySelector(".services-list");

menuList.addEventListener("click", (event) => {
  description.forEach((elem) => {
    if (event.target.dataset.desc === elem.dataset.desc) {
      elem.style.display = "grid";
    } else elem.style.display = "none";
  });

  const activeTab = document.querySelector(".active");
  const arrow = document.querySelector(".arrow-img-active");
  if (activeTab && arrow) {
    activeTab.classList.remove("active");
    arrow.classList.remove("arrow-img-active");
  }
  event.target.classList.add("active");
  event.target.firstElementChild.classList.add("arrow-img-active");
});

const loadMoreBtn = document.querySelector(".load-more-btn");

loadMoreBtn.addEventListener("click", (event) => {
  const hiddenImg = document.querySelectorAll(".hidden-work-img");
  const loader = document.querySelector(".loader");
  event.target.style.display = "none";

  loader.style.display = "block";
  setTimeout(() => {
    hiddenImg.forEach((elem) => {
      loader.style.display = "none";
      elem.style.display = "inline-block";
    });
  }, 2000);
});

const workMenuItem = document.querySelector(".work-list");
const workImg = document.querySelectorAll(".work-img-box");
const workAtciveImg = document.querySelectorAll(".active-work-img");

workMenuItem.addEventListener("click", (event) => {
  workImg.forEach((elem) => {
    if (event.target.dataset.work === elem.dataset.work) {
      elem.style.display = "inline-block";
      loadMoreBtn.style.display = "none";
    } else elem.style.display = "none";

    workAtciveImg.forEach((e) => {
      if (event.target.dataset.work === "all") {
        e.style.display = "inline-block";
        loadMoreBtn.style.display = "flex";
      }
      loadMoreBtn.addEventListener("click", (e) => {
        e.target.style.display = "none";
      });
    });
  });

  const activeTab = document.querySelector(".active-block");
  if (activeTab) {
    activeTab.classList.remove("active-block");
  }
  event.target.classList.add("active-block");
});

const switchBox = document.querySelector(".switch-box");
const selectedBox = document.querySelectorAll(".selected-man-box");
const miniImgBox = document.querySelectorAll(".mini-img-box");

const leftBtn = document.querySelector(".left-arrow-switch");
const rightBtn = document.querySelector(".right-arrow-switch");
const arrOfMiniBoxes = [...miniImgBox];

switchBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("right-arrow-switch")) {
    for (let i = 0; i < arrOfMiniBoxes.length; i++) {
      if (arrOfMiniBoxes[i].classList.contains("mini-img-box-active")) {
        arrOfMiniBoxes[i].classList.remove("mini-img-box-active");
        if ([i + 1] == arrOfMiniBoxes.length) {
          arrOfMiniBoxes[0].classList.add("mini-img-box-active");
          selectedBox.forEach((e) => {
            if (arrOfMiniBoxes[0].dataset.human === e.dataset.human) {
              e.classList.add("selected-man-box-active");
            } else e.classList.remove("selected-man-box-active");
          });
        } else {
          arrOfMiniBoxes[i + 1].classList.add("mini-img-box-active");
          selectedBox.forEach((e) => {
            if (arrOfMiniBoxes[i + 1].dataset.human === e.dataset.human) {
              e.classList.add("selected-man-box-active");
            } else e.classList.remove("selected-man-box-active");
          });
        }
        return;
      }
    }
  }

  if (event.target.classList.contains("left-arrow-switch")) {
    for (let i = 0; i < arrOfMiniBoxes.length; i++) {
      if (arrOfMiniBoxes[i].classList.contains("mini-img-box-active")) {
        arrOfMiniBoxes[i].classList.remove("mini-img-box-active");
        if (i === 0) {
          arrOfMiniBoxes[arrOfMiniBoxes.length - 1].classList.add(
            "mini-img-box-active"
          );
          selectedBox.forEach((e) => {
            if (
              arrOfMiniBoxes[arrOfMiniBoxes.length - 1].dataset.human ===
              e.dataset.human
            ) {
              e.classList.add("selected-man-box-active");
            } else e.classList.remove("selected-man-box-active");
          });
        } else {
          arrOfMiniBoxes[i - 1].classList.add("mini-img-box-active");
          selectedBox.forEach((e) => {
            if (arrOfMiniBoxes[i - 1].dataset.human === e.dataset.human) {
              e.classList.add("selected-man-box-active");
            } else e.classList.remove("selected-man-box-active");
          });
        }
        return;
      }
    }
  }

  if (event.target.parentElement.classList.contains("mini-img-box")) {
    const activeBox = document.querySelector(".mini-img-box-active");
    if (activeBox) {
      activeBox.classList.remove("mini-img-box-active");
    }
    event.target.parentElement.classList.add("mini-img-box-active");

    selectedBox.forEach((contentBox) => {
      if (
        event.target.parentElement.dataset.human === contentBox.dataset.human
      ) {
        contentBox.classList.add("selected-man-box-active");
      } else {
        contentBox.classList.remove("selected-man-box-active");
      }
    });
  }
});
