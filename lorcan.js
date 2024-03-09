$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "Founder",
        "Author"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "Founder",
        "Author"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });



 src="https://smtpjs.com/v3/smtp.js"

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    function sendEmail() {
        const ebody = `
            <b>First Name:</b> ${name.value}<br>
            <b>Email:</b> ${email.value}<br>
            <b>subject:</b> ${subject.value}<br>
            <b>Message:</b> ${message.value}<br>
        `;
        Email.send({
            SecureToken: "b68a337e-46ae-4721-954e-debfc40fca64",
            To: 'mcdochvk@gmail.com',
            From: "mcdochvk@gmail.com",
            Subject: "Enqoiry",
            Body: ebody,
        }).then(
            message => alert(message)
        );
    }
    function resetForm() {
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }

    function downloadImage() {
        const imageSource = document.getElementById('downloadImage').src;
        const anchor = document.createElement('a');
  
        anchor.href = imageSource;
        anchor.download = 'downloaded-image.jpg';
  
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }


