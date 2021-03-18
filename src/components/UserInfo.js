export default class UserInfo {
  constructor({ nameSelector, captionSelector }) {
    this._name = nameSelector;
    this._about = captionSelector;
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
  }
}