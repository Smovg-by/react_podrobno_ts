import { AnyARecord } from 'dns'
import React from 'react'

export type AccordionPropsType = {
  title: string
  accordionCollapsed: boolean
  onClick: (value: boolean) => void
  color?: string
  // items: string[]
}

type ItemType = {
  title: string
  value: any
}

const items: ItemType[] = [
  {title:'Dima', value: 1},
  {title:'Stan', value: 2},
  {title:'John', value: 3},
  ]
  function onClickCallBack(value: any) {
    console.log('click  ' + value);

  }


export function Accordion (props: AccordionPropsType) {



  return (
    <div>
      <hr />
      Accordion controlled component
      <AccordionTitle
        titleValue={props.title}
        onClick={props.onClick}
        accordionCollapsed={props.accordionCollapsed}
        color={props.color}
      />
      {!props.accordionCollapsed && <AccordionBody items={items} onClickCallBack={onClickCallBack}/>}
      <hr />
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
      style={{ color: props.color }}
      onClick={() => props.onClick(!props.accordionCollapsed)}
    >
      {props.titleValue}
    </h4>
  )
}

export type AccordionBodyPropsType = {
  items: ItemType[]
  onClickCallBack: (value: any) => void
}

function AccordionBody (props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index} onClick={()=>{props.onClickCallBack(item.value)}}>{item.title}</li>
      ))}
    </ul>
  )
}
