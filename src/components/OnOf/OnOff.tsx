import classes from './OnOf.module.css'

type OnOffPropsType = {
  value: string
}

export function OnOff(props: OnOffPropsType) {
  if (props.value === 'on') {
    return (
      <div className={classes.wrapper}>
        <button
          className={classes.button + ' ' + classes.green}>On
        </button>
        <button
          className={classes.button}>Off
        </button>
        <div
          className={classes.circle + ' ' + classes.green}>+</div>
      </div>
    )
  } else {
    return (
      <div className={classes.wrapper}>
        <button
          className={classes.button}>On
        </button>
        <button
          className={classes.button + ' ' + classes.red}>Off
        </button>
        <div
          className={classes.circle + ' ' + classes.red}>+</div>
      </div>
    )
  }
}
