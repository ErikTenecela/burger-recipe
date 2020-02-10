import React from "react";
import "./BuildControl.css";
const BuildControl = props => (
  <div className="BuilControl">
    <div className="label">{props.label}</div>
    <button className="Less" onClick={props.remove} disabled={props.disabled}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
