export default class Popup {
  constructor(popupSelector) {
    this._currentPopup = popupSelector;
    this._closeButton = this._currentPopup.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOverlay = this._closeOverlay.bind(this);
  }

  //метод открытия попап
  open() {
    this._currentPopup.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
    this._currentPopup.addEventListener('click', this._closeOverlay);
  }

  //метод закрытия попап
  close() {
    this._currentPopup.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
    this._currentPopup.removeEventListener('click', this._closeOverlay);
  }

  //метод закрытия попап окна клавишей Esc
  _handleEscClose(event) {
    if(event.key === 'Escape') {
      this.close();
    }
  }

  //метод закрытия попап окна по нажатию на оверлей
  _closeOverlay(event) {
    if(event.target === this._currentPopup) {
      this.close();
    }
  }

  //установка слушателей на попап
  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close())
  }
}