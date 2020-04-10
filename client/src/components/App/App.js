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
import { BigItem } from '../Items';
<<<<<<< Updated upstream
import Cart from '../Cart';
=======
import BannerPromo from '../BannerPromo'
>>>>>>> Stashed changes

function App() {
  const [anItem, setAnItem] = useState(null)
  useEffect(() => {
    fetch('/items')
      .then(res=>res.json())
      .then(res=>setAnItem(res.filtered))
  }, []);

  return (
    <Router>
      <GlobalStyles />
<<<<<<< Updated upstream
      <Navbar /> 
      <Cart />
=======
      <Navbar />
      <BannerPromo/>
>>>>>>> Stashed changes
      <Switch>
        <Route path='/items'>
          {anItem?<Feed />:<div>not yet</div>}
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
