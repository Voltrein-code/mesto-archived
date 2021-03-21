export default class Popup {
  constructor(popupSelector) {
    this.currentPopup = popupSelector;
    this._closeButton = this.currentPopup.querySelector('.popup__close');
    this._saveButton = this.currentPopup.querySelector('.popup__submit');
    
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOverlay = this._closeOverlay.bind(this);
  }

  //метод открытия попап
  open() {
    this.currentPopup.classList.add('popup_opened');

    this._saveButtonInitialText = this._saveButton.textContent;

    document.addEventListener('keydown', this._handleEscClose);
    this.currentPopup.addEventListener('click', this._closeOverlay);
  }

  renderLoading(isLoading) {
    this._loadingMessage = 'Сохранение... ';
    
    isLoading ? 
    this._saveButton.textContent = this._loadingMessage :
    this._saveButton.textContent = this._saveButtonInitialText;
  }

  //метод закрытия попап
  close() {
    this.currentPopup.classList.remove('popup_opened');

    this.renderLoading(false);

    document.removeEventListener('keydown', this._handleEscClose);
    this.currentPopup.removeEventListener('click', this._closeOverlay);
  }

  //метод закрытия попап окна клавишей Esc
  _handleEscClose(event) {
    if(event.key === 'Escape') {
      this.close();
    }
  }

  //метод закрытия попап окна по нажатию на оверлей
  _closeOverlay(event) {
    if(event.target === this.currentPopup) {
      this.close();
    }
  }

  //установка слушателей на попап
  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close())
  }
}