import React from 'react';
import './App.css';
import {Rating} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';
import {OnOff} from './components/OnOf/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';

type PageTitlePropsType = {
  title: string
}

// function declaration
function App() {
  return (
    <div className="App">
      <PageTitle title={'This is app component'}/>
      <PageTitle title={'My friends'}/>
      Article 1
      <Rating value={2}/>
      <Accordion title={'Menu'} collapsed={true}/>
      <Accordion title={'Users'} collapsed={false}/>
      Article 2
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <OnOff/>
      <OnOff/>
      <UnControlledAccordion title={ 'UnControlledAccordion'}/>
      <UnControlledRating/>
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <div><b>{props.title}</b></div>
  )
}

export default App;
