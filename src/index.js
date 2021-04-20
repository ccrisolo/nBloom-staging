import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import ReduxToastr from "react-redux-toastr";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import './index.css';
import './styles/main.css'

import App from './App';
import configureStore from "./store";
import reportWebVitals from './reportWebVitals';
import history from "./history";

export const store = configureStore(history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        showCloseButton={false}
        closeOnToastrClick
      />
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
