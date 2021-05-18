import React, { useRef, useState } from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Input'
  //component: input
}

export const UnControlledInput = () => <input />

export const UnControlledInputWithTrackingValueVar1 = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <input
        onChange={event => {
          const actualValue = event.currentTarget.value
          setValue(actualValue)
        }}
      />{' '}
      - {value}
    </>
  )
}

export const UnControlledInputWithTrackingValueVar2 = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return (
    <>
      <input ref={inputRef}/>
      <button onClick={save}>save</button>- actual value: {value}
    </>
  )
}

export const ControlledInputWithFixedValues = () => (
  <input value={'it-incubator.by'} />
)
