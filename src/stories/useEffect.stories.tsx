import { useEffect, useState } from 'react'

export default {
  title: 'useEffect demo'
}
//
//
//
export const Example1 = () => {

  let [fake, setFake] = useState(1)
  let [counter, setCounter] = useState(1)

  console.log('render Example1');

  useEffect(() => {
    console.log('use useEffect');
    document.title = counter.toString()
  }, [fake])

  return (
    <>
      <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
      <button onClick={() => { setFake(fake + 1) }}>Increment</button>
      Counter: {counter}
      Fake: {fake}
    </>
  )
}
//
//
//
export const SetTimeoutExample = () => {

  let [fake, setFake] = useState(1)
  let [counter, setCounter] = useState(1)

  console.log('render setTimeoutExample');

  useEffect(() => {
    console.log('use useEffect');
    const intervalId = setInterval(() => {
      setCounter((state) => state + 1)
    }, 1000)
    return () => { clearInterval(intervalId) }
  }, []) // пустой массив зависимостей - отрисуется только один раз

  return (
    <>
      {/* <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
      <button onClick={() => { setFake(fake + 1) }}>Increment</button> */}
      Counter: {counter}
      Fake: {fake}
    </>
  )
}

//
//
//
export const ClockExample = () => {
  let date = new Date

  let [clock, setClock] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('tick ClockExample');
      setClock((state) => {
        date = new Date
        return state = `Current time is...${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      })
    }, 1000)
    return () => { clearInterval(intervalId) }
  }, []) // пустой массив зависимостей - отрисуется только один раз

  return (
    <>{clock}</>
  )
}
//
//
//
export const ResetEffectExample = () => {
  let [counter, setCounter] = useState(1)
  console.log('ResetEffectExample rendered...' + counter);

  useEffect(() => {
    console.log('useEffect occured...' + counter);
    return () => {
      console.log('RESET EFFECT...' + counter);
    }
  }, [counter])

  return (
    <>
      Counter: {counter}
      <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
    </>
  )
}
//
//
//
export const KeysTrackerExample = () => {
  let [text, setText] = useState('')

  console.log('ResetEffectExample rendered...' + text);

  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key)
    }

    window.addEventListener('keypress', handler)

    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [text])

  return (
    <>
      Typed text: {text}
    </>
  )
}