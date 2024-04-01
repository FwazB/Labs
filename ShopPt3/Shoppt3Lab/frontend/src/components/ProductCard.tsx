import React from "react";
import "./ProductCard.css";
import { Product } from "../models/Product";
import Image from "../images/coming-soon.jpg";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <img
        src={product.photoURL || Image}
        alt={product.name}
        style={{ width: "100px", height: "100px" }}
      />
    </li>
  );
};
