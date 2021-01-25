//Объявление переменных
const page = document.querySelector('.root'); //видимая область страницы
const closeButtonEdit = page.querySelector('.popup-edit__close'); //кнопка закрытия popup окна редактирования
const closeButtonAdd = page.querySelector('.popup-add__close'); //кнопка закрытия popup окна добавления
const editButton = page.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const addButton = page.querySelector('.profile__add-button')//кнопка добавления
const popup = page.querySelector('.popup'); //область popup
const popupEdit = page.querySelector('.popup-edit');//окно попап для редактирования
const popupAdd = page.querySelector('.popup-add');//окно попап для добавления карточки
const popupOpened = 'popup_opened'; //переменная с названием класса
const pageOverflow = 'root_overflow_hidden'; //переменная с названием класса
const inputName = popupEdit.querySelector('.popup__text_type_name'); //переменная со значением имени из попап
const inputCaption = popupEdit.querySelector('.popup__text_type_caption'); //переменная со значением описания из попап
const cardContent = page.querySelector('.card-container').content;//содержимое template элемента
const cardList = page.querySelector('.cards');//контейнер с карточками

//объект с данными пользователя

const user = {
  name: ' ',
  caption: ' '
};
//массив с карточками
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

function resetCards() {
  const cards = page.querySelectorAll('.card');
  cards.forEach((el) => el.remove());
}

function onLoad() {
  //информация профиля
  user.name = page.querySelector('.profile__name');
  user.caption = page.querySelector('.profile__caption');



  resetCards();
  //загрузка карточек с фотографиями мест
  initialCards.forEach((el, index) => {


      const card = cardContent.cloneNode(true);

      card.querySelector('.card__image').src = el.link;
      card.querySelector('.card__name').textContent = el.name;

      card.querySelector('.card__like-button').addEventListener('click', (event) => {
        event.target.classList.toggle('card__like-button_active');
      });

      card.querySelector('.card__delete-button').addEventListener('click', (event) => {
        console.log(index);
        initialCards.splice(index, 1);
        onLoad();
      });

      cardList.append(card);
    })

}
//вызов функции при загрузке или перезагрузке страницы
onLoad();

//логика открытия и закрытия окна попап
function togglePopup(currentPopup) {
  currentPopup.classList.toggle(popupOpened);
  page.classList.toggle(pageOverflow);
}

function openAddForm() {
  togglePopup(popupAdd);

  closeButton = popupAdd.querySelector('.popup__close');

}

//Функция открытия popup окна редактирования
function openEditForm() {
  togglePopup(popupEdit);

  inputName.value = user.name.textContent;
  inputCaption.value = user.caption.textContent;

  closeButton = popupEdit.querySelector('.popup__close');
}
//Функция сохранения измененных данных
function saveProfile(evt) {
  evt.preventDefault();

  user.name.textContent = inputName.value;
  user.caption.textContent = inputCaption.value;

  togglePopup(popupEdit);
}

function addCard(evt) {
  evt.preventDefault();
  const addCardName = popupAdd.querySelector('.popup__text_type_image');
  const addCardLink = popupAdd.querySelector('.popup__text_type_link');

  const newCard = {
    name: addCardName.value,
    link: addCardLink.value
  }
  initialCards.unshift(newCard);
  onLoad();
  togglePopup(popupAdd);
}

function deleteCard() {

}

//События
addButton.addEventListener('click', openAddForm);
editButton.addEventListener('click', openEditForm);
closeButtonEdit.addEventListener('click', () => togglePopup(popupEdit));
closeButtonAdd.addEventListener('click', () => togglePopup(popupAdd));
popupEdit.addEventListener('submit', saveProfile);
popupAdd.addEventListener('submit', addCard);



popupEdit.addEventListener('click', (event) => {
  event.target.classList.remove(popupOpened);

  if (event.target === popupEdit) {
    page.classList.remove(pageOverflow);
  }
});

popupAdd.addEventListener('click', (event) => {
  event.target.classList.remove(popupOpened);

  if (event.target === popupAdd) {
    page.classList.remove(pageOverflow);
  }
});
