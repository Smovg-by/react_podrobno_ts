import classes from './UncontrolledOnOf.module.css';
import {useState} from 'react';

export type OnOffPropsType = {
  defaultOn?: boolean
}

export function UncontrolledOnOff(props: OnOffPropsType) {

  let [on, setOn] = useState(props.defaultOn? props.defaultOn : false );

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
