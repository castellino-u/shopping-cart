export interface Product {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  };
  productType: "FISICO" | "DIGITAL"; // Enum equivalente
  sex: "Hombre" | "Mujer" | "Unisex"; // Ajustalo según tus opciones válidas
  prices: {
    id: number;
    amount: number;
    currency: string;
  };
  image: {
    id: number;
    url: string;
  };
  sizes: {
    id: number;
    label: string;
  }[];
  colors: {
    id: number;
    name: string;
  }[];
}