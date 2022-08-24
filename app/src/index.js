import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import Maker from './components/Maker';
import Example from './components/Example';
import Layout from './components/Layout';

const store = createStore(reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="maker" element={<Maker />}/>
              <Route path="example" element={<Example />}/>
          </Route>
        </Routes>
    </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
