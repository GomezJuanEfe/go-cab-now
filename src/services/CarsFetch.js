const host = import.meta.env.VITE_BASE_URL;

class Product {
  static async getAllCars() {
    const response = await fetch(host);
    const data = await response.json();
    return data;
  }
}

export default Product;
