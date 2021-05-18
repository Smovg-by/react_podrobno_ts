import React, { useState } from 'react'

type AccordionPropsType = {
  title: string
  // onClick?: (value: boolean) => void
  defaultOn?: boolean

}

export function UnControlledAccordion (props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(props.defaultOn? props.defaultOn : false)

  return (
    <div>
      <AccordionTitle
        titleValue={props.title}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      />
      {!collapsed && <AccordionBody />}
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
