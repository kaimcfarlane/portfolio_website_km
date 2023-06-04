import './App.css';
import Header from './Header';
import Welcome from './Welcome';
import Skills from './Skills';
import Projects from './Projects'
import Achieve from './Achieve'
import Contact from './Contact'
import MenuTransition from './MenuTransition';
import styled from 'styled-components';

import React, {useState, useRef, useEffect} from 'react'



function App() {

  const [DLObj, changeDL] = useState({
    isLight: true
  })

  const trans = useRef()

  const animateMenu = () => {
    // trans.current.style.transform = 'translateX(0%)'
    // setTimeout(()=> {
    //   MenuTransition.current.style.transform = 'translateX(-100%)'
    // },3000)
  }

  const website = useRef()

  useEffect(() => {
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

  // const styledMenuTransition = styled.MenuTransition `
  //     backgroundColor: blue
  // `

  return (
    <div ref={website} id='website'>
      <div id='mainPage'>
        <Header DLObj={DLObj} animateMenu={animateMenu} toggleDL={toggleDL}/>
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
      {/* <MenuTransition/>   */}
    </div>
  );
}

export default App;
