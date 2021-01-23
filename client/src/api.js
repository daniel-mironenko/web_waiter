export default class Api {
  static _endPoint = `http://localhost:5000`;

  static _checkStatus = async (response) => {
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  };

  static async _apiGET(url) {
    try {
      const response = await fetch(`${this._endPoint}${url}`);
      return this._checkStatus(response);
    } catch (error) {
      throw error;
    }
  }

  static async _apiPOST(url, payload) {
    try {
      const response = await fetch(`${this._endPoint}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      return this._checkStatus(response);
    } catch (error) {
      throw error;
    }
  }

  static async _apiPUT(url, payload) {
    try {
      const response = await fetch(`${this._endPoint}${url}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      return this._checkStatus(response);
    } catch (error) {
      
    }
  }

  static async fetchMenu() {
    try {
      return await this._apiGET(`/api/menu/menu`);
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(userInfo) {
    try {
      return await this._apiPOST(`/api/personnel/login`, userInfo);
    } catch (error) {
      throw error
    }
  }

  static async fetchOrdersById(id) {
    try {
      return await this._apiGET(`/api/orders/orders/${id}`);
    } catch (error) {
      throw error
    }
  }

  static async updateActiveOrder(payload) {
    try {
      return await this._apiPUT(`/api/orders/order`, payload)
    } catch (error) {
      throw error
    }
  }
}
