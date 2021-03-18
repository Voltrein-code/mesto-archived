import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(handler) {
    super.open();
    
    this.setSubmitHandler = handler;
  }

  setEventListeners() {
    super.setEventListeners();

    this.currentPopup.addEventListener('submit', (event) => {
      event.preventDefault();

      this.setSubmitHandler();
    })
  }
}