
import {createHtmlElement} from './helper.js'
import sliderarr from '../images/slider/*.jpg'

 export const slider = createHtmlElement('div', '', 'slider')
    const sliderLine = createHtmlElement('div', '', 'slider-line')
    const bunnerImg1 = createHtmlElement('img', '', 'bunner__img')
    const bunnerImg2 = createHtmlElement('img', '', 'bunner__img')
    const bunnerImg3 = createHtmlElement('img', '', 'bunner__img')
    const sliderPrev = createHtmlElement('button', '«', 'button__prev')
    const sliderNext = createHtmlElement('button', '»', 'button__next')
    const linkWrap = createHtmlElement('div', '', 'link-wrap')
    const link1 =createHtmlElement('div', '', 'point')
    const link2 =createHtmlElement('div', '', 'point')
    const link3 =createHtmlElement('div', '', 'point')
    
    link1.classList.add('active');

    bunnerImg1.src = sliderarr[3];
    bunnerImg2.src = sliderarr[2]
    bunnerImg3.src = sliderarr[1]

    slider.append(sliderLine, sliderPrev, sliderNext, linkWrap)
    sliderLine.append(bunnerImg1, bunnerImg2, bunnerImg3)
    linkWrap.append(link1, link2, link3)
    let count = 0;
    let width;

    function activePoint(count){
    switch (count){
        case 0:
            link1.classList.add('active');
            link2.classList.remove('active');
            link3.classList.remove('active');
            break;
        case 1:
            link1.classList.remove('active');
            link2.classList.add('active');
            link3.classList.remove('active');
            break;
        case 2:
            link1.classList.remove('active');
            link2.classList.remove('active');
            link3.classList.add('active');
            break;
    }
}

    export function init(){
        width = slider.offsetWidth;
        sliderLine.style.width = width * 3 +'px';
        bunnerImg1.style.width = width +'px';
        bunnerImg1.style.height = '400px';
        bunnerImg2.style.width = width +'px';
        bunnerImg2.style.height = '400px';
        bunnerImg3.style.width = width +'px';
        bunnerImg3.style.height = '400px';
        rollSlider();
    }

    sliderPrev.addEventListener('click', ()=>{
        count--;
        
        if(count <0){
            count = 2;
        }
        rollSlider();
        activePoint(count)
    })

    sliderNext.addEventListener('click', ()=>{
        count++;
        console.log(count)
        if(count >= 3){
            count = 0;
        }
        rollSlider();
        activePoint(count)
    })

    function rollSlider(){
        sliderLine.style.transform = 'translate(-'+ count * width + 'px)'
    }

