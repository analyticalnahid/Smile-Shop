import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import ProductItem from "../components/product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/action/productAction";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomePage() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomePage;
