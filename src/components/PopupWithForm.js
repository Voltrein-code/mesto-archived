import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._saveButton = this.currentPopup.querySelector('.popup__submit');
    this._saveButtonInitialText = this._saveButton.textContent;
    this._inputList = this.currentPopup.querySelectorAll('.popup__text');
    this._form = this.currentPopup.querySelector('.popup__container');
  }

  _getInputValues() {
    this._inputArray = Array.from(this._inputList);
    this._formInputs = {};
    this._inputArray.forEach(input => this._formInputs[input.name] = input.value);
    return this._formInputs;
  }

  close() {
    super.close();

    this.renderLoading(false);
    this._form.reset();
  }

  renderLoading(isLoading) {
    this._loadingMessage = 'Сохранение... ';
    
    isLoading ? 
    this._saveButton.textContent = this._loadingMessage :
    this._saveButton.textContent = this._saveButtonInitialText;
  }

  setEventListeners() {
    super.setEventListeners();
    this.currentPopup.addEventListener('submit', (event) => {
      event.preventDefault();

      this.handleFormSubmit(this._getInputValues());
    })
  }
}