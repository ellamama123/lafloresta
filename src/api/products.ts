import { ProductDTO } from './types';
import { getWooCommerceData } from './wooCommerce';

export async function getAllFeaturedProducts() {
  const apiResponse = await getWooCommerceData<ProductDTO[]>('products');
  return apiResponse.data.filter((product) => product.featured);
}

export async function getAllProducts() {
  const apiResponse = await getWooCommerceData<ProductDTO[]>('products');
  return apiResponse.data;
}

export async function getProductById(pid: number) {
  const apiResponse = await getWooCommerceData<ProductDTO>(`products/${pid}`);
  return apiResponse.data;
}
