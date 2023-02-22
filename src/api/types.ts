export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Image {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

export interface ProductDTO {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: false;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  categories: Category[];
  tags: Tag[];
  images: Image[];
}

interface OrderItem {
  product_id: number;
  quantity: number;
}

export interface Order {
  payment_method: PaymentOptions;
  billing: {
    first_name: string;
    address_1: string;
    country: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    address_1: string;
    country: string;
  };
  line_items: OrderItem[];
}

export enum PaymentOptions {
  CASH = 'CASH',
  BANK_TRANSFER = 'BANK_TRANSFER',
}
