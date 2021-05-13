import classes from './UncontrolledOnOf.module.css';
import {useState} from 'react';

// type OnOffPropsType = {
//   value: string
// }

export function UncontrolledOnOff() {

  let [on, setOn] = useState(false);

  const onStyle = {
    backgroundColor: on ? 'green' : 'white'
  }
  const offStyle = {
    backgroundColor: !on ? 'red' : 'white'
  }
  const indicatorStyle = {
    backgroundColor: !on ? 'red' : 'green'
  }

  return (
    <div className={classes.wrapper}>
      <div onClick={() => {
        setOn(true)
      }} style={onStyle} className={classes.button}>On
      </div>
      <div onClick={() => {
        setOn(false)
      }} style={offStyle} className={classes.button}>Off
      </div>
      <div style={indicatorStyle}
           className={classes.circle}>+
      </div>
    </div>
  )
}
