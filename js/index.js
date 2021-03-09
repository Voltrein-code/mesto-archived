//импорт необходимых модулей
import {editButton, addButton, popupEdit, popupAdd, popupCard, inputName, inputCaption, cardContent, addPopupButton, cardDataObject,
        profileName, profileCaption, initialCards, selectorObject, cardList, popupImage, popupFigcaption} from './data.js';

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from "./Section.js";
import Popup from "./Popup.js";

//создание экземпляров попап
const popupAddForm = new Popup(popupAdd);
const popupEditForm = new Popup(popupEdit);
const popupCardForm = new Popup(popupCard);

//добавление карточек из стандартного массива
const initialCardsAdder = new Section({items: initialCards, renderer: (item) => {
  const newCardAdder = new Card(cardContent, item, handleCardClick);
  const cardElement = newCardAdder.getCard();

  initialCardsAdder.addItem(cardElement, true);
} }, cardList)

initialCardsAdder.render();

//включение валидации форм
const validateAddForm = new FormValidator(selectorObject, popupAdd);
const validateEditForm = new FormValidator(selectorObject, popupEdit);
validateAddForm.enableValidation();
validateEditForm.enableValidation();

//функция сохранения данных пользователя
function saveProfile(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;

  popupEditForm.close();
}

//функция открытия формы редактирования профиля
function editForm() {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;

  popupEditForm.open();
}

function addCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: cardDataObject.name.value,
    link: cardDataObject.link.value
  };

  const newCardAdder = new Card(cardContent, newCard, handleCardClick);
  const cardElement = newCardAdder.getCard();

  initialCardsAdder.addItem(cardElement, false);

  cardDataObject.name.value = '';
  cardDataObject.link.value = '';

  validateAddForm.deactivateButton(addPopupButton);
  popupAddForm.close();
}

//открытие карточки в окне попап
function handleCardClick (el) {
  popupImage.src = el.link;
  popupImage.alt = el.name;
  popupFigcaption.textContent = el.name;
  popupCardForm.open();
}

//События
addButton.addEventListener('click', () => popupAddForm.open());
editButton.addEventListener('click', editForm);

popupAdd.addEventListener('submit', addCard);
popupEdit.addEventListener('submit', saveProfile);