import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(each => (
        <BuildControl
          label={each.label}
          key={each.label}
          added={() => props.ingredientAdded(each.type)}
          remove={() => props.removeIngredients(each.type)}
          disabled={props.disabledInfo[each.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
