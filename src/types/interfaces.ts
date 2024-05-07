interface ISize {
  width: number;
  height: number;
}

interface IComment { 
    id: number; 
    productId: number; 
    description: string; 
    date: string 
}

export interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: ISize;
  weight: string;
  comments: IComment[];
}

export interface IListProducts {
  list: IProduct[];
}

export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}