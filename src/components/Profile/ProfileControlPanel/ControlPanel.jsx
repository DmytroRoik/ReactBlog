import React from 'react';
import classes from './ControlPanel.css';

import ControlButton from './ControlButton/ControlButton';

const controlPanel=(props)=>(
  <div className={classes.ControlPanel}>
    <ControlButton
      title="Edit"
      btnStyle={ classes.editBtn}
      clicked={props.buttonClicked.edit}/>
    <ControlButton
      title="Delete"
      btnStyle={ classes.deleteBtn}
      clicked={props.buttonClicked.destroy}/>
  </div>
);
export default controlPanel;
