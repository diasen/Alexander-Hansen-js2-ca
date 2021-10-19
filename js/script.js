import writeHtmlToDom from './utils/writeHtmlToDom.js';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from './utils/localStorageUtils.js';

// async function getData() {
//   try {
//     const response = await fetch('http://localhost:1337/articles');
//     const data = await response.json();
//     const charactersElm = document.querySelector('.characters');
//     let characterHTML = '';

//     data.forEach((character) => {
//       characterHTML += `
//         <div class="col-sm-4">
//           <div class="card">
//             <img src="${character.img}" class="card-img-top" alt="">
//             <div class="card-body">
//               <h5 class="card-title">${character.nickname}</h5>
//               <p class="card-text">${character.birthday}</p>
//               <i class="far fa-heart" data-id="${character.char_id}" data-img="${character.img}" data-nickname="${character.nickname}" data-birthday="${character.birthday}"></i>
//             </div>
//           </div>
//         </div>
//       `;
//     });

//     writeHtmlToDom(charactersElm, characterHTML);

//     let hearts = document.querySelectorAll('.fa-heart');

//     hearts.forEach((singleHeart) => {
//       singleHeart.onclick = () => {
//         singleHeart.classList.toggle('fas');

//         let character = {
//           id: singleHeart.dataset.id,
//           img: singleHeart.dataset.img,
//           nickname: singleHeart.dataset.nickname,
//           birthday: singleHeart.dataset.birthday,
//         };

//         let favourites = getFromLocalStorage('favourites');

//         // find
//         let isInStorage = favourites.find((singleFavourite) => {
//           return singleFavourite.id === singleHeart.dataset.id;
//         });

//         if (isInStorage === undefined) {
//           favourites.push(character);
//           saveToLocalStorage('favourites', favourites);
//         } else {
//           // if the singleFavourite.id is the same as singleHeart.dataset.id do not add it to the array
//           let removedFavouritesArray = favourites.filter((singleFavourite) => {
//             return singleFavourite.id !== singleHeart.dataset.id;
//           });

//           saveToLocalStorage('favourites', removedFavouritesArray);
//         }
//       };
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();
