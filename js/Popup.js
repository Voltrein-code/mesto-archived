export default class Popup {
  constructor(popupSelector) {
    this._currentPopup = popupSelector;
    this._closeButton = this._currentPopup.querySelector('.popup__close');
  }

  //метод открытия попап
  open() {
    this._currentPopup.classList.add('popup_opened');

    document.addEventListener('keydown', (event) =>  this._handleEscClose(event));
    this._currentPopup.addEventListener('click', (event) => this._closeOverlay(event));
  }

  //метод закрытия попап
  close() {
    this._currentPopup.classList.remove('popup_opened');

    document.removeEventListener('keydown', (event) =>  this._handleEscClose(event));
    this._currentPopup.removeEventListener('click', (event) => this._closeOverlay(event));
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