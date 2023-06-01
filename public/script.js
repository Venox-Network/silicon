const mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//--------------------------------------------------------------

const navbar = document.getElementById('navbar');
let lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;
  const middleLogo = document.querySelector('.desMid');
  
  if (currentScrollPosition > 50) {
    // Scrolling down
    navbar.classList.add('fixed');
    middleLogo.style.visibility = "visible";
  } else {
    // Scrolling up
    navbar.classList.remove('fixed');
    middleLogo.style.visibility = "hidden";
  }
  
  lastScrollPosition = currentScrollPosition;
});

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;
  
  if (currentScrollPosition > 50) {
    // Scrolling down
    nav.classList.add('fixed');
  } else {
    // Scrolling up
    nav.classList.remove('fixed');
  }
  
  lastScrollPosition = currentScrollPosition;
});