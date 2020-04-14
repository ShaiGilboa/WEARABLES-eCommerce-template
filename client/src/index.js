import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from "./components/SignIn/react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";
import App from './components/App';
import configureStore from './Redux/store';


// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
      <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
