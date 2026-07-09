/* MOBILE MENU */

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


      if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

      } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

      }

    }
  );

}



/* INSURANCE DROPDOWN */

const insuranceDropdown =
  document.getElementById(
    "insuranceDropdown"
  );

const navDropdown =
  document.querySelector(
    ".nav-dropdown"
  );


if (insuranceDropdown && navDropdown) {

  insuranceDropdown.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      navDropdown.classList.toggle(
        "open"
      );

    }
  );

}



/* CLOSE MOBILE MENU AFTER LINK CLICK */

const navItems =
  document.querySelectorAll(
    ".nav-links > a"
  );


navItems.forEach(function (link) {

  link.addEventListener(
    "click",
    function () {

      if (navLinks) {

        navLinks.classList.remove(
          "show"
        );

      }

    }
  );

});
