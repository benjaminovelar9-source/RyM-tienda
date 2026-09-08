export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category?: string;
  active?: boolean;
};

export const demoProducts: Product[] = [
  {
    id: "1",
    name: "Kanekalon",
    description: "Extensiones para trenzas.",
    price: 4000,
    category: "Kanekalon",
    active: true
  },
  {
    id: "2",
    name: "Gel larga duración",
    description: "Excelente fijación.",
    price: 4000,
    category: "Geles",
    active: true
  }
];
