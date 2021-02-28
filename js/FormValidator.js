export default class FormValidator {
  constructor(selectorObject, validateItem) {
    this.selectorObject = selectorObject;
    this._validateItem = validateItem;
  }
  
  //метод показа сообщения об ошибке валидации
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this.selectorObject.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  //метод скрытия сообщения об ошибке валидации
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this.selectorObject.inputErrorClass);
    errorElement.textContent = '';
  }

  //проверка валиднсти
  _checkInputValidity(formElement, inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  //установка слушателей для форм
  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this.selectorObject.inputSelector));
    const buttonElement = formElement.querySelector(this.selectorObject.submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  //получить статус для кнопки
  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //деактивация кнопки
  deactivateButton(button) {
    button.classList.remove(this.selectorObject.activeButtonClass);
    button.setAttribute('disabled', 'disabled');
}

  //активация кнопки
  _activateButton(button) {
    button.classList.add(this.selectorObject.activeButtonClass);
    button.removeAttribute('disabled');
  }

  //проверка статуса кнопки submit
  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this.deactivateButton(buttonElement);
    } else {
      this._activateButton(buttonElement);
    }
  }

  //включение валидации
  enableValidation() {
      this._setEventListeners(this._validateItem, this.selectorObject);
  }
}