import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactDetails.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-order";
import Input from "../../../components/UI/Input/Input";

class ContactDetails extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", display: "Fastest" },
            { value: "cheapest", display: "Cheapest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData =[];
    for(let data in this.state.orderForm){
        formData[data] = this.state.orderForm[data].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      orderData: formData
    }

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push("/");
        return response;
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push("/");
        console.log(error);
        return Promise.reject;
      });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandlerß}>
        {formElementsArray.map((element) => {
          return (
            <Input
              key={element.id}
              inputtype={element.config.elementType}
              elementConfig={element.config.elementConfig}
              value={element.config.value}
              change={(event) => this.inputChangedHandler(event, element.id)}
            />
          );
        })}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactDetails;
