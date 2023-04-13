import {createHtmlElement} from './helper.js'

export const aside = createHtmlElement('aside', '', 'aside');


const link1 = createHtmlElement('p', 'Женщинам', 'aside__p');
const link2 = createHtmlElement('p', 'Обувь', 'aside__p');
const link3 = createHtmlElement('p', 'Детям', 'aside__p');
const link4 = createHtmlElement('p', 'Дом', 'aside__p');
const link5 = createHtmlElement('p', 'Красота', 'aside__p');
const link6 = createHtmlElement('p', 'Аксессуары', 'aside__p');
const link7 = createHtmlElement('p', 'Электроника', 'aside__p');
const link8 = createHtmlElement('p', 'Игрушки', 'aside__p');
const link9 = createHtmlElement('p', 'Мебель', 'aside__p');
const link10 = createHtmlElement('p', 'Товары для взрослых', 'aside__p');
const link11= createHtmlElement('p', 'Продукты', 'aside__p');
const link12 = createHtmlElement('p', 'Бытовая техника', 'aside__p');
const link13 = createHtmlElement('p', 'Зоотовары', 'aside__p');
const link14 = createHtmlElement('p', 'Спорт', 'aside__p');
const link15 = createHtmlElement('p', 'Автотовары', 'aside__p');
const link16 = createHtmlElement('p', 'Книги', 'aside__p');
const link17 = createHtmlElement('p', 'Для ремонта', 'aside__p');
const link18 = createHtmlElement('p', 'Сад и дача', 'aside__p');
const link19 = createHtmlElement('p', 'Здоровье', 'aside__p');
const link20 = createHtmlElement('p', 'Канцтовары', 'aside__p');

aside.append(link1, link2, link3, link4, link5, link6, link7, link8, link9, link10,
    link11, link1, link13, link14, link15, link16, link17, link18, link19, link20)