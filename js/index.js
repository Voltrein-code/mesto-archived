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
const cardList = page.querySelector('.cards');//контейнер с карточками
const popupImage = page.querySelector('.popup__image');//фотография из карточки в попап
const popupFigcaption = page.querySelector('.popup__figcaption');//подпись для фотографии в попап
const addCardName = popupAdd.querySelector('.popup__text_type_image');//строка ввода имени карточки
const addCardLink = popupAdd.querySelector('.popup__text_type_link');//строка ввода ссылки на изоюражение карточки
const closeEditPopup = page.querySelector('.popup__close_type_edit-form');
const closeAddPopup = page.querySelector('.popup__close_type_add-form');
const closeImagePopup = page.querySelector('.popup__close_type_card-image');
const profileName = page.querySelector('.profile__name');
const profileCaption = page.querySelector('.profile__caption');
const addPopupButton = popupAdd.querySelector('.popup__submit');
const keyEscape = 'Escape';
const selectorObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit_active',
  inputErrorClass: 'popup__text_type_error',
};

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

  deactivateButton(submitButton, selectorObject);
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
