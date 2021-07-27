import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../common/Rating";

const ProductDetail = () => {
  const { _id } = useParams();

  console.log(_id);
  return <div>Product</div>;
};

export default ProductDetail;
