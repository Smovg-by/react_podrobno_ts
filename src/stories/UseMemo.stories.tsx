import React, { useCallback, useMemo, useState } from 'react'

export default {
  title: 'useMemo'
}
//
// COMPONENT
//
export const DifficultCountingExample = () => {
  // BLL
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1
  let resultB = 1

  // алгоритм расчета факториала с искусственно заданным сложным расчетом while

  // используем useMemo

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 10000000) {
        fake++
        let fakeValue = Math.random()
      }
      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a])

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  // UI
  return (
    <div>
      <input value={a} onChange={e => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={e => setB(Number(e.currentTarget.value))} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </div>
  )
}

//
// COMPONENT
//

const SecretUsers = (props: { users: Array<string> }) => {
  console.log('SecretUsers rendered')
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  )
}

const Users = React.memo(SecretUsers)
// BLL
export const HelpsToReactMemo = () => {
  console.log('HelpsToReactMemo(counter) rendered')

  let [counter, setCounter] = useState(0)
  let [users, setUsers] = useState(['Alex', 'Stan', 'John'])
  // filter() каждый раз создает новый массив, поэтому просто React.memo() не работает!
  // чтобы это предотвратить, надо использовать useMemo()

  const newArray = useMemo(() => {
    return users.filter(item => item.indexOf('a') > -1)
  }, [users])

  // const newArray = users.filter(item => item.indexOf('a') > -1)
  // только при добавлении элемента будет перерисовываться компонента благодаря useMemo()
  const addUser = () => {
    const newUsers: Array<string> = [...users, 'Sveta']
    setUsers(newUsers)
  }

  // UI
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Increment
      </button>

      {counter}
      <Users users={newArray} />
      <button onClick={addUser}>Add user</button>
    </>
  )
}
