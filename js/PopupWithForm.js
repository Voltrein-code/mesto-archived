import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputArray = Array.from(this._currentPopup.querySelectorAll('.popup__text'));
    this._formInputs = {};
    this._inputArray.forEach(input => this._formInputs[input.name] = input.value);
    return this._formInputs;
  }

  close() {
    super.close();

    this._currentPopup.querySelector('.popup__container').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._currentPopup.addEventListener('submit', (event) => {
      event.preventDefault();

      this.handleFormSubmit(this._getInputValues());
    })
  }
}