import { extractTextFromHTML } from '../shared/utils/string';
import { api } from './api';

interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  image: string;
}

export const getSiteInfo = async () => {
  const CATEGORY_ID = 33;
  const response = await api.get(`/posts?_embed&categories=${CATEGORY_ID}&per_page=10`);
  return response.data;
};

export const getPostInfo = async (id: number) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};


export const getDeliveryInfo = async () => {
  const SITE_DELIVERY_INFO = 27;
  const response = await api.get<WPPost>(`/posts/${SITE_DELIVERY_INFO}`);

  return extractTextFromHTML(response.data.content.rendered);
};

export const getReturnsInfo = async () => {
  const SITE_DELIVERY_INFO = 29;
  const response = await api.get<WPPost>(`/posts/${SITE_DELIVERY_INFO}`);

  return extractTextFromHTML(response.data.content.rendered);
};
