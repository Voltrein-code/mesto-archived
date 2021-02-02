//функция показа сообщения об ошибке валидации
function showInputError(formElement, inputElement, errorMessage, classObject) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(classObject.inputErrorClass);
  errorElement.textContent = errorMessage;
}

//функция скрытия сообщения об ошибке валидации
function hideInputError(formElement, inputElement, classObject) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(classObject.inputErrorClass);
  errorElement.textContent = '';
}

//проверка валиднсти
function checkInputValidity(formElement, inputElement, classObject) {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, classObject);
  } else {
    hideInputError(formElement, inputElement, classObject);
  }
}

//установка слушателей для форм
function setEventListeners(formElement, classObject) {
  const inputList = Array.from(formElement.querySelectorAll(classObject.inputSelector));
  const buttonElement = formElement.querySelector(classObject.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, classObject);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, classObject);
      toggleButtonState(inputList, buttonElement, classObject);
    });
  });
}

//получить статус для кнопки
function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//проверка статуса кнопки submit
function toggleButtonState (inputList, buttonElement, classObject) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.remove(classObject.activeButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.add(classObject.activeButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

//включение валидации
function enableValidation(classObject) {
  const formList = Array.from(page.querySelectorAll(classObject.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, classObject);
  })
}