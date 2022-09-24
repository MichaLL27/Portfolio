"string";

const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".control");
const secBtnsContainer = document.querySelectorAll(".controlls");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  for (let i = 0; i < secBtns.length; i++) {
    secBtns[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += "  active-btn";
    });
  }

  //Section active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toogle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();
