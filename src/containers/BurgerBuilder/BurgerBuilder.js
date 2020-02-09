import React, { Component } from "react";
import WrappedComponent from "../../HOC/WrappedComponent";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };
  render() {
    return (
      <WrappedComponent>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </WrappedComponent>
    );
  }
}
export default BurgerBuilder;
