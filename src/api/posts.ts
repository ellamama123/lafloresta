import { extractTextFromHTML } from '../shared/utils/string';
import { api } from './api';

export const getSiteInfo = () => {
  const SITE_INFO_POST_ID = 1;
  return api.get(`/posts/${SITE_INFO_POST_ID}`);
};

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
}
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
