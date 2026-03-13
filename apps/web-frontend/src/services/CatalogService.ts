import axios from 'axios';
import { Product } from '../types/Product';

const API_BASE_URL = import.meta.env.DEV ? '/api' : 'http://localhost:3000';

export class CatalogService {
  static async getProducts(): Promise<Product[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/catalog/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  static async createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product | null> {
    try {
      const response = await axios.post(`${API_BASE_URL}/catalog/products`, product);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      return null;
    }
  }
}