import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products";
import ProductItem from "../common/ProductItem";

const Home = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={7} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
