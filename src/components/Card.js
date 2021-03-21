export default class Card {
  constructor(templateElement, cardData, userId, handleCardClick, { handleCardDelete, handleLikeCard }) {
    this._templateElement = templateElement;
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeCard = handleLikeCard;
    this._userId = userId;
  }

  //метод заполнения данных карточки и ее события
  _getTemplate() {
    const card = this._templateElement.cloneNode(true);

    return card;
  }

  //метод отрисовки кнопки удаления карточки принадлежащей текущему пользователю
  _setDeleteButton() {
    if (this._cardData.owner._id !== this._userId) {
      this._deleteButton.classList.add('card__delete-button_hidden');
    }
  }

  //метод прорисовки лайка
  setLike(data) {
    this._isLiked = data.likes.filter((item) => {
      return item._id == this._userId
    }).length > 0;

    this._likeCounter.textContent = data.likes.length;

    this._isLiked ? 
      this._likeButton.classList.add('card__like-button_active'):
      this._likeButton.classList.remove('card__like-button_active');
  }

  isLiked() {
    return this._isLiked;
  }

  getCard() {
    this._cardElement = this._getTemplate();

    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardName = this._cardElement.querySelector('.card__name');
    this._likeButton = this._cardElement.querySelector('.card__like-button');
    this._deleteButton = this._cardElement.querySelector('.card__delete-button');
    this._likeCounter = this._cardElement.querySelector('.card__like-counter');

    this._cardImage.src = this._cardData.link;
    this._cardImage.alt = this._cardData.name;
    this._cardName.textContent = this._cardData.name;
    

    this._setDeleteButton();

    this._setEventListeners(this._likeButton, this._deleteButton, this._cardImage)

    return this._cardElement;
  }

  //навешивание слушателей
  _setEventListeners(likeButton, deleteButton, cardImage) {
    likeButton.addEventListener('click', () => this._handleLikeCard());
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