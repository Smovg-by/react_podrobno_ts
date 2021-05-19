import React, { ChangeEvent, useRef, useState } from 'react'
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
      <input ref={inputRef} />
      <button onClick={save}>save</button>- actual value: {value}
    </>
  )
}

export const ControlledInputWithFixedValues = () => (
  <input value={'it-incubator.by'} />
)

// lesson 13. Controlled input, checkbox and select

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChange} />
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type='checkbox' checked={parentValue} onChange={onChange} />
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string|undefined>('1')
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return (
    <select value={parentValue} onChange={onChange}> //вешаем onChange именно на select!!!
      <option value={'0'}>0</option>
      <option value={'1'}>1</option>
      <option value={'2'}>2</option>
    </select>
  )
}
