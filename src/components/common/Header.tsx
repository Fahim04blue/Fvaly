import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import logo from 'assets/images/fvaly.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppState } from 'redux/reducers/rootReducer';
import { Link } from 'react-router-dom';
import { logout } from 'redux/action creators/authActionCreator';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.auth);

  return (
    <div className="header__component">
      <div className="top__header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall /> <a href="tel:09638111666">09638111666</a>
            </li>
            <li>
              <FaRegEnvelope />
              <a href="mai-to:support@fvaly.com.bd">support@evaly.com.bd</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="https://play.google.com/store/apps/details?id=bd.com.evaly.fvalyshop">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>
      <div className="middle__header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <img
              onClick={() => history.push('/')}
              className="branding"
              src={logo}
              alt="Fvaly"
            />
            <InputGroup>
              <FormControl
                className="border-2 border-primary"
                placeholder="Search for..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <AiOutlineSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <FiShoppingBag onClick={() => history.push('/checkout')} />
                <span className="badge bg-primary">{cart.length}</span>
              </li>

              <li>
                <Link to="/login">
                  <BiUser />
                </Link>
              </li>
              {data && (
                <li className="btn">
                  <FaSignOutAlt onClick={() => dispatch(logout())} />
                </li>
              )}
            </ul>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News Feed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
