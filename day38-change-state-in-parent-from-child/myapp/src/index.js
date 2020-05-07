import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './App.css'

import configureStore from './store/configureStore'

const store = configureStore()
console.log("store ", store.getState())
ReactDOM.render(<App />, document.getElementById('root'));