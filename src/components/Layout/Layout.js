import React from "react";
import "./Layout.css";
import WrappedComponent from "../../HOC/WrappedComponent";

const layout = props => (
  <WrappedComponent>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </WrappedComponent>
);

export default layout;
