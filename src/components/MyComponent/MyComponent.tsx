import { useReducer } from 'react'
import style from './MyComponent.module.css'

let InitialState: any = {
  counter: 0,
  red: false,
  bold: false
}

export type ActionType = {
  type: string
}
export type StateType = {
  counter: number
  red: boolean
  bold: boolean
}

export const INCREMENT: string = 'INCREMENT'
export const RESET: string = 'RESET'
export const MAKE_RED: string = 'MAKE_RED'
export const MAKE_BOLD: string = 'MAKE_BOLD'

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      let newState: StateType = { ...state }
      newState.counter++
      return newState
    case RESET:
      return { ...state, counter: 0 }
    case MAKE_RED:
      let redState = { ...state }
      redState.red = !redState.red
      return redState
    case MAKE_BOLD:
      let boldState = { ...state }
      boldState.bold = !boldState.bold
      return boldState
    default:
      throw new Error()
  }
}

export function MyComponent () {
  //BLL
  let [modifiedState, dispatch] = useReducer(reducer, InitialState)
  //UI
  return (
    <div
      className={
        modifiedState.red ? style.container + ' ' + style.red : style.container
      }
    >
      <h3>My component</h3>
      <div className={modifiedState.bold ? style.bold : ''}>
        {modifiedState.counter}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT' })
          }}
        >
          inc
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'RESET' })
          }}
        >
          res
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'MAKE_RED' })
          }}
        >
          Make red
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'MAKE_BOLD' })
          }}
        >
          Make yellow
        </button>
      </div>
    </div>
  )
}
