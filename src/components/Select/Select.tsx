import { useState } from 'react'
import style from './Select.module.css'

export type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  selectItemsArray: Array<ItemType>
}

type DropMenuPropsType = {
  selectItemsArray: Array<ItemType>
  selectItem: (value: string) => void
}

function DropMenu (props: DropMenuPropsType) {
  return (
    <div className={style.dropmenu}>
      {props.selectItemsArray.map(item => (
        <li
          key={item.value}
          onClick={() => {
            props.selectItem(item.title)
          }}
        >
          {item.title}
        </li>
      ))}
    </div>
  )
}

export function Select (props: SelectPropsType) {
  let [collapsed, setCollapsed] = useState(true)
  let [titleName, setTitleName] = useState(props.selectItemsArray[0].title)

  function collapseSelect () {
    console.log('toggle collapse  ' + collapsed)
    setCollapsed(!collapsed)
  }

  function selectItem (title: string) {
    console.log('click  ' + title)
    titleName = title
    setCollapsed(true)
    setTitleName(titleName)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <hr />
        <div onClick={() => collapseSelect()}>{titleName}</div>
        {!collapsed && (
          <DropMenu
            selectItemsArray={props.selectItemsArray}
            selectItem={selectItem}
          />
        )}
        <hr />
      </div>
    </div>
  )
}
