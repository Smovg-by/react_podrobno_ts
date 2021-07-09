import { useEffect, useState } from 'react'

type PropsType = {}

export const Clock: React.FC<PropsType> = props => {

  // BLL

  const [date, setDate] = useState<Date>(new Date())
  const [mode, setMode] = useState<string>('localTimeString')

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tick')
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  let onClickHandler = (mode: string) => {

    setMode(mode)
  }

  function dateSwitch(mode: string) {
    switch (mode) {
      case 'localTimeString':
        return date.toLocaleTimeString();
      case 'UTCString':
        return date.toUTCString()
      case 'ToString':
        return date.toString()
      default:
        return date.toString()
    }
  }

  // UI

  return (
    <div>
      <span>
        <div>{`mode is... ${mode}`}</div>
        {dateSwitch(mode)}
      </span>

      <div>
        <button onClick={() => onClickHandler('localTimeString')}>Local Time String</button>
        <button onClick={() => onClickHandler('UTCString')}>UTC String</button>
        <button onClick={() => onClickHandler('ToString')}>ToString</button>
      </div>
    </div>
  )
}
