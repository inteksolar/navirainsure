/* ========================================
   MOBILE MENU
======================================== */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");


if (menuBtn && navLinks) {

  menuBtn.addEventListener(
    "click",
    function () {

      navLinks.classList.toggle("show");

      const icon =
        menuBtn.querySelector("i");


      if (
        navLinks.classList.contains("show")
      ) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

      }

      else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

      }

    }
  );

}



/* ========================================
   INSURANCE DROPDOWN
======================================== */

const insuranceDropdown =
  document.getElementById("insuranceDropdown");

const navDropdown =
  document.querySelector(".nav-dropdown");


if (insuranceDropdown && navDropdown) {

  insuranceDropdown.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      navDropdown.classList.toggle("open");

    }
  );

}



/* ========================================
   FAQ ACCORDION
======================================== */

const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

  const question =
    item.querySelector(".faq-question");


  question.addEventListener(
    "click",
    function () {


      const isActive =
        item.classList.contains("active");


      faqItems.forEach(function (faq) {

        faq.classList.remove("active");


        const icon =
          faq.querySelector(
            ".faq-question i"
          );


        icon.classList.remove("fa-minus");

        icon.classList.add("fa-plus");

      });


      if (!isActive) {

        item.classList.add("active");


        const icon =
          question.querySelector("i");


        icon.classList.remove("fa-plus");

        icon.classList.add("fa-minus");

      }

    }
  );

});
