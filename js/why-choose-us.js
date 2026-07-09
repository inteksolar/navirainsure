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
   CLOSE MOBILE MENU AFTER CLICK
======================================== */

document
  .querySelectorAll(".nav-links a")
  .forEach(function (link) {


    link.addEventListener(
      "click",
      function () {


        navLinks.classList.remove("show");


        const icon =
          menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

      }
    );

  });
