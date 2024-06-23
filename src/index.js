import React from 'react';
import ReactDOM from 'react-dom/client';
import {importCss} from './common/styles'
import App from './pages/app';
//import css files
importCss();
// render doom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
