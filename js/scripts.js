const hb = document.querySelector('#hamburgerButt');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

import {hotels} from './data.js';

const hotelCards = document.querySelector('#cards');

hotels.forEach(hotel => {
    const mySection = document.createElement('section');

    const image = document.createElement('img');
    image.src = hotel.photo;
    image.alt = hotel.name;

    const name = document.createElement('h2');
    name.textContent = hotel.name;

    const address = document.createElement('address');
    address.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}<br>`;

    const phone = document.createElement('a');
    phone.textContent = hotel.phone;
    phone.href = `tel:${hotel.phone}`;

    mySection.appendChild(image);
    mySection.appendChild(name);
    mySection.appendChild(address);
    mySection.appendChild(phone);
    hotelCards.appendChild(mySection);
});
