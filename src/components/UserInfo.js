export default class UserInfo {
  constructor({ nameSelector, captionSelector }) {
    this._name = nameSelector;
    this._about = captionSelector;
    this._avatar = document.querySelector('.profile__avatar');
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.alt = `Аватар пользователя: ${data.name}`;

    this.userId = data._id;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }
}