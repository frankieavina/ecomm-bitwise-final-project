// Francisco Avina Ecommerce Project for Bitwise React Class
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store'; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
