import React from 'react';

type AccordionPropsType = {
  title: string
  accordionCollapsed: boolean
  onClick: (value: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>Accordion controlled component
      <AccordionTitle titleValue={props.title}
                      onClick={props.onClick}
                      accordionCollapsed={props.accordionCollapsed}/>
      {!props.accordionCollapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  titleValue: string
  onClick: (value: boolean) => void
  accordionCollapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h4
      onClick={() => props.onClick(!props.accordionCollapsed)}>{props.titleValue}</h4>
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