import React from 'react';

export function Accordion2(props: any) {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody/>
    </div>
  )
}

function AccordionTitle(props: any) {
  return (
    <h3>{props.title}</h3>
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