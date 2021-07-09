import { useEffect, useState } from 'react'
import styles from './Analog.module.css'

type PropsType = {}

export const Analog: React.FC<PropsType> = props => {

  // BLL

  function handleDate() {
    const date = new Date()

    let hours = formatTime(date.getHours())
    let minutes = formatTime(date.getMinutes())
    let seconds = formatTime(date.getSeconds())
    setTime({ hours, minutes, seconds })
  }

  function formatTime(time: any) {
    return time < 10 ? `0${time}` : time
  }

  const [time, setTime] = useState({ hours: '', minutes: '', seconds: '' })

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleDate()
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const { hours, minutes, seconds } = time
  const secondsStyle = {
    transform: `rotate(${+seconds * 6}deg)`
  }
  const minutesStyle = {
    transform: `rotate(${+minutes * 6}deg)`
  }
  const hoursStyle = {
    transform: `rotate(${+hours * 30}deg)`
  }
  // UI

  return (
    <div className={styles.clock}>
      <h3>Analog clock</h3>
      <div className={styles.analogClock}>
        <div className={styles.dialSeconds} style={secondsStyle} />
        <div className={styles.dialMinutes} style={minutesStyle} />
        <div className={styles.dialHours} style={hoursStyle} />
      </div>
      <div className={styles.digitalClock}>{`${time.hours}:${time.minutes}:${time.seconds}`}</div>
    </div>
  )
}
