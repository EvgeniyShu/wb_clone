import {createHtmlElement, createCardTable} from './helper.js'
import {createShopingCart, cardInPopup} from './popup.js'
import {slider, init} from './slider.js'
import {aside} from './aside.js'
import imgarr from '../images/*.jpg'
const root = document.getElementById('root');
console.log(imgarr)
const header = createHtmlElement('header', '', 'header');
const radius = createHtmlElement('div', '', 'radius');
const main = createHtmlElement('main', '', 'main');
const radiusEnd = createHtmlElement('div', '', 'radius-end');
const footer = createHtmlElement('footer', 'картинки не соответствуют товару', 'footer');

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

const sectionBunner = createHtmlElement('section', '', 'section_bunner');

const sectionRecomendations = createHtmlElement('section', '', 'section_recomendations');
const recomendationsHeader = createHtmlElement('h2', 'Хит продаж', 'recomendations__h2');
export const recomendationsCardsWrap = createHtmlElement('div', '', 'container');
const button = createHtmlElement('button', 'Показать ещё', 'button');
recomendationsHeader.classList.add('container');

const popupBackground = createHtmlElement('div', '', 'popup__bg');
export const popup = createHtmlElement('div', '', 'popup');
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
sectionBunner.append(slider);
sectionRecomendations.append(recomendationsHeader, recomendationsCardsWrap, button);

let shoppingCartArr = [];
const shoppingCartFromStorage = localStorage.getItem('shopingCart');

if(!shoppingCartFromStorage){
  shoppingCartArr = [];
} else{
  shoppingCartArr = JSON.parse(shoppingCartFromStorage);
}
 

export const promise = async (id) =>{
  const response = await fetch(`https://643266bbd0127730d2d1b9f0.mockapi.io/market/${id}`);
  const goods = await response.json();
  return goods;
}

export const createCard = async (parent) => {
  const card = createHtmlElement('div', '', 'card');
  
  const id = Math.floor((Math.random() * 37) + 1);

  await promise(id).then(({name, price, image, id})=> createText(name, price, imgarr[id], id, card))

  //namediv.innerText = name;
  parent.append(card);
}

function createText(name, price, image, id, parrent){
  const cardWrap = createHtmlElement('div', '', 'card-wrap');
  const img = createHtmlElement('img', '', 'image')
 
  const namediv = createHtmlElement('div', `${name}`, 'name');
  const pricediv = createHtmlElement('div', `${price} руб`, 'price');
  const shoppingCartButton = createHtmlElement('button', 'В корзину','button-blue');
  img.src = `${image}`;
  img.id =  id + 'img';
  namediv.id = id + 'n';
  pricediv.id = id + 'pr';
  shoppingCartButton.id = id;
  shoppingCartButton.addEventListener('click', clickOnCartButton);
  cardWrap.append(img, namediv, pricediv, shoppingCartButton);
  cardWrap.addEventListener('click', handleClick)
  parrent.append(cardWrap)
}

export function clickOnCartButton(event){
  if(event.target.classList.contains('button-blue')){
  let id = event.target.id
  let image = document.getElementById(`${id}img`).currentSrc
  let name = document.getElementById(`${id}n`).textContent
  let price = document.getElementById(`${id}pr`).textContent
  console.dir(image)
  shoppingCartArr.push({id:id,image: image, name: name, price: price})
    localStorage.setItem('shopingCart', JSON.stringify(shoppingCartArr))
  }
}

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

      if(event.currentTarget.classList.contains('shoping-cart') ){
        event.preventDefault();
        popupBackground.classList.add('active');
        popup.classList.add('active');
        createShopingCart(popup, shoppingCartArr);
      }

      if(event.target.classList.contains('popup__close')){
        event.preventDefault();
        popupBackground.classList.remove('active');
        popup.classList.remove('active');
        popup.innerText = '';
        popup.append(popupClose)
      }
      if(event.target.classList.contains('popup__bg')){
        popupBackground.classList.remove('active');
        popup.classList.remove('active');
        popup.innerText = '';
        popup.append(popupClose)
       }

       
       
       if((event.currentTarget.classList.contains('card-wrap')) ){
        event.preventDefault();
        console.log(event.target)
        let id = event.currentTarget.lastChild.id
        
        popupBackground.classList.add('active');
        popup.classList.add('active');
        cardInPopup(popup, id);
      }
     
}

window.addEventListener('resize', init);
init()
createCardTable()

export {shoppingCartArr};
button.addEventListener('click', createCardTable);

clearBtn.addEventListener('click', clearInput);

shoppingCartWrap.addEventListener('click', handleClick)
root.addEventListener('click', handleClick)



  

