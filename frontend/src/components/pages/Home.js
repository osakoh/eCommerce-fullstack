import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../common/ProductItem";
import { listProducts } from "../../actions/productActions";
import Loader from "../common/Loader";
import Message from "../common/Message";

const Home = () => {
  const dispatch = useDispatch();
  //select states from productList
  const productList = useSelector((state) => state.productList);
  // destructure states from productList: productListReducers
  const { loading, error, products } = productList;

  // api call
  useEffect(() => {
    // dispatch listProducts
    dispatch(listProducts());
  }, [dispatch]);

  // variable to hold the content depending on loading, error or products
  let homeContent;
  if (loading) {
    homeContent = <Loader />;
  } else if (error) {
    homeContent = (
      <Message variant='danger' heading='Error Loading!'>
        {error}
      </Message>
    );
  } else {
    homeContent = (
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={7} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <div>
      <h1>Latest Products</h1>
      {homeContent}
    </div>
  );
};

export default Home;
