import React, { useState } from 'react'

export type StarPropsType = {
  selected: boolean
  setValue: () => void
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type UnControlledRatingPropsType = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType) => void
}

export function UnControlledRating (props: UnControlledRatingPropsType) {
  let [value, setValue] = useState<RatingValueType>(
    props.defaultValue ? props.defaultValue : 0
  )

  return (
    <div>
      <h4>Stars choose(uncontrolled component)</h4>
      <Star selected={value > 0} setValue={() => {setValue(0); props.onChange(0)}}/>
      <Star selected={value > 1} setValue={() => {setValue(1); props.onChange(1)}}/>
      <Star selected={value > 2} setValue={() => {setValue(2); props.onChange(2)}}/>
      <Star selected={value > 3} setValue={() => {setValue(3); props.onChange(3)}}/>
      <Star selected={value > 4} setValue={() => {setValue(4); props.onChange(4)}}/>
    </div>
  )
}

function Star (props: StarPropsType) {
  return (
    <span onClick={() => props.setValue()}>
      {props.selected ? <b>star </b> : 'star  '}
    </span>
  )
}
