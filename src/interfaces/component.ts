export interface ProductProps {
  title: string ;
  image: any;
  category:string;
  price:number;
  id:number;
}
export interface ProductCardProps {
  product: ProductProps;
  addToCart: any;
  removeFromCart: any; 
  isInCart: any;
}
export interface ImageProps {
  product: string;
  title: any;
}
export interface CartProps {
  cart: any;
  removeFromCart: any;
}
