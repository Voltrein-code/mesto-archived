//Объявление переменных
const page = document.querySelector('.page'); //видимая область страницы
const closeButton = page.querySelector('.popup__close'); //кнопка закрытия popup окна
const editButton = page.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const popup = page.querySelector('.popup'); //область popup
const popupOpened = 'popup_opened'; //переменная с названием класса
const pageOverflow = 'page_overflow_hidden'; //переменная с названием класса
const inputName = popup.querySelector('.popup__text_type_name'); //переменная со значением имени из попап
const inputCaption = popup.querySelector('.popup__text_type_caption'); //переменная со значением описания из попап
const cardContent = page.querySelector('.card').content

const user = {
  name: ' ',
  caption: ' '
}

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

//Функция для загрузки информации на странице
function onLoad() {
  //информация профиля
  user.name = page.querySelector('.profile__name');
  user.caption = page.querySelector('.profile__caption');

  //загрузка карточек с фотографиями мест
  initialCards.forEach((el) => {
    const card = cardContent.cloneNode(true);

    card.querySelector('.card__image').src = el.link;
    card.querySelector('.card__name').textContent = el.name;
    
  })
}

onLoad();


function togglePopup() {
  popup.classList.toggle(popupOpened);
  page.classList.toggle(pageOverflow);
}


//Функция открытия popup окна
function openEditForm() {
  togglePopup();
  inputName.value = user.name.textContent;
  inputCaption.value = user.caption.textContent;
}
//Функция сохранения измененных данных
function saveProfile(evt) {
  evt.preventDefault();
  user.name.textContent = inputName.value;
  user.caption.textContent = inputCaption.value;
  togglePopup();
}


//События
editButton.addEventListener('click', openEditForm);
closeButton.addEventListener('click', togglePopup);
popup.addEventListener('submit', saveProfile);

popup.addEventListener('click', (event) => {
  event.target.classList.remove(popupOpened);
});
