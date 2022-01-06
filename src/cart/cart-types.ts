export type TCart = {
  userId: string;
  productsId: string[];
};

export type TCartContext = {
  items?: [];
  invalidateCache: () => void;
};
