import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './store';
import GlobalStyle from './theme/globalStyles'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <GlobalStyle/>
        <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
