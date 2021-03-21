//Объявление переменных
const page = document.querySelector('.root')//видимая область страницы
const editButton = page.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const addButton = page.querySelector('.profile__add-button')//кнопка добавления
const popupEdit = page.querySelector('.popup_type_edit-form');//окно попап для редактирования
const popupAdd = page.querySelector('.popup_type_add-form');//окно попап для добавления карточки
const popupCard = page.querySelector('.popup_type_card-image');//окно попап для изображения карточки
const inputName = popupEdit.querySelector('.popup__text_type_name'); //переменная со значением имени из попап
const inputCaption = popupEdit.querySelector('.popup__text_type_caption'); //переменная со значением описания из попап
const cardContent = page.querySelector('.card-container').content;//содержимое template элемента
const cardList = '.cards';//контейнер с карточками
const profileName = page.querySelector('.profile__name');//имя профиля
const profileCaption = page.querySelector('.profile__caption');//подпись профиля
const addPopupButton = popupAdd.querySelector('.popup__submit');//кнопка submit
const popupDelete = page.querySelector('.popup_type_card-delete');//попап удаления карточки
const serverUrl = 'https://mesto.nomoreparties.co/v1/cohort-21';//адрес сервера
const serverToken = 'c717fb8f-7e38-4c7d-b617-f552f6e3b5d3';//токен авторизации
const avatarEditButton = page.querySelector('.profile__avatar-edit');//кнопка редактироавния аватара
const popupAvatar = page.querySelector('.popup_type_avatar-form')//попап для редактированяи аватара

export {
  editButton, addButton, popupEdit, popupAdd, popupCard, inputName, inputCaption, cardContent,
  cardList, profileName, profileCaption, addPopupButton, serverUrl, serverToken, popupDelete,
  avatarEditButton, popupAvatar
};

//объект с данными карточки
export const cardDataObject = {
  name: popupAdd.querySelector('.popup__text_type_image'),
  link: popupAdd.querySelector('.popup__text_type_link')
}

//объект с именами селекторов
export const selectorObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit_active',
  inputErrorClass: 'popup__text_type_error'
};
