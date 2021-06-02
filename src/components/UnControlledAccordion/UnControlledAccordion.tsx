import React, { useReducer, useState } from 'react'
import { reducer, TOGGLE_COLLAPSED } from './reducer'

type AccordionPropsType = {
  title: string
  // onClick?: (value: boolean) => void
  defaultOn?: boolean
}

export function UnControlledAccordion (props: AccordionPropsType) {
  // let [collapsed, setCollapsed] = useState(
  //   props.defaultOn ? props.defaultOn : false
  // )
  let [collapsed, dispatch] = useReducer(reducer, false)

  return (
    // <div>
    //   <AccordionTitle
    //     titleValue={props.title}
    //     onClick={() => {
    //       setCollapsed(!collapsed)
    //     }}
    //   />
    //   {!collapsed && <AccordionBody />}
    // </div>
    <div>
      <hr />
      <AccordionTitle
        titleValue={props.title}
        onClick={() => {
          dispatch({ type: 'TOGGLE_COLLAPSED' })
        }}
      />
      {!collapsed && <AccordionBody />}
      <hr />
    </div>
  )
}

type AccordionTitlePropsType = {
  titleValue: string
  onClick: () => void
}

function AccordionTitle (props: AccordionTitlePropsType) {
  return <h3 onClick={() => props.onClick()}>{props.titleValue}</h3>
}

function AccordionBody () {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
