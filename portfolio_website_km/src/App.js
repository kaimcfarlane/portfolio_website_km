import './App.css';
import Header from './Header';
import Welcome from './Welcome'

import React, {useState, useRef, useEffect} from 'react'



function App() {

  const [DLObj, changeDL] = useState({
    isLight: true
  })

  useEffect(() => {
    console.log("Launched Kai Personal Website");
    console.log("DLObj's isLight value: " + DLObj.isLight);
  }, [])

  const toggleDL = () => {
    if(DLObj.isLight == true)
    {
      changeDL({
        isLight: false
      })
    }
    else
    {
      changeDL({
        isLight: true
      })
    }
    
  }



  return (
    <div id='website'>
      <div id='mainPage'>
        <Header DLObj={DLObj} toggleDL={toggleDL}/>
        <Welcome DLObj={DLObj} toggleDL={toggleDL}/>
      </div>
      <div id='skillsPage'></div>
    </div>
  );
}

export default App;
