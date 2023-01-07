import './App.css';
import Header from './Header';

import React, {useState, useRef, useEffect} from 'react'



function App() {

  useEffect(() => {
    console.log("Launched Kai Personal Website");
  }, [])



  return (
    <>
      <h1>Kai Allan McFarlane</h1>
      <Header/>
    </>
   
  );
}

export default App;
