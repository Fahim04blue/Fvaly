import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Help = lazy(() => import('./pages/Help/Help'));
const ProductDetails = lazy(
  () => import('pages/Product Details/ProductDetails')
);
const Checkout = lazy(() => import('pages/Checkout/Checkout'));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/checkout/" component={Checkout} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
