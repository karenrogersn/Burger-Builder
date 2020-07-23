import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.removed} className={classes.Less} disabled={props.removerDisabled}>
        {/* the less button will be disabled if an ingredient has a amount of <= 0  */}
        Less
      </button>
      <button onClick={props.added} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
