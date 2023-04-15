import { popup, promise, clickOnCartButton} from "./index.js";
import { shoppingCartArr} from "./index.js";
import {createHtmlElement} from './helper.js'
import imgarr from '../images/*.jpg'

export function createShopingCart(popup, arr){
    const header = createHtmlElement('h2', 'Корзина', 'h2');
    const container = createHtmlElement('div', '', 'cart_wrap');
    let sum = 0;

    arr.forEach((elem) =>{
        let count = 1;
        
        const {id, image:img, name, price } = elem;
        const goodsWrap = createHtmlElement('div', '', 'goods_wrap');
        const image = createHtmlElement('img', ``, 'image_small');
        image.src = `${img}`;
        const idOfGoods = createHtmlElement('div', `номер товара:${id}`, 'div');
        const nameOfGood = createHtmlElement('div', `${name}`, 'cart__name');
        const priceOfGood = createHtmlElement('div', `${price}`, 'cart__price');
        const amount = createHtmlElement('div', '', 'buttons_wrap');
        const buttonMinus = createHtmlElement('button', '-', 'button');
        const numberOfGoods = createHtmlElement('div', '', 'div');
        const buttonPlus = createHtmlElement('button', '+', 'button');
        
        numberOfGoods.innerText = count;
        amount.append(buttonMinus, numberOfGoods, buttonPlus)
        goodsWrap.append(image, idOfGoods, nameOfGood, amount, priceOfGood)
        container.append(goodsWrap);

        sum += Number(price.slice(0, -7))

        buttonMinus.addEventListener('click', ()=>{
           
           if((count > 1)){
            count --;
            numberOfGoods.innerText = count;
            priceOfGood.innerText = count  * Number(price.slice(0, -7)) + '.00 руб';
            countAllAmount(totalAmount, -Number(price.slice(0, -7)))
        }
        })

        buttonPlus.addEventListener('click', ()=>{
            if((count < 10)){
                count++;
                numberOfGoods.innerText = count;
                priceOfGood.innerText = count * Number(price.slice(0, -7)) + '.00 руб';
                countAllAmount(totalAmount, Number(price.slice(0, -7)))
                
            }
        })
    })

    const totalAmount = createHtmlElement('div', 'Итого: 0.00 руб', 'div');
    

    function countAllAmount(elem, amount){
        sum += amount
        elem.innerText = `Итого: ${sum}.00 руб`
    }

    totalAmount.innerText = `Итого: ${sum}.00 руб`

    
    const button = createHtmlElement('button', 'убрать все товары', 'button');
    popup.append(header, container, totalAmount, button)
    button.addEventListener('click', (shoppingCartArr)=>{
        container.innerHTML = '';
        shoppingCartArr = [];
        localStorage.setItem('shopingCart', JSON.stringify(shoppingCartArr))
    })
    
}


export function cardInPopup(popup, id){
     promise(id).then(({name, price, image, id})=> createPopupText(name, price, imgarr[id], id, popup))

     function createPopupText(name, price, image, id, parrent){
        const popupWrap = createHtmlElement('div', '', 'popup_wrap');
        const img = createHtmlElement('img', '', 'image-popup')
        const namediv = createHtmlElement('div', `${name}`, 'name');
        const pricediv = createHtmlElement('div', `${price} руб`, 'price');
        const shoppingCartButton = createHtmlElement('button', 'В корзину','button-blue');
        const productDescription = createHtmlElement('div', 'Коротко о товаре: Продукт является самой важной инновацией и имеет лучшее качество. Преимущество этого продукта в том, что он предлагает лучшее из лучшего с точки зрения качества и инноваций.','div');
        img.src = `${image}`;
        img.id = id + 'img';
        namediv.id = id + 'n';
        pricediv.id = id + 'pr';
        shoppingCartButton.id = id;
        shoppingCartButton.addEventListener('click', clickOnCartButton);
        popupWrap.append(img, namediv, pricediv, shoppingCartButton, productDescription);
        parrent.append(popupWrap)
      }
  
}

