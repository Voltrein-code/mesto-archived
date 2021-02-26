import {popupAdd, popupCard, cardContent, cardList, popupImage, popupFigcaption, addCardName, addCardLink, selectorObject} from './data.js';

import {openPopup, closePopup} from './index.js';

export default class Card {
  constructor(cardContent, cardImage, cardName) {
    this._cardContent = cardContent;
    this._cardImage = cardImage;
    this._cardName = cardName;
  }
  
  //метод заполнения данных карточки и ее события
  getCard(el) {
    const card = cardContent.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardName = card.querySelector('.card__name');
    const likeButton = card.querySelector('.card__like-button');
    const deleteButton = card.querySelector('.card__delete-button');
  
    cardImage.src = el.link;
    cardImage.alt = el.name;
    cardName.textContent = el.name;
    
    likeButton.addEventListener('click', (event) => this._likeCard(event));
    deleteButton.addEventListener('click', (event) => this._deleteCard(event));
  
    cardImage.addEventListener('click', () => {
      popupImage.src = el.link;
      popupImage.alt = el.name;
      popupFigcaption.textContent = el.name;
      openPopup(popupCard);
    });
  
    return card;
  }

  //функция лайка карточки
  _likeCard (event) {
    event.target.classList.toggle('card__like-button_active')
  }

  //функция удаления карточки
  _deleteCard (event) {
    event.target.closest('.card').remove();
  }
}