import { Col, Row } from 'react-bootstrap';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'redux/actions/cartAction';
import { IProduct } from 'type';
import imageUrlParser from 'utils/imageUrlParser';

interface IProps {
  item: IProduct;
}

const CartItem = ({ item }: IProps) => {
  const { name, image, price, _id } = item;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(_id as string));
  };

  return (
    <Row>
      <Col md={1}>
        <img className="img-fluid" src={imageUrlParser(image)} alt="" />
      </Col>
      <Col>
        <h5 className="mt-4">{name}</h5>
      </Col>
      <Col md={2} className="d-flex justify-content-between align-items-center">
        <button onClick={handleRemove} className="btn">
          <FaRegTimesCircle />
        </button>
        <h6 className="m-0">৳ {price}</h6>
      </Col>
    </Row>
  );
};

export default CartItem;
