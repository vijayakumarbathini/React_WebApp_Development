import React, { Component, Suspense } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout'
import Auth from './containers/Authentication/Auth'
import Logout from './containers/Authentication/Logout'

const LazyOrders = React.lazy(
    import('./containers/Orders/Orders')
);
class App extends Component {
  render() {
    console.log('App.js')
    return (
      <BrowserRouter> 
        <div>
          <Layout>
            <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders"  render={() => <Suspense component={LazyOrders}/> } />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
            
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
