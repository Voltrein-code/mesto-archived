//импорт необходимых модулей
import {page, editButton, addButton, popupEdit, popupAdd, popupCard, popupOpened, inputName, inputCaption, cardContent, cardList, popupImage,
  popupFigcaption, addCardName, addCardLink, closeEditPopup, closeAddPopup, closeImagePopup, profileName, profileCaption, keyEscape,
  selectorObject, initialCards} from './data.js';


import Card from './Card.js';

//загрузка первоначальных карточек из массива
const newCardAdder = new Card(cardContent, addCardLink.value, addCardName.value);
initialCards.forEach((card) => {
  newCardAdder._renderCard(newCardAdder._getCard(card));
})

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

//События
closeAddPopup.addEventListener('click', () => closePopup(popupAdd));
closeEditPopup.addEventListener('click', () => closePopup(popupEdit));
closeImagePopup.addEventListener('click', () => closePopup(popupCard));
addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', editForm);
popupAdd.addEventListener('submit', (evt) => newCardAdder._addCard(evt));
popupEdit.addEventListener('submit', saveProfile);

