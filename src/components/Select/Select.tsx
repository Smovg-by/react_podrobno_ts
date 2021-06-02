import { KeyboardEvent, useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from './reducer'
import style from './Select.module.css'

export type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  onChange: (value: any) => void
  items: ItemType[]
  value?: any
}
//SELECT component
export function Select (props: SelectPropsType) {
  //BLL
  //
  // const [active, setActive] = useState<boolean>(false)
  const [active, dispatch] = useReducer(reducer, initialState)

  let [hoveredElementValue, setHoverElementValue] = useState<any>(props.value)

  const selectedItem = props.items.find(i => i.value === props.value)
  const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

  useEffect(() => {
    setHoverElementValue(props.value)
  }, [props.value])

  const toggleItems = () => {
    // setActive(!active)
    dispatch({ type: 'SET_ACTIVE', payload: false })
  }

  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    // реакция на стрелки ВНИЗ и ВВЕРХ
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement =
            e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]

          if (pretendentElement) {
            props.onChange(pretendentElement.value)
            return
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }
    // Реакция на Escape и Enter
    if (e.key === 'Enter' || e.key === 'Escape') {
      // setActive(false)
      dispatch({ type: 'SET_ACTIVE', payload: false })
    }
  }

  // for (let i = 0; i < props.items.length; i++) {
  //   if (props.items[i].value === hoveredElementValue) {
  //     if (e.code === 'ArrowDown') {
  //       if (props.items[i + 1].value) {
  //         props.onChange(props.items[i + 1].value)
  //         setHoverElementValue(props.items[i + 1].value)
  //         break
  //       }
  //     }
  //     if (e.code === 'ArrowUp') {
  //       if (props.items[i - 1].value) {
  //         props.onChange(props.items[i - 1].value)
  //         setHoverElementValue(props.items[i - 1].value)
  //         break
  //       }
  //     }
  //   }
  // }

  //UI
  //
  return (
    <>
      <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={style.main} onClick={toggleItems}>
          {selectedItem && selectedItem.title}
        </span>
        {active && ( //условный рендеринг
          <div className={style.items}>
            {props.items.map(i => (
              <div
                onMouseEnter={() => {
                  setHoverElementValue(i.value)
                }}
                className={
                  style.item + ' ' + (hoveredItem === i ? style.selected : '')
                }
                key={i.value}
                onClick={() => {
                  onItemClick(i.value)
                }}
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
