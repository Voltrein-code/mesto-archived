//импорт необходимых модулей
import {page, editButton, addButton, popupEdit, popupAdd, popupCard, popupOpened, inputName, inputCaption, cardContent, addCardName,
        addCardLink, closeEditPopup, closeAddPopup, closeImagePopup, profileName, profileCaption, keyEscape, initialCards, selectorObject, cardList} from './data.js';

import Card from './Card.js';
import FormValidator from './FormValidator.js';

//загрузка первоначальных карточек из массива
const newCardAdder = new Card(cardContent, addCardLink.value, addCardName.value);
initialCards.forEach((card) => {
  cardList.append(newCardAdder.getCard(card));
})

//включение валидации форм

const validateAddForm = new FormValidator(selectorObject, popupAdd);
const validateEditForm = new FormValidator(selectorObject, popupEdit);
validateAddForm.enableValidation();
validateEditForm.enableValidation();

//функция открытия попап
export function openPopup(currentPopup) {
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
export function closePopup(currentPopup) {
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
    name: addCardName.value,
    link: addCardLink.value
  };

  cardList.prepend(newCardAdder.getCard(newCard));
  addCardName.value = '';
  addCardLink.value = '';

  validateAddForm.deactivateButton();
  closePopup(popupAdd);
}

//События
closeAddPopup.addEventListener('click', () => closePopup(popupAdd));
closeEditPopup.addEventListener('click', () => closePopup(popupEdit));
closeImagePopup.addEventListener('click', () => closePopup(popupCard));
addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', editForm);
popupAdd.addEventListener('submit', addCard);
popupEdit.addEventListener('submit', saveProfile);

