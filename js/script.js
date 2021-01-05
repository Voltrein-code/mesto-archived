//Объявление переменных
let page = document.querySelector('.page'); //видимая область страницы
let closeButton = page.querySelector('.popup__close_action_reset'); //кнопка закрытия popup окна
let editButton = page.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup'); //область popup
let popupOpened = 'popup_opened';

//Функция закрытия popup окна
function closePopup() {
  popup.classList.remove(popupOpened);
}

//Функция открытия popup окна
function openPopup() {
  popup.classList.add(popupOpened);
}

//События
closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);