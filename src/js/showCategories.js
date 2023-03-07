import { markupCategories, markupNameButton } from './markupCategoriesFilter.js';
import { cardMarkup } from './cardMarkup.js';

const categoriesList = document.querySelector('.buttons-list');
const categoriesBtn = document.querySelector('#btn-open-category');
const categoriesMenu = document.querySelector('.category__menu');
const arrowBtnCategories = document.querySelector('.arrow-icon');

markupCategories(categoriesMenu);
markupNameButton();

categoriesList.addEventListener('click', onSearchNewsBtn);
categoriesBtn.addEventListener('click', onToggleCategoriesMenu);
categoriesMenu.addEventListener('click', onSearchNewsMenu);

function onToggleCategoriesMenu() {
    const isMenuOpen = 
        categoriesBtn.getAttribute('aria-expanded') === 'true' || false;
    categoriesBtn.setAttribute('aria-expanded', !isMenuOpen);
    categoriesMenu.classList.toggle('is-open-categories');
    if (categoriesMenu.classList.contains('is-open-categories')) {
        arrowBtnCategories.classList.add('open-categories');
    }
    if (!categoriesMenu.classList.contains('is-open-categories')) {
        arrowBtnCategories.classList.remove('open-categories');
        categoriesBtn.blur();
    }
};

window.onclick = event => {
  if (!event.target.matches('.category__btn')) {
    if (!event.target.matches('.btn-item')) {
      if (categoriesMenu.classList.contains('is-open-categories')) {
        categoriesMenu.classList.remove('is-open-categories');
      }
    }
  }
  if (!event.target.matches('.category__btn')) {
    if (arrowBtnCategories.classList.contains('open-categories')) {
      arrowBtnCategories.classList.remove('open-categories');
    }
  }
};

function onSearchNewsBtn(event) {
  const currentButtonCategory = event.target.dataset.btn;
  // cardMarkup(currentButtonCategory);
};

function onSearchNewsMenu(event) {
  const currentButtonCategory = event.target.dataset.btn;
  const currentButtonValue = event.target.innerText;
  // cardMarkup(currentButtonCategory);
 

  markupNameButton(decodeURIComponent(currentButtonValue));
  categoriesMenu.classList.remove('is-open-categories');

  arrowBtnCategories.classList.add('open-categories');
  categoriesBtn.focus();
}

// const apiKey = '3HHtrx1v9QZUfdmskYGXIqIWRgxdBdcv';
// const url = https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}

// async function fetchNYTData() {
//   const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`);
//   const data = await response.json();
//   if (data.status === 'OK') {
//    const articles = data.results;
//    return articles;
//   } else {
//     throw new Error(error.message);
//   }
// }

// async function getMostPopularArticles() {
//  const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`);
//  const data = await response.json();
//  const { results } = data;
//  const resultArticles = []

//  // console.log(results)

//  const articles = results.map(({ title, url, published_date, abstract, section, id }) => {

//   const article = {
//   headline: title,
//       web_url: url, 
//       pub_date: published_date,
//       lead_paragraph: abstract,
//       news_desk: section, 
//       // bigMobileImg: url,
//       // smallMobileImg: url,
//       // smallSquareImg: url,
//       // bigSquareImg: url,
//       id: id
//   }

//   resultArticles.push(article);
//   } ); 
//    // console.log(resultArticles);
//  return resultArticles;

// }

// // getMostPopularArticles()

// getMostPopularArticles().then(res => {
//  const ulEl = document.querySelector('.cards__list');
//  console.log(ulEl);
//  ulEl.insertAdjacentHTML('beforeend', cardMarkup(res));
// })