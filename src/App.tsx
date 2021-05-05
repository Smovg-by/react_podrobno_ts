import React from 'react';
import './App.css';
import {Rating2} from './components/rating/Rating2';
import {Accordion2} from './components/accordion/Accordion2';


// function declaration
function App() {
  return (
    <div className="App">
      <AppTitle/>
      Article 1
      <Rating2 value={2}/>
      <Accordion2 title={"Menu"}/>
      Article 2
      <Rating2 value={4}/>
    </div>
  );
}

function AppTitle() {
  return (
    <div><b>This is app component</b></div>
  )
}

export default App;
