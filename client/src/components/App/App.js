import React, {
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Footer from '../Footer';
import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
import Feed from '../Feed';
import Checkout from '../Checkout';
import { BigItem } from '../Items';
import Cart from '../Cart';
import HomePage from '../HomePage';
import { useAuth0 } from "../SignIn/react-auth0-spa";
import Profile from "../SignIn/Profile";
import history from "../../utils/history";
import PrivateRoute from '../SignIn/PrivateRoute';
import OrderConfirmation from '../OrderConfirmation';
import ScrollToTop from '../../ScrollToTop';
import CompanyFeed from '../CompanyFeed';
import FourOhFour from '../fourOhFour';
import SearchFeed from '../SearchFeed'
import OrderSuccess from '../OrderSuccess';

function App() {

  // check if the user is logged in, or if there is anything in 'cart' in local storage
  // getFromLocalStorage(id?) || getFromLocalStorage('temp') || 

  return (
    <Router history={history}>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path="/profile" component={Profile} />
      {/* <Cart /> */}
        <Route path='/items' exact>
          <Feed />
        </Route>
        <Route path='/items/:itemId' exact>
          {/*render the page component*/}
          <BigItem />
        </Route>
        <Route path='/items/filter/:category'>
          {/*render the page component*/}
          <Feed />
        </Route>
        <Route path='/companies/:companyId'>
          <CompanyFeed />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/search/:searchQuery'>
          <SearchFeed />
        </Route>
        <Route path='/order-confirmation'>
          <OrderConfirmation />
        </Route>
        <Route exact path='/order-success/:orderId'>
          <OrderSuccess />
        </Route>
        <Route path='*'>
          <FourOhFour />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
