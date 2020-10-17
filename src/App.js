import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Authentication/Auth'

class App extends Component {
  render() {
    console.log('App.js')
    return (
      <BrowserRouter> 
        <div>
          <Layout>
            <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders"  component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
            
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
