//импорт необходимых модулей
import {page, editButton, addButton, popupEdit, popupAdd, popupCard, popupOpened, inputName, inputCaption, cardContent, addPopupButton, cardDataObject,
        closeEditPopup, closeAddPopup, closeImagePopup, profileName, profileCaption, keyEscape, initialCards, selectorObject, cardList, popupImage,
        popupFigcaption} from './data.js';

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from "./Section.js";

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

//функция открытия попап
function openPopup(currentPopup) {
  currentPopup.classList.add(popupOpened);

  page.addEventListener('keydown', keyEscapeHandler);
  currentPopup.addEventListener('click', closeOverlay);
}

//закрытие попап по нажатию на оверлей
function closeOverlay(event) { 
  const openedPopup = page.querySelector('.popup_opened')

  if(event.target === openedPopup) {
    closePopup(openedPopup);
  }
}

//закрытие попап по нажатию клавиши Esc
function keyEscapeHandler(event) {
  const openedPopup = page.querySelector('.popup_opened')

  if(event.key === keyEscape) {
    closePopup(openedPopup);
  }
}

//функция закрытия попап
function closePopup(currentPopup) {
  currentPopup.classList.remove(popupOpened);
  currentPopup.removeEventListener('click', closeOverlay);
  page.removeEventListener('keydown', keyEscapeHandler);
}

//функция сохранения данных пользователя
function saveProfile(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;

  closePopup(popupEdit);
}

//функция открытия формы редактирования профиля
function editForm() {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;

  openPopup(popupEdit); 
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
  closePopup(popupAdd);
}

//открытие карточки в окне попап
function handleCardClick (el) {
  popupImage.src = el.link;
  popupImage.alt = el.name;
  popupFigcaption.textContent = el.name;
  openPopup(popupCard);
}

//События
closeAddPopup.addEventListener('click', () => closePopup(popupAdd));
closeEditPopup.addEventListener('click', () => closePopup(popupEdit));
closeImagePopup.addEventListener('click', () => closePopup(popupCard));
addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', editForm);
popupAdd.addEventListener('submit', addCard);
popupEdit.addEventListener('submit', saveProfile);