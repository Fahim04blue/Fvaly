import CartItem from 'components/Checkout/CartItem';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/reducers/rootReducer';
import { IProduct } from 'type';

const Checkout = () => {
  const cart: IProduct[] = useSelector((state: AppState) => state.cart);

  const totalCost = cart.reduce(
    (prevPrice, currentPrice) => prevPrice + currentPrice.price,
    0
  );
  return (
    <div className="my-3">
      <Container>
        <div className="wrapper bg-white rounded border p-5">
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="mt-5 d-flex flex-column align-items-end border-top pt-5">
            <h2 className="mb-4">Total : ৳ {totalCost}</h2>
            <button className="btn btn-lg btn-primary">Confirm Checkout</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
