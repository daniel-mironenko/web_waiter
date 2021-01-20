export default class Api {
  static _endPoint = `http://localhost:5000`;

  static async _apiGET(url) {
    const response = await fetch(`${this._endPoint}${url}`);
    const result = await response.json();
    return result;
  }

  static async fetchMenu() {
    return await this._apiGET(`/api/menu/menu`);
  }
}
