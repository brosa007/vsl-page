export interface Product {
  product_id: number;
  name: string;
  price: number;
  discount: number;
  freight: string;
  image_url: string;
  best_choice: boolean;
}

export interface ApiData {
  checkout_id: number;
  identifier: string;
  video_headline: string;
  video_sub_headline: string;
  video_url: string;
  products: Product[];
  created_at: string;
  updated_at: string;
}
export interface ApiResponse {
  HTTPStatus: number;
  executed: boolean;
  userIdentified: boolean;
  message: string;
  userToken: string;
  object: ApiData[];
}
