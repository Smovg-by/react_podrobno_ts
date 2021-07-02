import React, { useState } from 'react'

export default {
  title: 'useState demo'
}

function generateData() {
  console.log('generateData');
  return 1513215113
}

export const Example1 = () => {
  console.log('render Example1');

  let [counter, setCounter] = useState(generateData)

  return (
    <>
      <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
      {counter}
    </>
  )
}

export const Example2 = () => {
  console.log('render Example2');

  let [counter, setCounter] = useState(0)

  const changer = (state: number) => {
    return state + 1
  }

  return (
    <>
      <button onClick={() => { setCounter(changer) }}>Increment</button>
      {counter}
    </>
  )
}