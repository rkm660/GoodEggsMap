import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts, getAllFarmers } from './actions'

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), () => {
  	store.dispatch(getAllFarmers())
	store.dispatch(getAllProducts())
 }
);