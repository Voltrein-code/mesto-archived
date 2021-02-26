import {popupAdd, popupCard, cardContent, cardList, popupImage, popupFigcaption, addCardName, addCardLink, selectorObject} from './data.js';

import {openPopup, closePopup} from './index.js';
import FormValidator from './FormValidator.js';

export default class Card {
  constructor(cardContent, cardImage, cardName) {
    this._cardContent = cardContent;
    this._cardImage = cardImage;
    this._cardName = cardName;
  }
  
  //метод заполнения данных карточки и ее события
  _getCard(el) {
    const card = cardContent.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardName = card.querySelector('.card__name');
    const likeButton = card.querySelector('.card__like-button');
    const deleteButton = card.querySelector('.card__delete-button');
  
    cardImage.src = el.link;
    cardImage.alt = el.name;
    cardName.textContent = el.name;
    
    likeButton.addEventListener('click', (event) => likeCard(event));
    deleteButton.addEventListener('click', (event) => deleteCard(event));
  
    cardImage.addEventListener('click', () => {
      popupImage.src = el.link;
      popupImage.alt = el.name;
      popupFigcaption.textContent = el.name;
      openPopup(popupCard);
    });
  
    return card;
  }

  //добавление карточек из массива
  _renderCard(card) {
    cardList.append(card);
  }

  //функция лайка карточки
  _likeCard (event) {
    event.target.classList.toggle('card__like-button_active')
  }

  //функция удаления карточки
  _deleteCard (event) {
    event.target.closest('.card').remove();
  }

  _addCard(evt) {
    evt.preventDefault();
  
    const submitButton = popupAdd.querySelector(selectorObject.submitButtonSelector);
  
    const newCard = {
      name: addCardName.value,
      link: addCardLink.value
    };
  
    cardList.prepend(this._getCard(newCard));
    addCardName.value = '';
    addCardLink.value = '';
  
    const validateAddForm = new FormValidator(selectorObject);
    validateAddForm.deactivateButton(submitButton, selectorObject);
    closePopup(popupAdd);
  }
}