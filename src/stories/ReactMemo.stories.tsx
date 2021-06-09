import React from 'react'
import { useState } from 'react'

export default {
  title: 'React.memo demonstration'
}

const NewMessagesCounter = (props: { counter: number }) => {
  return <div>{props.counter}</div>
}
const SecretUsers = (props: { users: Array<string> }) => {
  console.log('Users rendering')
  return (
    <>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </>
  )
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {
  //допустим локальный стейт хранится в этой родительской компоненте
  // в данном случае при перерисоке setCounter будет заново отрисовываться(сравниваться) вся компонента
  let [counter, setCounter] = useState(0)
  let [users, setUsers] = useState(['Alex', 'Stan', 'John'])
  // при этом будет работать обновление стейта Users при добавлении пользвателя.
  // в стейт нужно добавлять КОПИЮ ОБЪЕКТА, правило ИММУТАБЕЛЬНОСТИ
  const addUser = () => {
    const newUsers: Array<string> = [...users, 'Sveta']
    setUsers(newUsers)
  }

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Increment
      </button>
      <button onClick={addUser}>Add user</button>
      <NewMessagesCounter counter={counter} />
      <Users users={users} />
    </>
  )
}
