//Объявление переменных
const page = document.querySelector('.root'); //видимая область страницы
const editButton = page.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const addButton = page.querySelector('.profile__add-button')//кнопка добавления
const popupEdit = page.querySelector('.popup-edit');//окно попап для редактирования
const popupAdd = page.querySelector('.popup-add');//окно попап для добавления карточки
const popupCard = page.querySelector('.popup-card');//окно попап для изображения карточки
const popupOpened = 'popup_opened'; //переменная с названием класса
const pageOverflow = 'root_overflow_hidden'; //переменная с названием класса
const inputName = popupEdit.querySelector('.popup__text_type_name'); //переменная со значением имени из попап
const inputCaption = popupEdit.querySelector('.popup__text_type_caption'); //переменная со значением описания из попап
const cardContent = page.querySelector('.card-container').content;//содержимое template элемента
const cardList = page.querySelector('.cards');//контейнер с карточками
const popupImage = page.querySelector('.popup__image');//фотография из карточки в попап
const popupFigcapion = page.querySelector('.popup__figcaption');//подпись для фотографии в попап
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


//очистка карточек
function resetCards() {
  const cards = page.querySelectorAll('.card');
  cards.forEach((el) => el.remove());
}

//Функция для загрузки информации на странице
function onLoad() {
  //информация профиля
  user.name = page.querySelector('.profile__name');
  user.caption = page.querySelector('.profile__caption');

  resetCards();
  //загрузка карточек с фотографиями мест
  initialCards.forEach((el, index) => {
      const card = cardContent.cloneNode(true);
      const cardImage = card.querySelector('.card__image');
      const cardName = card.querySelector('.card__name');

      cardImage.src = el.link;
      cardName.textContent = el.name;

      card.querySelector('.card__like-button').addEventListener('click', (event) => {
        event.target.classList.toggle('card__like-button_active');
      });

      card.querySelector('.card__delete-button').addEventListener('click', () => {
        initialCards.splice(index, 1);
        onLoad();
      });

      cardImage.addEventListener('click', () => {
        popupImage.src = el.link;
        popupFigcapion.textContent = el.name;

        openPopup(popupCard);
      });

      cardList.append(card);
    });
}
//вызов функции при загрузке или перезагрузке страницы
onLoad();
//логика открытия и закрытия окна попап
function openPopup(currentPopup) {
  const closeButton = currentPopup.querySelector('.popup__close');
  
  closeButton.addEventListener('click', () => closePopup(currentPopup));
  currentPopup.addEventListener('click', (event) => {
    if(event.target === currentPopup) {
      closePopup(currentPopup);
    }
  });

  currentPopup.classList.add(popupOpened);
  page.classList.add(pageOverflow);
}

function closePopup(currentPopup) {
  currentPopup.classList.remove(popupOpened);
  page.classList.remove(pageOverflow);
}
//открытие окна редактирования
function openAddForm() {
  openPopup(popupAdd);
}

//Функция открытия popup окна редактирования
function openEditForm() {
  openPopup(popupEdit);

  inputName.value = user.name.textContent;
  inputCaption.value = user.caption.textContent;
}
//Функция сохранения измененных данных
function saveProfile(evt) {
  evt.preventDefault();

  user.name.textContent = inputName.value;
  user.caption.textContent = inputCaption.value;

  closePopup(popupEdit);
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
  closePopup(popupAdd);
}

//События
addButton.addEventListener('click', openAddForm);
editButton.addEventListener('click', openEditForm);
popupEdit.addEventListener('submit', saveProfile);
popupAdd.addEventListener('submit', addCard);

