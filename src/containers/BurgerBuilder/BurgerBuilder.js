import React, { Component } from "react";
import WrappedComponent from "../../HOC/WrappedComponent";

class BurgerBuilder extends Component {
  render() {
    return (
      <WrappedComponent>
        <div>Burger</div>
        <div>Build Controls</div>
      </WrappedComponent>
    );
  }
}
export default BurgerBuilder;
