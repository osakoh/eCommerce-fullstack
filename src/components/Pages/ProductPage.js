import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { _id } = useParams();

  console.log(_id);
  return <div>Product</div>;
};

export default Product;
