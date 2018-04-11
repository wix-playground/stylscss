import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {wixAxiosConfig} from 'wix-axios-config';
import App from './components/App';

const baseURL = window.__BASEURL__;

wixAxiosConfig(axios, {baseURL});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
