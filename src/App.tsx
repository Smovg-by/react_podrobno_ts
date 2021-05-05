import React from 'react';
import './App.css';
import {Rating} from './components/rating/Rating';
import {Accordion} from './components/accordion/Accordion';

type PageTitlePropsType ={
  title: string
}

// function declaration
function App() {
  return (
    <div className="App">
      <PageTitle title={"This is app component"}/>
      <PageTitle title={"My friends"}/>
      Article 1
      <Rating value={2}/>
      <Accordion title={"Menu"} collapsed={true}/>
      <Accordion title={"Users"} collapsed={false}/>
      Article 2
      <Rating value={4}/>
    </div>
  );
}

function PageTitle(props:PageTitlePropsType) {
  return (
    <div><b>{props.title}</b></div>
  )
}

export default App;
