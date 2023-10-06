//navigation menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById('hamburger');

x.onclick = toggleMenu;

//reviews
import { reviews } from './data.js';

const reviewContainer = document.querySelector('#revCards');

for (let i = 0; i < reviews.length; i++) {
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let stars = document.createElement('section');
    let text = document.createElement('p');
 


    for (let j = 0; j < reviews[i].stars; j++) {
        const starIndicator = document.createElement('img');
        starIndicator.src = "../images/star.png";
        stars.appendChild(starIndicator);

    }

    name.textContent = reviews[i].name;
    text.textContent = reviews[i].text;

    card.appendChild(name);
    card.appendChild(stars);
    card.appendChild(text);

    reviewContainer.appendChild(card);
}