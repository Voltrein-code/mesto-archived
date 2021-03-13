//импорт необходимых модулей
import {
  editButton, addButton, popupEdit, popupAdd, popupCard, inputName, inputCaption, cardContent, addPopupButton, profileName, profileCaption, initialCards, selectorObject, cardList
} from './data.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

//экземпляр класса UserInfo
const currentUser = new UserInfo({ nameSelector: profileName, captionSelector: profileCaption });

//добавление карточек из стандартного массива
const initialCardsAdder = new Section({
  items: initialCards, renderer: (item) => {
    const newCardAdder = new Card(cardContent, item, handleCardClick);
    const cardElement = newCardAdder.getCard();

    initialCardsAdder.addItem(cardElement, true);
  }
}, cardList)

initialCardsAdder.render();

//создание экземпляров попап
const popupAddForm = new PopupWithForm({
  popupSelector: popupAdd, handleFormSubmit: (item) => {
    const newCardAdder = new Card(cardContent, item, handleCardClick);
    const cardElement = newCardAdder.getCard();

    initialCardsAdder.addItem(cardElement, false);

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

//функция сохранения данных пользователя
function saveProfile(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;

  popupEditForm.close();
}

//открытие карточки в окне попап
function handleCardClick(el) {
  popupCardForm.open(el.name, el.link)
}

//События
addButton.addEventListener('click', () => popupAddForm.open());
editButton.addEventListener('click', () => {
  const userData = currentUser.getUserInfo();

  inputName.value = userData.name;
  inputCaption.value = userData.caption;

  popupEditForm.open();
});