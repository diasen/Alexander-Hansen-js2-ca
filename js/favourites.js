import {
  saveToLocalStorage,
  getFromLocalStorage,
} from './utils/localStorageUtils.js';

let favourites = getFromLocalStorage('favourites');
console.log(favourites);

let favouriteCards = document.querySelector('.favouriteCards');

favourites.forEach(({ id, title, summary, author }) => {
  favouriteCards.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${author}</h6>
                    <p class="card-text">${summary}</p>
                    <div>
                        <a href="#" class="card-link">Read more</a>
                        <i class="far fa-heart" data-id="${id}" data-author="${author}" data-title="${title}" data-summary="${summary}"></i>
                    </div>  
                </div>
            </div>
`;
});
