import React, {
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
import Feed from '../Feed';
import Checkout from '../Checkout';
import { BigItem } from '../Items';
import Cart from '../Cart';
import HomePage from '../HomePage';

function App() {
  // const [anItem, setAnItem] = useState(null);
  // const [aCompany, setACompany] = useState(null);

  useEffect(() => {
    // fetch('/items')
    //   .then(res => res.json())
    //   .then(res => setAnItem(res.filtered));

    // fetch('/company')
    //   .then(res => res.json())
    //   .then(data => (setACompany(data)))
    //   .then(console.log(aCompany));
  }, []);


  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Route path='/' exact>
        <HomePage />
      </Route>
      {/* <Cart /> */}
      <Switch>
        <Route path='/items' exact>
          <Feed />
        </Route>
        <Route path='/items/:itemId' >
          {/*render the page component*/}
          <BigItem />
        </Route>
        <Route path='/companies' exact>
        </Route>
        <Route path='/checkout' exact>
          <Checkout />
        </Route>
      </Switch>
      {/*Footer*/}
    </Router>
  );
}

export default App;
