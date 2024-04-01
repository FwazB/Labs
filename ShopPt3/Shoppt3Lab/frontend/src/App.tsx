import React, { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./services/productService";
import Main from "./components/Main";
import { Product } from "./models/Product";

function App() {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProductList(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="App">
      <Main productList={productList} />
    </div>
  );
}

export default App;
