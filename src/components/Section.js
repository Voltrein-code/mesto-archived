export default class Sections {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  render(data) {
    data.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(item, isInitial) {
    isInitial ?
      this._container.append(item) :
      this._container.prepend(item);
  }
}