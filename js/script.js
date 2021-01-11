//Объявление переменных
let page = document.querySelector('.page'); //видимая область страницы
let closeButton = page.querySelector('.popup__close'); //кнопка закрытия popup окна
let editButton = page.querySelector('.profile__edit-button'); //кнопка редактирования профиля
let popup = page.querySelector('.popup'); //область popup
let popupOpened = 'popup_opened'; //переменная с названием класса
let pageOverflow = 'page_overflow_hidden'; //переменная с названием класса
let profileName = page.querySelector('.profile__name'); //переменная с именем пользователя
let profileCaption = page.querySelector('.profile__caption'); //переменная с описанием профиля
let popupName = popup.querySelector('.popup__text_type_name'); //переменная со значением имени из попап
let popupCaption = popup.querySelector('.popup__text_type_caption'); //переменная со значением описания из попап

//Функция закрытия popup окна
function closePopup() {
  popup.classList.remove(popupOpened);
  page.classList.add(pageOverflow);
}

//Функция открытия popup окна
function openPopup() {
  popup.classList.add(popupOpened);
  popupName.value = profileName.textContent;
  popupCaption.value = profileCaption.textContent;
  page.classList.remove(pageOverflow);
}
//Функция сохранения измененных данных
function savePopup(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileCaption.textContent = popupCaption.value;
  closePopup();
}


//События
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popup.addEventListener('submit', savePopup);
