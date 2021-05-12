import React, {useState} from 'react';

type StarPropsType = {
  selected: boolean
}

export function UnControlledRating() {

  let [value, setValue] = useState(0)

  return (

    <div><h4>Stars choose(uncontrolled component)</h4>
      <Star selected={value > 0}/>
      <button onClick={() => setValue(1)}>1</button>
      <Star selected={value > 1}/>
      <button onClick={() => setValue(2)}>1</button>
      <Star selected={value > 2}/>
      <button onClick={() => setValue(3)}>1</button>
      <Star selected={value > 3}/>
      <button onClick={() => setValue(4)}>1</button>
      <Star selected={value > 4}/>
      <button onClick={() => setValue(5)}>1</button>
    </div>
  )
}


function Star(props: StarPropsType) {
  return (
    props.selected ? (
      <span><b>star </b></span>
    ) : (
      <span>star </span>)
  )
}

