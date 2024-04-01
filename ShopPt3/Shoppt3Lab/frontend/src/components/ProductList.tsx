import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import { Product } from "../models/Product";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const maxPrice = searchParams.get("max-price");
        const includes = searchParams.get("includes");
        const limit = searchParams.get("limit");

        const fetchedProducts = await getProducts(
          maxPrice ? parseInt(maxPrice) : null,
          includes,
          limit ? parseInt(limit) : null
        );
        setProducts(fetchedProducts);
        setError(null);
      } catch (error) {}
      setLoading(false);
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <div className="product-list-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul className="product-list">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
