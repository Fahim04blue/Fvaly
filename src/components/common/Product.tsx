import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IProduct } from 'type';
import imageUrlParser from 'utils/imageUrlParser';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { name, image, _id } = product;
  const history = useHistory();
  const handleDetails = () => {
    history.push(`/product/${_id}`);
  };

  return (
    <Col md={3} className="mb-3 h-100">
      <Card
        style={{ cursor: 'pointer' }}
        className="h-100"
        onClick={handleDetails}
      >
        <Card.Img variant="top" src={imageUrlParser(image)} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
