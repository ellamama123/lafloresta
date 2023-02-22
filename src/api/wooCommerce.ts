import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

interface WooCommerceAPIResponse<T> {
  data: T;
}

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WC_URL!,
  consumerKey: process.env.NEXT_PUBLIC_CONSUMER_KEY!,
  consumerSecret: process.env.NEXT_PUBLIC_CONSUMER_SECRET!,
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
