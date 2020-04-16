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
import MockItem from '../Items/MockItem';

import CompanyFeed from '../CompanyFeed';
import FourOhFour from '../fourOhFour';

function App() {
 
  // check if the user is logged in, or if there is anything in 'cart' in local storage
  // getFromLocalStorage(id?) || getFromLocalStorage('temp') || 

  return (
    <Router history={history}>
      <GlobalStyles />
      <Navbar />
      <Switch>
<<<<<<< Updated upstream
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path="/profile" component={Profile} />
        {/* <Cart /> */}
=======
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path="/profile" component={Profile} />
      {/* <Cart /> */}
>>>>>>> Stashed changes
        <Route path='/items' exact>
          <Feed />
        </Route>
        <Route path='/items/:itemId' >
          {/*render the page component*/}
          <BigItem />
        </Route>
        <Route path='/companies/:companyId'>
          <CompanyFeed />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
<<<<<<< Updated upstream
        <Route path='*'>
          <FourOhFour />
        </Route>
=======
        <BannerPromo />
>>>>>>> Stashed changes
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
