import {
  INCREMENT,
  MAKE_BOLD,
  MAKE_RED,
  reducer,
  RESET,
  StateType
} from './MyComponent'

test('Counter should increment by 1', () => {
  //data
  const state: StateType = {
    counter: 1,
    red: false,
    bold: false
  }
  //action
  const newState = reducer(state, { type: INCREMENT })
  //expection
  expect(newState.counter).toBe(2)
})

test('Counter be reseted to 0', () => {
  //data
  const state: StateType = {
    counter: 100,
    red: false,
    bold: false
  }
  //action
  const newState = reducer(state, { type: RESET })
  //expection
  expect(newState.counter).toBe(0)
})

test('Background red should be turned into opposite value', () => {
  //data
  const state: StateType = {
    counter: 0,
    red: true,
    bold: false
  }
  //action
  const newState = reducer(state, { type: MAKE_RED })
  //expection
  expect(newState.red).toBe(false)
})

test('The text style BOLD should turn into opposit value', () => {
  //data
  const state: StateType = {
    counter: 0,
    red: false,
    bold: true
  }
  //action
  const newState = reducer(state, { type: MAKE_BOLD })
  //expection
  expect(newState.bold).toBe(false)
})
