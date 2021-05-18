import { AnyARecord } from 'dns'
import React from 'react'

export type AccordionPropsType = {
  /**
   * Title, that will be shown in a new component instance
   */
  title: string
  /**
   * Value determines is Accordion collapsed or not
   */
  accordionCollapsed: boolean
  /**
   * Callback called when any item is clicked
   */
  onClick: (value: boolean) => void
  /**
   * The color of component's text
   */
  color?: string

}

export function Accordion (props: AccordionPropsType) {
  return (
    <div>
      Accordion controlled component
      <AccordionTitle
        titleValue={props.title}
        onClick={props.onClick}
        accordionCollapsed={props.accordionCollapsed}
        color={props.color}
      />
      {!props.accordionCollapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  titleValue: string
  onClick: (value: boolean) => void
  accordionCollapsed: boolean
  color?: string
}

function AccordionTitle (props: AccordionTitlePropsType) {

    return (
    <h4
      style={{color: props.color}}
      onClick={() => props.onClick(!props.accordionCollapsed)}
    >
      {props.titleValue}
    </h4>
  )
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
