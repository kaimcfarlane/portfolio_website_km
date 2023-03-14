import './App.css';
import Header from './Header';
import Welcome from './Welcome';
import Skills from './Skills';
import Projects from './Projects'
import Achieve from './Achieve'
import Contact from './Contact'

import React, {useState, useRef, useEffect} from 'react'



function App() {

  const [DLObj, changeDL] = useState({
    isLight: true
  })

  const website = useRef()

  useEffect(() => {
    console.log("Launched Kai Personal Website");
    console.log("DLObj's isLight value: " + DLObj.isLight);
    //If Locally stored isLight value is true, change to bright mode, if false, change to dark mode
    // setTimeout(() => {
    //   console.log("Window has scrolled")
    //   window.scroll({
    //     top: 0, 
    //     left: 0, 
    //     behavior: 'smooth' 
    //    });        
    // }, 6000)
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
    <div ref={website} id='website'>
      <div id='mainPage'>
        <Header DLObj={DLObj} toggleDL={toggleDL}/>
        <Welcome DLObj={DLObj} toggleDL={toggleDL}/>
      </div>
      <div id='skillsPage'>
        <Skills DLObj={DLObj}/>
      </div>
      <div id='achievePage'>
        <Achieve DLObj={DLObj}/>
      </div>
      <div id='projectsPage'>
        <Projects DLObj={DLObj}/>
      </div>
      <div id='contactPage'>
        <Contact DLObj={DLObj}/>
      </div>  
     </div>
  );
}

export default App;
