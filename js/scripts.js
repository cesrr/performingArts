const hb = document.querySelector('#hamburgerButt');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
});

console.log(pn);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 1000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //autoplay
    autoplay: {
        delay: 5000,
    }
  });