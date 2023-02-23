import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

interface WooCommerceAPIResponse<T> {
  data: T;
}

const api = new WooCommerceRestApi({
  url: 'http://testweb2.site/',
  consumerKey: 'ck_7bbc96f69917879701d60527c4b68d2655bb1e43',
  consumerSecret: 'cs_291b65f80d1185e65d6cfe32e995f54004d8391b',
  queryStringAuth: true,
  version: 'wc/v3',
});

export async function getWooCommerceData<T>(
  endpoint: string
): Promise<WooCommerceAPIResponse<T>> {
  try {
    const response = await api.get(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postWooCommerceData<T>(
  endpoint: string,
  body?: unknown
): Promise<WooCommerceAPIResponse<T>> {
  try {
    const response = await api.post(endpoint, body);
    return response;
  } catch (error) {
    throw error;
  }
}
