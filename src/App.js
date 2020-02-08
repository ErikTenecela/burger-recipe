import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuild from "./containers/BurgerBuilder/BurgerBuilder";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuild />
        </Layout>
      </div>
    );
  }
}

export default App;
