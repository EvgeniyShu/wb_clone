const root = document.getElementById('root');

const header = createHtmlElement('header', '', 'header');
const radius = createHtmlElement('div', '', 'radius');
const main = createHtmlElement('main', '', 'main');
const radiusEnd = createHtmlElement('div', '', 'radius-end');
const footer = createHtmlElement('footer', 'footer', 'footer');

const container = createHtmlElement('div', '', 'container')

const headerWrap = createHtmlElement('div', '', 'header-wrap');
const burgerMenu = createHtmlElement('label', '', 'burger-menu');
const burgerMenuIcon  = createHtmlElement('span', '', 'burger-menu__icon');
const burgerMenuInput = createHtmlElement('input','','none');
const logo = createHtmlElement('div', 'wrongberries', 'logo');
const search = createHtmlElement('div', '', 'search');
const searchIcon = createHtmlElement('div', '', 'search__icon');
const inputWrap = createHtmlElement('div', '', 'input-wrap');
const input = createHtmlElement('input', '', 'input');
const clearBtn = createHtmlElement('span', '', 'clear');
const shoppingCartWrap = createHtmlElement('div', '', 'shoping-cart');
const shoppingCartIcon = createHtmlElement('div', '', 'shoping-cart__icon')
const shoppingCartText = createHtmlElement('p', 'корзина','shoping-cart__p');

const aside = createHtmlElement('aside', '', 'aside');

const sectionBunner = createHtmlElement('section', '', 'section_bunner');
export const bunner = createHtmlElement('div', '', 'bunner');

const sectionRecomendations = createHtmlElement('section', '', 'section_recomendations');
const recomendationsHeader = createHtmlElement('h2', 'Хит продаж', 'recomendations__h2');
const recomendationsCardsWrap = createHtmlElement('div', '', 'container');
const button = createHtmlElement('button', 'Показать ещё', 'button');
recomendationsHeader.classList.add('container');

const popupBackground = createHtmlElement('div', '', 'popup__bg');
const popup = createHtmlElement('div', '', 'popup');
const popupClose = createHtmlElement('div', 'X', 'popup__close');
popup.append(popupClose)
popupBackground.append(popup);

input.type = 'text';
input.placeholder = " Я ищу...";


root.append(header, radius, main, radiusEnd, footer, popupBackground);
header.append(container);
container.append(headerWrap);
headerWrap.append(burgerMenu, logo, search,shoppingCartWrap);

burgerMenu.append(burgerMenuIcon);

search.append(searchIcon, inputWrap, clearBtn);
inputWrap.append(input);

shoppingCartWrap.append(shoppingCartIcon, shoppingCartText);

burgerMenuInput.type = 'checkbox';
burgerMenu.htmlFor = 'menu';
burgerMenuInput.id = 'menu';
main.append(burgerMenuInput);
main.append(aside);

main.append(sectionBunner, sectionRecomendations);
sectionBunner.append(bunner);
sectionRecomendations.append(recomendationsHeader, recomendationsCardsWrap, button);

function createHtmlElement(div, text, className){
    let result = document.createElement(div);
    result.append(document.createTextNode(text));
    result.classList.add(className);
    return result;
}

function createCardTable(){
  const recomendationGoodsTable = createHtmlElement('div', '', 'recomendations__card-wrap');
  
    for(let i = 0; i < 15; i++){
      const card = createHtmlElement('div', '', 'card');
      recomendationGoodsTable.append(card);
    }

    recomendationsCardsWrap.append(recomendationGoodsTable);
}

//function createCard(){
//  const card = createHtmlElement('div', '', 'card');
//  recomendationGoodsTable.append(card);
//}

function clearInput(){
    input.value = '';
    clearBtn.classList.remove('active')
}

const handleClick = (event) => {

    
      if(event.target.classList.contains('button')){
       createCardTable
        return;
      }

      if(event.target.type === 'text' ){
        console.log(event.target.nextElementSibling)
        event.target.parentElement.nextElementSibling.classList.add('active');
      }

      if(event.target.classList === 'clear'){
        clearInput;
      }

      if(event.target.classList.contains('search__icon')){
        if((window.screen.width <= 770) || (document.documentElement.scrollWidth <= 770)){
        logo.classList.toggle('none');
        search.classList.toggle('visible');
        } else {
        logo.classList.remove('none');
        search.classList.remove('visible');
        }
      }

      if(event.currentTarget.classList.contains('shoping-cart')){
        event.preventDefault();
        popupBackground.classList.add('active');
        popup.classList.add('active');
      }

      if(event.target.classList.contains('popup__close')){
        event.preventDefault();
        popupBackground.classList.remove('active');
        popup.classList.remove('active');
      }
      if(event.target.classList.contains('popup__bg')){
        popupBackground.classList.remove('active');
        popup.classList.remove('active');
       }
}

createCardTable()

button.addEventListener('click', createCardTable);
//input.addEventListener('click', handleClick);
clearBtn.addEventListener('click', clearInput);
//searchIcon.addEventListener('click', handleClick)
shoppingCartWrap.addEventListener('click', handleClick)
//popupClose.addEventListener('click', handleClick)
root.addEventListener('click', handleClick)