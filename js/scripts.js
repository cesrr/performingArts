const hb = document.querySelector('#hamburgerButt');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
});

console.log(pn);
