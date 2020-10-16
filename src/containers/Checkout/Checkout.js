import React,{ Component, Fragment } from "react";
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactDetails from '../Checkout/ContactDetails/ContactDetails'
import {connect} from 'react-redux'


class Checkout extends Component{
 

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
  
    checkoutContinueHandler = () => {
        const queryParams  =[];
        for(let i in this.props.ing){
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.props.ing[i]))
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout/contact-data',
            search: '?'+queryString
        })
    }

    render(){
        return(
            <Fragment>
            <CheckoutSummary ingredients={this.props.ing} cancel={this.checkoutCancelledHandler} continue={this.checkoutContinueHandler} />
            <Route path={this.props.match.path + '/contact-data'} render={(props)=><ContactDetails ingredients={this.props.ing} {...props}/>} />
            </Fragment>
        );
    }
}

const mapStatetoProps = state => {

    return{
        totalPrice: state.totalPrice,
        ing: state.ingredients
    }

}

export default connect(mapStatetoProps)(Checkout)