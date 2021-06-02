import React, { useState } from 'react'
import './App.css'
import { Rating, RatingValueType } from './components/rating/Rating'
import { Accordion } from './components/accordion/Accordion'
import { UncontrolledOnOff } from './components/UncontrolledOnOf/UncontrolledOnOff'
import { UnControlledAccordion } from './components/UnControlledAccordion/UnControlledAccordion'
import { OnOff } from './components/OnOff/OnOff'
import { ItemType, MySelect } from './components/MySelect/MySelect'
import { MyComponent } from './components/MyComponent/MyComponent'

function App () {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [onOffToggle, setonOffToggle] = useState<boolean>(true)

  const selectItemsArray: Array<ItemType> = [
    { title: 'First option', value: 1 },
    { title: 'Second option', value: 2 },
    { title: 'Third option', value: 3 }
  ]

  return (
    <div className='App'>
      <MyComponent />
      <OnOff on={onOffToggle} onClick={setonOffToggle} />
      <MySelect selectItemsArray={selectItemsArray} />
      {/*<PageTitle title={'This is app component'}/>*/}
      {/*<PageTitle title={'My friends'}/>*/}
      {/*Article 1*/}
      {/*<Rating value={2}/>*/}
      <Accordion
        title={'Menu'}
        accordionCollapsed={accordionCollapsed}
        onClick={setAccordionCollapsed}
        color={'red'}
      />
      {/*<Accordion title={'Users'} collapsed={false}/>*/}
      {/*Article 2*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}

      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <UncontrolledOnOff />
      {/* <UncontrolledOnOff /> */}
      <UnControlledAccordion title={'UnControlledAccordion with reducer'} />
      {/*<Accordion title={'Menu'} collapsed={false}/>*/}
      {/* <UnControlledRating /> */}
      <Rating value={ratingValue} onClick={setRatingValue} />
    </div>
  )
}

// function PageTitle(props: PageTitlePropsType) {
//   return (
//     <div><b>{props.title}</b></div>
//   )
// }

export default App
