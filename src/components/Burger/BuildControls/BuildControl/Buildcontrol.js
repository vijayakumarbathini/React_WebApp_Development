import React from 'react'
import classes from './Buildcontrol.css'

const buildController = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.Label}</div>
      <button className={classes.Less} onClick={props.deleted} disabled={props.isDisabled} >Less</button>
      <button className={classes.More} onClick={props.added}>More</button>

    </div>
  );
}


export default buildController