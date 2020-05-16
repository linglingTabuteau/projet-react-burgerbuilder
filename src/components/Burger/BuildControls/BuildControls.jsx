import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const CONTROLS = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {CONTROLS.map(ctr => {
      return <BuildControl
        key={ctr.label}
        label={ctr.label}
        added={()=>props.addedIngredients(ctr.type)}
        removed={()=>props.removedIngredients(ctr.type)}
        disabled={props.disabled[ctr.type]}
      />
    })}
  </div>
);

export default buildControls;