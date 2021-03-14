export default class Card {
  constructor(templateElement, cardData, handleCardClick) {
    this._templateElement = templateElement;
    this._cardData = cardData;
    this._handleCardClick = handleCardClick;
  }

  //метод заполнения данных карточки и ее события
  getCard() {
    const card = this._templateElement.cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardName = card.querySelector('.card__name');
    const likeButton = card.querySelector('.card__like-button');
    const deleteButton = card.querySelector('.card__delete-button');

    cardImage.src = this._cardData.link;
    cardImage.alt = this._cardData.name;
    cardName.textContent = this._cardData.name;

    this._setEventListeners(likeButton, deleteButton, cardImage)

    return card;
  }

  //навешивание обработчиков
  _setEventListeners(likeButton, deleteButton, cardImage) {
    likeButton.addEventListener('click', (event) => this._likeCard(event));
    deleteButton.addEventListener('click', (event) => this._deleteCard(event));
    cardImage.addEventListener('click', () => this._handleCardClick(this._cardData));
  }

  //метод лайка карточки
  _likeCard(event) {
    event.target.classList.toggle('card__like-button_active')
  }

  //метод удаления карточки
  _deleteCard(event) {
    event.target.closest('.card').remove();
  }
}