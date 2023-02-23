import { ProductDTO } from './types';
import { getWooCommerceData } from './wooCommerce';

export async function getAllFeaturedProducts() {
  const apiResponse = await getWooCommerceData<ProductDTO[]>('products');
  console.log('111', apiResponse);
  
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

export async function getProductByTag(tagId: number) {
  const apiResponse = await getWooCommerceData<ProductDTO>(`products?tag=${tagId}`);
  return apiResponse.data;
}
