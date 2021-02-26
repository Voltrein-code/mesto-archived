import {page, selectorObject} from './data.js';

export default class FormValidator {
  constructor(selectorObject) {
    this._selectorObject = selectorObject;
  }
  
  //метод показа сообщения об ошибке валидации
  _showInputError(formElement, inputElement, errorMessage, classObject) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(classObject.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  //метод скрытия сообщения об ошибке валидации
  _hideInputError(formElement, inputElement, classObject) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(classObject.inputErrorClass);
    errorElement.textContent = '';
  }

  //проверка валиднсти
  _checkInputValidity(formElement, inputElement, classObject) {
    if(!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, classObject);
    } else {
      this._hideInputError(formElement, inputElement, classObject);
    }
  }

  //установка слушателей для форм
  _setEventListeners(formElement, classObject) {
    const inputList = Array.from(formElement.querySelectorAll(classObject.inputSelector));
    const buttonElement = formElement.querySelector(classObject.submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement, classObject);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, classObject);
        this._toggleButtonState(inputList, buttonElement, classObject);
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
  deactivateButton(button, classObject) {
    button.classList.remove(classObject.activeButtonClass);
    button.setAttribute('disabled', 'disabled');
}

  //активация кнопки
  _activateButton(button, classObject) {
    button.classList.add(classObject.activeButtonClass);
    button.removeAttribute('disabled');
  }

  //проверка статуса кнопки submit
  _toggleButtonState (inputList, buttonElement, classObject) {
    if (this._hasInvalidInput(inputList)) {
      this.deactivateButton(buttonElement, classObject);
    } else {
      this._activateButton(buttonElement, classObject);
    }
  }

  //включение валидации
  enableValidation() {
    const formList = Array.from(page.querySelectorAll(this._selectorObject.formSelector));

    formList.forEach((formElement) => {
      this._setEventListeners(formElement, this._selectorObject);
    })

  }
}

//включение валидации
export const validateForm = new FormValidator(selectorObject);
validateForm.enableValidation();