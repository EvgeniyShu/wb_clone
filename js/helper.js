import {recomendationsCardsWrap, createCard} from './index.js'

export function createHtmlElement(div, text, className){
    let result = document.createElement(div);
    result.append(document.createTextNode(text));
    result.classList.add(className);
    return result;
}

export function createCardTable(){
    const recomendationGoodsTable = createHtmlElement('div', '', 'recomendations__card-wrap');
    
      for(let i = 0; i < 15; i++){
        createCard(recomendationGoodsTable);
      }
  
      recomendationsCardsWrap.append(recomendationGoodsTable);
  }