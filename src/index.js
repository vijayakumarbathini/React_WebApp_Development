import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, compose, applyMiddleware} from 'redux'
import BurgerBuidlerReducer from './store/reducers/BurgerBuidlerReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


//Using thunk as a middle ware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(BurgerBuidlerReducer,   composeEnhancers(
    applyMiddleware(thunk)
));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


