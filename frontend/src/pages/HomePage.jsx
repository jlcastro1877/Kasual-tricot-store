import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <Row>
            {/* Map over the products array to create a grid of product names */}
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
