/* ========================================
   MOBILE MENU
======================================== */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

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

});



/* Close menu after clicking link */

document
  .querySelectorAll(".nav-links a")
  .forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("show");

      const icon =
        menuBtn.querySelector("i");

      icon.classList.remove("fa-xmark");

      icon.classList.add("fa-bars");

    });

  });



/* ========================================
   CONTACT FORM TO WHATSAPP
======================================== */

const enquiryForm =
  document.getElementById("enquiryForm");


enquiryForm.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    const name =
      document
        .getElementById("fullName")
        .value
        .trim();


    const mobile =
      document
        .getElementById("mobile")
        .value
        .trim();


    const insuranceType =
      document
        .getElementById("insuranceType")
        .value;


    const message =
      document
        .getElementById("message")
        .value
        .trim();



    /* Mobile Validation */

    const mobilePattern = /^[6-9][0-9]{9}$/;


    if (!mobilePattern.test(mobile)) {

      alert(
        "Please enter a valid 10-digit mobile number."
      );

      return;

    }



    /* WhatsApp Message */

    const whatsappMessage =

`Hello Navira Insurance Services,

I would like to get an insurance quote.

Name: ${name}
Mobile: ${mobile}
Insurance Type: ${insuranceType}
Message: ${message || "Not provided"}

Please contact me with more information.

Thank you.`;


    const whatsappURL =

      "https://wa.me/919099578771?text="

      +

      encodeURIComponent(
        whatsappMessage
      );


    window.open(
      whatsappURL,
      "_blank"
    );

  }
);
