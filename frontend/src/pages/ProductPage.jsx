import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

const ProductPage = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>In Stock: {product.countInStock}</p>
      <p>
        Rating: {product.rating} ({product.numReviews} reviews)
      </p>
    </div>
  );
};

export default ProductPage;
