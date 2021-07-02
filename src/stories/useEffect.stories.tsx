import React, { useEffect, useState } from 'react'

export default {
  title: 'useEffect demo'
}



export const Example = () => {

  let [fake, setFake] = useState(1)
  let [counter, setCounter] = useState(1)

  console.log('render Example');

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
