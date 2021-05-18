import classes from './OnOf.module.css';


export type OnOffPropsType = {
  on: boolean
  onClick: (on:boolean) => void
}

export function OnOff(props:OnOffPropsType) {

  const onStyle = {
    backgroundColor: props.on ? 'green' : 'white'
  }
  const offStyle = {
    backgroundColor: !props.on ? 'red' : 'white'
  }
  const indicatorStyle = {
    backgroundColor: !props.on ? 'red' : 'green'
  }

  return (
    <div className={classes.wrapper}>
      <div onClick={() => props.onClick(true)} style={onStyle} className={classes.button}>On
      </div>
      <div onClick={() => props.onClick(false)} style={offStyle} className={classes.button}>Off
      </div>
      <div style={indicatorStyle}
           className={classes.circle}>+
      </div>
    </div>
  )


}
