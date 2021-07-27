import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../common/Rating";
import products from "../../products";

const ProductDetail = () => {
  // destructure the product id using useParams hook; whatever name was used in the path(path='/product/:id') in app.js is used here
  const { id } = useParams();
  // extract a specific product which matches the id; both id's are of a 'string' type
  const product = products.find((p) => p._id === id);

  return (
    <div>
      {/* links back to the homepage */}
      <Link to='/' className='btn btn-light btn-sm my-3'>
        Go to home
      </Link>
      {/* links back to the homepage */}

      <Row>
        <Col sm={8} md={6} className='mb-3'>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col sm={2} md={3} className='mb-3'>
          <ListGroup variant='flush'>
            {/* product name */}
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            {/* product name */}

            {/* product rating */}
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color='#ffee32'
              />
            </ListGroup.Item>
            {/* product rating */}

            {/* product price */}
            <ListGroup.Item>Price: £{product.price}</ListGroup.Item>
            {/* product price */}

            {/* product description */}
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            {/* product description */}
          </ListGroup>
        </Col>

        {/*  */}
        <Col sm={2} md={3} className='mb-3'>
          <Card>
            {/* product price */}
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>£{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            {/* product price */}

            <ListGroup variant='flush'>
              {/* product stock */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* product stock */}

              <ListGroup.Item>
                <Row>
                  <Button
                    disabled={product.countInStock === 0}
                    className='btn-dark'
                    type='button'
                  >
                    Add to Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
