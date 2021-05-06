import {useState} from 'react';

type StarPropsType = {
  selected: boolean
}

export function UnControlledRating() {


  let [selected1, setSelected1] = useState(false)
  let [selected2, setSelected2] = useState(false)
  let [selected3, setSelected3] = useState(false)
  let [selected4, setSelected4] = useState(false)
  let [selected5, setSelected5] = useState(false)

  return (

    <div>
      <Star selected={selected1}/>
      <button onClick={() => setSelected1(!selected1)}>1
      </button>
      <Star selected={selected2}/>
      <button onClick={() => setSelected2(!selected2)}>2
      </button>
      <Star selected={selected3}/>
      <button onClick={() => setSelected3(!selected3)}>3
      </button>
      <Star selected={selected4}/>
      <button onClick={() => setSelected4(!selected4)}>4
      </button>
      <Star selected={selected5}/>
      <button onClick={() => setSelected5(!selected5)}>5
      </button>
    </div>
  )
}


function Star(props: StarPropsType) {

  if (props.selected) {
    return (<span><b>star </b></span>)
  } else {
    return (
      <span>star </span>
    )
  }
}

