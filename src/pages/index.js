//импорт необходимых модулей
import './index.css';

import {
  editButton, addButton, popupEdit, popupAdd, popupCard, inputName, inputCaption, cardContent, addPopupButton, profileName, profileCaption, initialCards, selectorObject, cardList
} from '../components/data.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//экземпляр класса UserInfo
const currentUser = new UserInfo({ nameSelector: profileName, captionSelector: profileCaption });

//добавление карточек из стандартного массива
const initialCardsAdder = new Section({
  items: initialCards, renderer: (item) => {
    createCard(item, true);
  }
}, cardList)

initialCardsAdder.render();

//создание экземпляров попап
const popupAddForm = new PopupWithForm({
  popupSelector: popupAdd, handleFormSubmit: (item) => {
    createCard(item, false);

    validateAddForm.deactivateButton(addPopupButton);
    popupAddForm.close();
  }
});
const popupEditForm = new PopupWithForm({
  popupSelector: popupEdit, handleFormSubmit: (item) => {
    currentUser.setUserInfo(item);

    popupEditForm.close();
  }
});
const popupCardForm = new PopupWithImage(popupCard);

popupAddForm.setEventListeners();
popupEditForm.setEventListeners();
popupCardForm.setEventListeners();

//включение валидации форм
const validateAddForm = new FormValidator(selectorObject, popupAdd);
const validateEditForm = new FormValidator(selectorObject, popupEdit);
validateAddForm.enableValidation();
validateEditForm.enableValidation();

//открытие карточки в окне попап
function handleCardClick(el) {
  popupCardForm.open(el.name, el.link)
}

//создание карточки
function createCard(item, isInitial) {
  const newCardAdder = new Card(cardContent, item, handleCardClick);
  const cardElement = newCardAdder.getCard();

  initialCardsAdder.addItem(cardElement, isInitial);
}
//События
addButton.addEventListener('click', () => popupAddForm.open());
editButton.addEventListener('click', () => {
  const userData = currentUser.getUserInfo();

  inputName.value = userData.name;
  inputCaption.value = userData.caption;

  popupEditForm.open();
});