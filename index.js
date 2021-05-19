'use strict'




const requestURL = 'data.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = () => {
    const elem = request.response;

    renderHeadBody(elem);

    renderLinks(elem);
    renderCards(elem);


}

const createTitle = (jsonObj) => {
    const headTtile = document.createElement('h1');
    headTtile.className = 'head-body__title';

    headTtile.innerHTML = `${jsonObj.page_meta.h1} `;

    return headTtile;
}  

const createSubTitle = (jsonObj) => {
    const headSubTtile = document.createElement('div');
    headSubTtile.className = 'head-body__subtitle';

    headSubTtile.innerHTML = `${jsonObj.page_meta.title} `;

    return headSubTtile;

}  

const createPageInfo = (jsonObj) => {
    const paragraph = document.createElement('div');
    paragraph.className = 'content__info';

    paragraph.innerHTML = `<p class="content__info-text" >${jsonObj.content}</p>`;                                                 

    return paragraph;
}


const createLink = (jsonObj) => {
    const link = document.createElement('li');

    link.innerHTML = `
                    <a href="${jsonObj.href}" class="menu-header__link">${jsonObj.text}</a>
                    `;
    return link;
}

const createCard = (jsonObj) => {
    const card = document.createElement('div');
    card.className = 'content__card card';

    card.innerHTML = `
                        <div class="card__item item">
                        <div class="item__img">
                            <img src="${jsonObj.image}" alt="truck">
                        </div>
                        <div class="item__body txt-body">
                            <h3 class="txt-body__title">"${jsonObj.title}</h3>
                            <div class="txt-body__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
                                dolor, sit amet consectetur adipisicing.
                            </div>
                            <div class="txt-body__info">
                                <span class="item__year">${jsonObj.year}</span>
                                <span class="item__mileage">${jsonObj.mileage}</span>
                                <span class="item__axle-configuration">${jsonObj.axle_configuration}</span>
                            </div>
                        </div>
                        <div class="item__price">$39900</div>
                    `;
    return card;
};


const renderLinks = (elem) => {
    const menuHeadeList = document.querySelector('.menu-header__list');

    for (let i = 0; i < elem.nav.length; i++) {
        menuHeadeList.append(createLink(elem.nav[i]));
    }
};

const renderCards = (elem) => {
    const pageConteiner = document.querySelector('.page__content');

    for (let i = 0; i < elem.stock.length; i++) {
        pageConteiner.appendChild(createCard(elem.stock[i]));
    }

    for (let i = 0; i < elem.page_text.length; i++) {
        pageConteiner.append(createPageInfo(elem.page_text[i]));       //! выполнить  pageConteiner.append(createPageInfo(elem.page_text[i])) вне фор и передать толькоelem.page_text
    }


};

const renderHeadBody = (elem) => {
    const headerBody = document.querySelector('.header__body');
    console.log(headerBody)
    //!console.log(createTitle(elem));
    headerBody.prepend(createSubTitle(elem));
    headerBody.prepend(createTitle(elem));

}


console.log('SPEEED');




function getCheckedCheckBoxes() {
    const checkboxes = document.querySelectorAll('[name="param1"]');
    //!console.log(checkboxes[0].value)


    checkboxes.forEach((box) => {

        box.addEventListener('click', function () {          //!старт
            //!event.preventDefault();
            console.log(box.value);
        })
    });

    // jQuery(document).ready(function($){
    //     $(checkboxes[0]).on('click', function () {
    //         let checkboxStatus = $(this).prop('checked')
    //         console.log(checkboxStatus)
    //     })
    // });
}

getCheckedCheckBoxes();








