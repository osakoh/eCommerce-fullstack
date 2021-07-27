import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
// when a link in a ProductItem is clicked, it takes the user to the ProductDetail page
const ProductItem = ({ product }) => {
  return (
    <Card className='my-3 p-3'>
      {/* links to a product detail */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      {/* links to a product detail */}

      <Card.Body>
        {/* links to a product detail */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        {/* links to a product detail */}

        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#ffee32"}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>£{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
