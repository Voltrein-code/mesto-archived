export default class Card {
  constructor(templateElement, cardData, handleCardClick, {handleCardDelete}) {
    this._templateElement = templateElement;
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
  }

  //метод заполнения данных карточки и ее события
  _getTemplate() {
    const card = this._templateElement.cloneNode(true);

    return card;
  }
  
  getCard() {
    this._cardElement = this._getTemplate();

    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardName = this._cardElement.querySelector('.card__name');
    this._likeButton = this._cardElement.querySelector('.card__like-button');
    this._likeCounter = this._cardElement.querySelector('.card__like-counter');
    this._deleteButton = this._cardElement.querySelector('.card__delete-button');

    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._cardName.textContent = this._cardData.name;
    this._likeCounter.textContent = this._cardData.likes.length;

    this._setEventListeners(this._likeButton, this._deleteButton, this._cardImage)

    return this._cardElement;
  }

  //навешивание обработчиков
  _setEventListeners(likeButton, deleteButton, cardImage) {
    likeButton.addEventListener('click', (event) => this._likeCard(event));
    deleteButton.addEventListener('click', this._handleCardDelete);
    cardImage.addEventListener('click', () => this._handleCardClick(this._cardData));
  }

  //метод лайка карточки
  _likeCard(event) {
    event.target.classList.toggle('card__like-button_active')
  }

  //метод удаления карточки
  deleteCard() {
    this._deleteButton.closest('.card').remove();
  }
}