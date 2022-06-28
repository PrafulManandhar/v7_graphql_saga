import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./_redux/store";
import './style.scss'
import { BrowserRouter } from "react-router-dom";
import '../node_modules/antd/dist/antd.css';


import App from "./App";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

const root = createRoot(container!);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
