export interface ProductCardProps {
  product: string;
  addToCart: any;
  removeFromCart: any; 
  isInCart: any;
  title:string;
}
export interface ImageProps {
  product: string;
  title: any;
}
export interface CartProps {
  cart: any;
  removeFromCart: any;
}
