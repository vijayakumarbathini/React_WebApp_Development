import React, { Component } from "react";
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'
import {connect} from 'react-redux'
import {signUp_Async} from '../../store/actions/authenticationAction'
import { Redirect } from "react-router-dom";


class Auth extends Component {
  state = {
    userForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Mail Address",
        },
        value: "",
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
      },
    },
    isSignUp: true
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.signUp(this.state.userForm.email.value, this.state.userForm.password.value,this.state.isSignUp)
    
}


inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.userForm,
    };
    const updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier] = updatedFormElement;
    this.setState({ userForm: updatedForm });
  };


  switchHandler =() => {
    this.setState( prevState => {
        return {isSignUp: !prevState.isSignUp}
    })
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.userForm) {
      formElementsArray.push({
        id: key,
        config: this.state.userForm[key],
      });
    }
    let form = formElementsArray.map((element) => {
      return (
        <Input
          key={element.id}
          inputtype={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          change = {(event) => this.inputChangedHandler(event, element.id)}
        />
      );
    });

   
    if(this.props.isAuthenticated){
      return <Redirect to="/" />
    }
    return (
        
        <div className={classes.UserData}>
        <form onSubmit={this.submitHandler}>
            {form}
          <Button btnType="Success">
            SUBMIT
          </Button><br></br>
          <Button btnType = "Danger" clicked={this.switchHandler}>SWITCH TO {this.state.isSignUp ? 'SIGN IN' : 'SIGN UP' }</Button>
        </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return{
     isAuthenticated : state.auth.userId !== null
  }
}
const mapDispatchToProps = dispatch => {
    return {signUp : (email,password,isSignUp) => dispatch(signUp_Async(email,password,isSignUp))}
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
