import React, { useEffect, useState } from 'react'

export default {
  title: 'useEffect demo'
}

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
export const SetTimeoutExample = () => {

  let [fake, setFake] = useState(1)
  let [counter, setCounter] = useState(1)

  console.log('render setTimeoutExample');

  useEffect(() => {
    console.log('use useEffect');
    setInterval(() => {

      setCounter((state) => state + 1)
    }, 1000)
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
export const ClockExample = () => {
  let date = new Date

  let [clock, setClock] = useState('')

  useEffect(() => {
    setInterval(() => {
      setClock((state) => {
        date = new Date
        return state = `Current time is...${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      })
    }, 1000)
  }, []) // пустой массив зависимостей - отрисуется только один раз

  return (
    <>{clock}</>
  )
}
