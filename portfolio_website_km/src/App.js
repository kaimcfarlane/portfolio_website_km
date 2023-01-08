import './App.css';
import Header from './Header';
import Welcome from './Welcome'

import React, {useState, useRef, useEffect} from 'react'



function App() {

  useEffect(() => {
    console.log("Launched Kai Personal Website");
  }, [])



  return (
    <>
      <Header/>
      <Welcome/>
    </>
   
  );
}

export default App;
