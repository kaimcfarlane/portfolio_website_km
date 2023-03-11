import './App.css';
import Header from './Header';
import Welcome from './Welcome';
import Skills from './Skills';
import Projects from './Projects'
import Achieve from './Achieve'

import React, {useState, useRef, useEffect} from 'react'



function App() {

  const [DLObj, changeDL] = useState({
    isLight: true
  })

  const website = useRef()

  useEffect(() => {
    console.log("Launched Kai Personal Website");
    console.log("DLObj's isLight value: " + DLObj.isLight);
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
      <a target="_blank" href="https://icons8.com/icon/33470/innovation">Innovation</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
     </div>
  );
}

export default App;
