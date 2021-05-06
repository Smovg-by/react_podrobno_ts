import React, {useState} from 'react';

type AccordionPropsType = {
  title: string

}

export function UnControlledAccordion(props: AccordionPropsType) {

  let [collapsed, setCollapsed] = useState(true)

  return (
    <div>
      <AccordionTitle titleValue={props.title}/>
      <button
        onClick={() => setCollapsed(!collapsed)}>Toggle
      </button>
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  titleValue: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3>{props.titleValue}</h3>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}