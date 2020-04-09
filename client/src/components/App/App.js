import React, {
  // useState,
  useEffect,
  } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';


function App() {

  useEffect(() => {

  }, []);

  return (
    <Router>
      <GlobalStyles />
      <div>App</div>
      <Navbar /> 
      <Switch>
        <Route path=''>
          {/* Componenet */}
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
