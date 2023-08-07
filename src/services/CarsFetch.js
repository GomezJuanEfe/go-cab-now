import instance from './axios';

const host = import.meta.env.VITE_BASE_URL;

class Product {
  static async getAllCars() {
    const response = await fetch(host);
    const data = await response.json();
    return data;
  }

  static async fetchAllCars() {
    try {
      const { data, status } = await instance.get();
      return status === 200 ? data : new Error('No se pudo completar la solicitud');
    } catch (error) {
      return error;
    }
  }
}

export default Product;
