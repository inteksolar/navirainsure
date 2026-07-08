/* ==================================================
   MAIN SCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", function () {


  /* ==================================================
     ELEMENTS
  ================================================== */

  const menuBtn =
    document.getElementById("menuBtn");

  const navLinks =
    document.getElementById("navLinks");

  const menuOverlay =
    document.getElementById("menuOverlay");

  const menuIcon =
    menuBtn
      ? menuBtn.querySelector("i")
      : null;



  /* ==================================================
     MOBILE MENU
  ================================================== */

  function openMenu() {

    if (!navLinks) return;


    navLinks.classList.add("show");


    if (menuOverlay) {

      menuOverlay.classList.add("active");

    }


    document.body.classList.add("menu-open");


    if (menuIcon) {

      menuIcon.classList.remove("fa-bars");

      menuIcon.classList.add("fa-xmark");

    }

  }



  function closeMenu() {

    if (!navLinks) return;


    navLinks.classList.remove("show");


    if (menuOverlay) {

      menuOverlay.classList.remove("active");

    }


    document.body.classList.remove("menu-open");


    if (menuIcon) {

      menuIcon.classList.remove("fa-xmark");

      menuIcon.classList.add("fa-bars");

    }


    document
      .querySelectorAll(".nav-dropdown.active")
      .forEach(function (dropdown) {

        dropdown.classList.remove("active");

      });

  }



  function toggleMenu() {

    if (!navLinks) return;


    if (navLinks.classList.contains("show")) {

      closeMenu();

    } else {

      openMenu();

    }

  }



  if (menuBtn) {

    menuBtn.addEventListener(
      "click",
      toggleMenu
    );

  }



  if (menuOverlay) {

    menuOverlay.addEventListener(
      "click",
      closeMenu
    );

  }



  /* ==================================================
     MOBILE DROPDOWN
  ================================================== */

  const dropdownTitles =
    document.querySelectorAll(
      ".dropdown-title"
    );


  dropdownTitles.forEach(function (title) {


    title.addEventListener(
      "click",
      function () {


        if (window.innerWidth <= 768) {


          const currentDropdown =
            this.closest(".nav-dropdown");


          document
            .querySelectorAll(".nav-dropdown")
            .forEach(function (dropdown) {


              if (dropdown !== currentDropdown) {

                dropdown.classList.remove("active");

              }


            });


          currentDropdown.classList.toggle("active");


        }


      }
    );


  });



  /* ==================================================
     CLOSE MOBILE MENU ON LINK CLICK
  ================================================== */

  const navigationLinks =
    document.querySelectorAll(
      ".nav-links a"
    );


  navigationLinks.forEach(function (link) {


    link.addEventListener(
      "click",
      function () {


        if (window.innerWidth <= 768) {

          closeMenu();

        }


      }
    );


  });



  /* ==================================================
     WINDOW RESIZE RESET
  ================================================== */

  window.addEventListener(
    "resize",
    function () {


      if (window.innerWidth > 768) {

        closeMenu();

      }


    }
  );



  /* ==================================================
     QUOTE POPUP
  ================================================== */

  const quotePopup =
    document.getElementById("quotePopup");

  const openQuote =
    document.getElementById("openQuote");

  const heroQuoteBtn =
    document.getElementById("heroQuoteBtn");

  const closeQuote =
    document.getElementById("closeQuote");



  function showQuotePopup() {

    if (!quotePopup) return;


    quotePopup.classList.add("show");

    document.body.style.overflow = "hidden";

  }



  function hideQuotePopup() {

    if (!quotePopup) return;


    quotePopup.classList.remove("show");

    document.body.style.overflow = "";

  }



  if (openQuote) {

    openQuote.addEventListener(
      "click",
      showQuotePopup
    );

  }



  if (heroQuoteBtn) {

    heroQuoteBtn.addEventListener(
      "click",
      showQuotePopup
    );

  }



  if (closeQuote) {

    closeQuote.addEventListener(
      "click",
      hideQuotePopup
    );

  }



  if (quotePopup) {

    quotePopup.addEventListener(
      "click",
      function (event) {


        if (event.target === quotePopup) {

          hideQuotePopup();

        }


      }
    );

  }



  /* ==================================================
     ESCAPE KEY
  ================================================== */

  document.addEventListener(
    "keydown",
    function (event) {


      if (event.key === "Escape") {

        closeMenu();

        hideQuotePopup();

      }


    }
  );



  /* ==================================================
     QUOTE FORM
  ================================================== */

  const quoteForm =
    document.getElementById("quoteForm");


  if (quoteForm) {


    quoteForm.addEventListener(
      "submit",
      function (event) {


        event.preventDefault();


        alert(
          "Thank you! Your quote request has been received."
        );


        quoteForm.reset();

        hideQuotePopup();


      }
    );


  }


});
