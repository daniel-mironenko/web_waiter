export default class Api {
  static _checkStatus = async (response) => {
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  };

  static async _apiGET(url) {
    try {
      const response = await fetch(url);
      return this._checkStatus(response);
    } catch (error) {
      throw error;
    }
  }

  static async _apiPOST(url, payload) {
    try {
      const response = await fetch(url, {
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
      const response = await fetch(url, {
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
      return await this._apiGET(`/api/menu`);
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
      return await this._apiGET(`/api/orders/${id}`);
    } catch (error) {
      throw error
    }
  }

  static async updateActiveOrder(payload) {
    try {
      return await this._apiPUT(`/api/orders`, payload);
    } catch (error) {
      throw error
    }
  }

  static async addNewActiveOrder(payload) {
    try {
      return await this._apiPOST("/api/orders", payload);
    } catch (error) {
      throw error
    }
  }

  static async getUsersByPosition(position) {
    try {
      return await this._apiGET(`/api/personnel/${position}`);
    } catch (error) {
      throw error
    }
  }
}
