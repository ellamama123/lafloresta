import { getWooCommerceData } from './wooCommerce';

export function getAllTags() {
  return getWooCommerceData('products/tags');
}

export function getTagById(id: number) {
  return getWooCommerceData(`products/tags/${id}`);
}
