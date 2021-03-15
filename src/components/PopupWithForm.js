import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._inputList = this._currentPopup.querySelectorAll('.popup__text');
    this._form = this._currentPopup.querySelector('.popup__container');
  }

  _getInputValues() {
    this._inputArray = Array.from(this._inputList);
    this._formInputs = {};
    this._inputArray.forEach(input => this._formInputs[input.name] = input.value);
    return this._formInputs;
  }

  close() {
    super.close();

    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._currentPopup.addEventListener('submit', (event) => {
      event.preventDefault();

      this.handleFormSubmit(this._getInputValues());
    })
  }
}