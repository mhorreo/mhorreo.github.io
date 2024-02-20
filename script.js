document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.toggler');
  const navMenu = document.querySelector('.nav-links');
  const responsiveLinks = document.querySelector('.responsive-links');

  toggler.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    responsiveLinks.style.display = (responsiveLinks.style.display === 'flex') ? 'none' : 'flex';
  });

  // Evitamos que el clic en el botón propague el evento y cierre el menú
  toggler.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Agregamos un listener para cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    if (!event.target.matches('.toggler') && !event.target.closest('.nav-links') && !event.target.matches('.responsive-links')) {
      navMenu.classList.remove('active');
      responsiveLinks.style.display = 'none';
    }
  });

  // Agregamos un event listener para cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    const navMenu = document.querySelector('.nav-links');
    const responsiveLinks = document.querySelector('.responsive-links');

    if (!event.target.matches('.toggler') && !event.target.closest('.nav-links') && !event.target.matches('.responsive-links')) {
      navMenu.classList.remove('active');
      responsiveLinks.style.display = 'none';
    }
  });

  // Cerramos el menú cuando se carga la página
  navMenu.classList.remove('active');
  responsiveLinks.style.display = 'none';
});


/*
const openMenuBtn = document.querySelector('#openMenuBtn');
const closeMenuBtn = document.querySelector('#closeMenuBtn');
const menu = document.querySelector('#menu');

openMenuBtn.addEventListener('click', () => {
  handleViewTransition(openMenu);
});

closeMenuBtn.addEventListener('click', () => {
  handleViewTransition(closeMenu);
});

// Close menu by Press Escape(ESC)
function handleCloseWithESC(e) {
  if (e.key == 'Escape') {
    handleViewTransition(closeMenu);
  }
}

function openMenu() {
  menu.classList.add('open');
  closeMenuBtn.focus();
  window.addEventListener('keyup', handleCloseWithESC);
}

function closeMenu() {
  menu.classList.remove('open');
  openMenuBtn.focus();
  window.removeEventListener('keyup', handleCloseWithESC);
}
*/


//https://api.whatsapp.com/send?phone= ----> implementacion was


/*
inspiration
https://cz.pinterest.com/pin/830703093792161391/
*/
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

swiper.slideTo(1, false, false);