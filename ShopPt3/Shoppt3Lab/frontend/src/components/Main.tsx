import React from "react";
import { ProductList } from "./ProductList";
import { Product } from "../models/Product";

interface MainProps {
  productList: Product[];
}

const Main: React.FC<MainProps> = ({ productList }) => {
  return (
    <main>
      <ProductList products={ProductList} />
    </main>
  );
};

export default Main;
