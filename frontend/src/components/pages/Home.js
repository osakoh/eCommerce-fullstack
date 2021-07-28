import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../common/ProductItem";
import axios from "axios";

const Home = () => {
  // products state
  const [products, setProducts] = useState([]);

  // api call
  useEffect(
    () => {
      const fetchProducts = async () => {
        try {
          const { data } = await axios.get("/api/products/");
          // setproducts
          setProducts(data);
        } catch (error) {
          console.log(error, "from Home JS");
        }
      };

      // call fetchProducts method
      fetchProducts();
    },

    // eslint-disable-next-line
    []
  );

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
