export interface StaticProductProps {
  title: string ;
  image: any;
  category:string;
  price:number;
  id:any;
}

export interface ProductCardProps extends StaticProductProps {
  addToCart: any;
  removeFromCart: any; 
  isInCart:boolean;
}

export interface ProductCardsProps {
  cart:any;
  addToCart: any; 
  removeFromCart: any;
}

export interface ImageProps {
  product: string;
  title: any;
}

export interface CartProps {
  cart: any;
  removeFromCart: any;
}
