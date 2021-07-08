import { useEffect, useState } from 'react'

type PropsType = {}

const get2digitsString = (num: number) => {
  return num < 10 ? '0' + num : num
}

export const Clock: React.FC<PropsType> = props => {
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

  return (
    <div>
      <span>
        {mode === 'localTimeString'
          ? date.toLocaleTimeString()
          : date.toUTCString()}
      </span>
      :
      <div>
        <button onClick={() => setMode('localTimeString')}>
          Local Time String
        </button>
        <button onClick={() => setMode('UTCString')}>UTC String</button>
      </div>
    </div>
  )
}
