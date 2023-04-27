export interface IProduct {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  address: string,
  categoryId: string;
  createdAt: string,
  description?: string;
}
