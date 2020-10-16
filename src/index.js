import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import BurgerBuidlerReducer from './store/BurgerBuidlerReducer'
import {Provider} from 'react-redux'

const middleWare = store => {
    return next => {
        return action =>{
            console.log
        }
    }
}
const store = createStore(BurgerBuidlerReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


