export default class Api {
  static async fetchMenu() {
    const response = await fetch(`http://localhost:5000/api/menu/menu`);
    const result = await response.json();

    return result;
  }
}
