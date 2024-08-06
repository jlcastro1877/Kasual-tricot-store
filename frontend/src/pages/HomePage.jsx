import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

/**
 * `HomePage` is a functional React component that displays a list of products.
 * It uses the `Row` and `Col` components from `react-bootstrap` to layout the products in a responsive grid.
 *
 * The `products` array is imported from the `../products` module and is expected to be an array of product objects.
 * Each product object should have a `name` property.
 *
 * @returns {JSX.Element} A JSX element representing the homepage with a list of products.
 */
const HomePage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/* Map over the products array to create a grid of product names */}
        {products.map((product) => (
          <Col
            Key={product._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            key={product.name}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
