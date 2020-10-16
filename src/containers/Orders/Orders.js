import React, { Component } from 'react'
import Order from './Order/Order'
import axios from '../../axios-order'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json').then(res => {
                this.setState({loading: false});
        }).catch(err => {
            console.log(err);
        })
    }
    render() {

        return (
            <div><Order />
            <Order /></div>

        );
    }
}

export default Orders