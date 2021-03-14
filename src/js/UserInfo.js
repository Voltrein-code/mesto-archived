export default class UserInfo {
  constructor({ nameSelector, captionSelector }) {
    this._name = nameSelector;
    this._caption = captionSelector;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      caption: this._caption.textContent
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._caption.textContent = data.caption;
  }
}