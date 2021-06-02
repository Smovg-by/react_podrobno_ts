export type ActionType = {
  type: string
  payload: boolean
}

type StateType = {
  active: boolean
}

export const initialState = {
  active: false
}

export const SET_ACTIVE: ActionType = {
  type: 'SET_ACTIVE',
  payload: false
}

export const TOGGLE_COLLAPSED: string = 'TOGGLE_COLLAPSED'

export const reducer = (state: StateType, action: ActionType) => {
  console.log(action)

  switch (action.type) {
    case 'SET_ACTIVE':
      return { active: action.payload }
    default:
      return state
  }
  return state
}
