import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrapedComponent,axios) => {

    return class extends Component{
        
        state = {
            error: null
        }
        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req
            })
            axios.interceptors.response.use(res=>res,error => {
                this.setState({error:error});
            })
        }

        errorConfirmHandler = () => {
            this.setState({error:null})
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error}
                    clicked ={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
    
                    </Modal>
                    <WrapedComponent {...this.props}/>
                </Aux>
                
            )
        }
        }
    }

export default withErrorHandler