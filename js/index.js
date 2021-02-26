//импорт необходимых модулей
import {page, editButton, addButton, popupEdit, popupAdd, popupCard, popupOpened, inputName, inputCaption, cardContent, cardList, popupImage,
  popupFigcaption, addCardName, addCardLink, closeEditPopup, closeAddPopup, closeImagePopup, profileName, profileCaption, keyEscape,
  selectorObject, initialCards} from './data.js';

import FormValidator from './FormValidator.js';

//функция заполнения данных карточки и ее события
function getCard(el) {
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
function renderCard(card) {
  cardList.append(card);
}

//загрузка первоначальных карточек из массива
initialCards.forEach((card) => {
  renderCard(getCard(card));
})

//функция лайка карточки
function likeCard (event) {
  event.target.classList.toggle('card__like-button_active')
}

//функция удаления карточки
function deleteCard (event) {
  event.target.closest('.card').remove();
}

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

//функция добавления новой карточки
function addCard(evt) {
  evt.preventDefault();

  const submitButton = popupAdd.querySelector(selectorObject.submitButtonSelector);

  const newCard = {
    name: addCardName.value,
    link: addCardLink.value
  };

  cardList.prepend(getCard(newCard));
  addCardName.value = '';
  addCardLink.value = '';

  const validateAddForm = new FormValidator(selectorObject);
  validateAddForm.deactivateButton(submitButton, selectorObject);
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

