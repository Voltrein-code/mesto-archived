//Объявление переменных
const page = document.querySelector('.root'); //видимая область страницы
const editButton = page.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const addButton = page.querySelector('.profile__add-button')//кнопка добавления
const popupEdit = page.querySelector('.popup_type_edit-form');//окно попап для редактирования
const popupAdd = page.querySelector('.popup_type_add-form');//окно попап для добавления карточки
const popupCard = page.querySelector('.popup_type_card-image');//окно попап для изображения карточки
const popupOpened = 'popup_opened'; //переменная с названием класса
const inputName = popupEdit.querySelector('.popup__text_type_name'); //переменная со значением имени из попап
const inputCaption = popupEdit.querySelector('.popup__text_type_caption'); //переменная со значением описания из попап
const cardContent = page.querySelector('.card-container').content;//содержимое template элемента
const cardList = '.cards';//контейнер с карточками
const popupImage = page.querySelector('.popup__image');//фотография из карточки в попап
const popupFigcaption = page.querySelector('.popup__figcaption');//подпись для фотографии в попап
const closeEditPopup = page.querySelector('.popup__close_type_edit-form');//кнопка закрытия попапа редактирования
const closeAddPopup = page.querySelector('.popup__close_type_add-form');//кнопка закрытия попапа добавления
const closeImagePopup = page.querySelector('.popup__close_type_card-image');//кнопка закрытия попапа карточки
const profileName = page.querySelector('.profile__name');//имя профиля
const profileCaption = page.querySelector('.profile__caption');//подпись профиля
const addPopupButton = popupAdd.querySelector('.popup__submit');//кнопка submit
const keyEscape = 'Escape';//код Escape

//объект с данными карточки
const cardDataObject = {
  name: popupAdd.querySelector('.popup__text_type_image'),
  link: popupAdd.querySelector('.popup__text_type_link')
}

//объект с именами селекторов
const selectorObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit_active',
  inputErrorClass: 'popup__text_type_error'
};

//массив с первоначальными карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {
  page, editButton, addButton, popupEdit, popupAdd, popupCard, popupOpened, inputName, inputCaption, cardContent, cardList, popupImage,
  popupFigcaption, cardDataObject, closeEditPopup, closeAddPopup, closeImagePopup, profileName, profileCaption, addPopupButton,
  keyEscape, selectorObject, initialCards
};