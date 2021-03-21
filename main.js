(()=>{"use strict";var e=document.querySelector(".root"),t=e.querySelector(".profile__edit-button"),n=e.querySelector(".profile__add-button"),r=e.querySelector(".popup_type_edit-form"),o=e.querySelector(".popup_type_add-form"),i=e.querySelector(".popup_type_card-image"),a=r.querySelector(".popup__text_type_name"),c=r.querySelector(".popup__text_type_caption"),u=e.querySelector(".card-container").content,s=e.querySelector(".profile__name"),l=e.querySelector(".profile__caption"),f=o.querySelector(".popup__submit"),p=e.querySelector(".popup_type_card-delete"),h=e.querySelector(".profile__avatar-edit"),d=e.querySelector(".popup_type_avatar-form"),_=(o.querySelector(".popup__text_type_image"),o.querySelector(".popup__text_type_link"),{formSelector:".popup__container",inputSelector:".popup__text",submitButtonSelector:".popup__submit",activeButtonClass:"popup__submit_active",inputErrorClass:"popup__text_type_error"});function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r,o,i){var a=i.handleCardDelete,c=i.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateElement=t,this._cardData=n,this._handleCardClick=o,this._handleCardDelete=a,this._handleLikeCard=c,this._userId=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._templateElement.cloneNode(!0)}},{key:"_setDeleteButton",value:function(){this._cardData.owner._id!==this._userId&&this._deleteButton.classList.add("card__delete-button_hidden")}},{key:"setLike",value:function(e){var t=this;this._isLiked=e.likes.filter((function(e){return e._id==t._userId})).length>0,this._likeCounter.textContent=e.likes.length,this._isLiked?this._likeButton.classList.add("card__like-button_active"):this._likeButton.classList.remove("card__like-button_active")}},{key:"isLiked",value:function(){return this._isLiked}},{key:"getCard",value:function(){return this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardName=this._cardElement.querySelector(".card__name"),this._likeButton=this._cardElement.querySelector(".card__like-button"),this._deleteButton=this._cardElement.querySelector(".card__delete-button"),this._likeCounter=this._cardElement.querySelector(".card__like-counter"),this._cardImage.src=this._cardData.link,this._cardImage.alt=this._cardData.name,this._cardName.textContent=this._cardData.name,this._setDeleteButton(),this._setEventListeners(this._likeButton,this._deleteButton,this._cardImage),this._cardElement}},{key:"_setEventListeners",value:function(e,t,n){var r=this;e.addEventListener("click",(function(){return r._handleLikeCard()})),t.addEventListener("click",this._handleCardDelete),n.addEventListener("click",(function(){return r._handleCardClick(r._cardData)}))}},{key:"_likeCard",value:function(e){e.target.classList.toggle("card__like-button_active")}},{key:"deleteCard",value:function(){this._deleteButton.closest(".card").remove()}}])&&y(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selectorObject=t,this._validateItem=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(this.selectorObject.inputErrorClass),r.textContent=n}},{key:"_hideInputError",value:function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(this.selectorObject.inputErrorClass),n.textContent=""}},{key:"_checkInputValidity",value:function(e,t){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,t.validationMessage)}},{key:"_setEventListeners",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this.selectorObject.inputSelector)),r=e.querySelector(this.selectorObject.submitButtonSelector);this._toggleButtonState(n,r),this._validateItem.addEventListener("reset",(function(){n.forEach((function(o){t._hideInputError(e,o),t._toggleButtonState(n,r)}))})),n.forEach((function(o){o.addEventListener("input",(function(){t._checkInputValidity(e,o),t._toggleButtonState(n,r)}))}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"deactivateButton",value:function(e){e.classList.remove(this.selectorObject.activeButtonClass),e.setAttribute("disabled","disabled")}},{key:"_activateButton",value:function(e){e.classList.add(this.selectorObject.activeButtonClass),e.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?this.deactivateButton(t):this._activateButton(t)}},{key:"enableValidation",value:function(){this._setEventListeners(this._validateItem)}}])&&b(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){t?this._container.append(e):this._container.prepend(e)}}])&&g(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentPopup=t,this._closeButton=this.currentPopup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._closeOverlay=this._closeOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.currentPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this.currentPopup.addEventListener("click",this._closeOverlay)}},{key:"close",value:function(){this.currentPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this.currentPopup.removeEventListener("click",this._closeOverlay)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeOverlay",value:function(e){e.target===this.currentPopup&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()}))}}])&&S(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t.currentPopup.querySelector(".popup__image"),t._caption=t.currentPopup.querySelector(".popup__figcaption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e,L(j(a.prototype),"open",this).call(this)}}])&&w(t.prototype,n),a}(E);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n)).handleFormSubmit=r,t._saveButton=t.currentPopup.querySelector(".popup__submit"),t._saveButtonInitialText=t._saveButton.textContent,t._inputList=t.currentPopup.querySelectorAll(".popup__text"),t._form=t.currentPopup.querySelector(".popup__container"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputArray=Array.from(this._inputList),this._formInputs={},this._inputArray.forEach((function(t){return e._formInputs[t.name]=t.value})),this._formInputs}},{key:"close",value:function(){q(T(a.prototype),"close",this).call(this),this.renderLoading(!1),this._form.reset()}},{key:"renderLoading",value:function(e){this._loadingMessage="Сохранение... ",this._saveButton.textContent=e?this._loadingMessage:this._saveButtonInitialText}},{key:"setEventListeners",value:function(){var e=this;q(T(a.prototype),"setEventListeners",this).call(this),this.currentPopup.addEventListener("submit",(function(t){t.preventDefault(),e.handleFormSubmit(e._getInputValues())}))}}])&&R(t.prototype,n),a}(E);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return(F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e){F(J(a.prototype),"open",this).call(this),this.setSubmitHandler=e}},{key:"setEventListeners",value:function(){var e=this;F(J(a.prototype),"setEventListeners",this).call(this),this.currentPopup.addEventListener("submit",(function(t){t.preventDefault(),e.setSubmitHandler()}))}}])&&V(t.prototype,n),a}(E);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t){var n=t.nameSelector,r=t.captionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._avatar=document.querySelector(".profile__avatar")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.alt="Аватар пользователя: ".concat(e.name),this.userId=e._id}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&z(t.prototype,n),e}();function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_getServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Не удалось получить ответ от сервера. Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._getServerResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getServerResponse)}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._getServerResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getServerResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getServerResponse)}},{key:"like",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._getServerResponse)}},{key:"dislike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getServerResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getServerResponse)}}])&&K(t.prototype,n),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"c717fb8f-7e38-4c7d-b617-f552f6e3b5d3","Content-Type":"application/json"}}),W=new G({nameSelector:s,captionSelector:l});Q.getUserInfo().then((function(e){W.setUserInfo(e),W.setUserAvatar(e.avatar),Q.getCards().then((function(e){X.render(e)})).catch((function(e){console.log(e)}))}));var X=new k({renderer:function(e){ae(e,!0)}},".cards"),Y=new D({popupSelector:o,handleFormSubmit:function(e){Y.renderLoading(!0),Q.addCard(e).then((function(e){ae(e,!1),ne.deactivateButton(f),Y.close()})).catch((function(e){console.log(e)}))}}),Z=new D({popupSelector:r,handleFormSubmit:function(e){Z.renderLoading(!0),Q.setUserInfo(e).then((function(e){W.setUserInfo(e),Z.close()})).catch((function(e){console.log(e)}))}}),$=new D({popupSelector:d,handleFormSubmit:function(e){$.renderLoading(!0),Q.setAvatar(e).then((function(e){W.setUserAvatar(e.avatar),$.close()})).catch((function(e){console.log(e)}))}}),ee=new I(i),te=new M(p);Y.setEventListeners(),Z.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),$.setEventListeners();var ne=new m(_,o),re=new m(_,r),oe=new m(_,d);function ie(e){ee.open(e.name,e.link)}function ae(e,t){var n=new v(u,e,W.userId,ie,{handleCardDelete:function(){var e;e=n,te.open((function(){Q.deleteCard(e._cardData._id).then((function(){e.deleteCard(),te.close()})).catch((function(e){console.log("".concat(e))})),console.log(e)}))},handleLikeCard:function(){var t,r;r=e,((t=n).isLiked()?Q.dislike(r._id):Q.like(r._id)).then((function(e){t.setLike(e)})).catch((function(e){console.log("".concat(e))}))}}),r=n.getCard();n.setLike(e),X.addItem(r,t)}ne.enableValidation(),re.enableValidation(),oe.enableValidation(),n.addEventListener("click",(function(){return Y.open()})),h.addEventListener("click",(function(){return $.open()})),t.addEventListener("click",(function(){var e=W.getUserInfo();a.value=e.name,c.value=e.about,Z.open()}))})();