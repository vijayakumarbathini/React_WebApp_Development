import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedraw'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true })

    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })

    }

    showToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar toggle={this.showToggleHandler} />
                <SideDrawer opened={this.sideDrawerOpenHandler} closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>)
    };
}
export default Layout;