import React, {useState} from 'react';
import './App.css';
import {
  Rating,
  RatingValueType
} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOf/UncontrolledOnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {OnOff} from './components/OnOff/OnOff';

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [onOffToggle, setonOffToggle] = useState<boolean>(true)

  return (
    <div className="App">
      <OnOff on={onOffToggle} onClick={setonOffToggle}/>
      {/*<PageTitle title={'This is app component'}/>*/}
      {/*<PageTitle title={'My friends'}/>*/}
      {/*Article 1*/}
      {/*<Rating value={2}/>*/}
      <Accordion title={'Menu'}
                 accordionCollapsed={accordionCollapsed}
                 onClick={setAccordionCollapsed}/>
      {/*<Accordion title={'Users'} collapsed={false}/>*/}
      {/*Article 2*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}

      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <UncontrolledOnOff/>
      <UncontrolledOnOff/>
      <UnControlledAccordion
        title={'UnControlledAccordion'}/>
      {/*<Accordion title={'Menu'} collapsed={false}/>*/}
      <UnControlledRating/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
    </div>
  );
}

// function PageTitle(props: PageTitlePropsType) {
//   return (
//     <div><b>{props.title}</b></div>
//   )
// }

export default App;
