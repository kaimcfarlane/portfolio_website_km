import {React, useEffect, useRef, useState} from 'react'
import Project from './Project'
import tankPicture from './modstankPic.png'
import recipeImg1 from './recipeatImg1.png'
import reactTSImg1 from './reacttsImg1.png'
import reactTSImg2 from './reacttsImg2.png'
import reactTSImg3 from './reacttsImg3.png'
import kiwiImg from './kiwiWebsitePic.png'
import weatherappImg from './weatherappImg1.png'
import kiwipongimg from './kiwipongImg.png'
import recipeImg2 from './recipeImg2.png'
import recipeImg3 from './recipeImg3.png'
import './Projects.css'
import ProjectInfo from './ProjectInfo'
import CDSIMG1 from './CDSIMG1.JPG'
import CSharp from './csharp.png'
import CPlus from './c++.png'
import mongoDB from './mongodb_Logo.png'
import node from './nodeLogo.png'
import javascript from './javascriptIcon.png'
import api from './apiLogo.png'
import python from './pythonlogo.png'
import html from './htmlLogo.png'
import css from './cssLogo.png'
import unity from './unitylogo.png'
import typescript from './typescriptLogo.png'
import model from './model.png'

export default function Projects({DLObj}) {

  const titleContainer = useRef()
  const title = useRef()
  const subTitle = useRef()
  const projectContainer = useRef()
  const topProjects = useRef()
  const botProjects = useRef()
  const projectInfoBox = useRef()
  const projectInfoBackground = useRef()

  const projectImg1 = useRef()
  const projectTitle1 = useRef()

  const info1 = {img: recipeImg1, title: 'Recipeat', tool1: '//TypeScript', tool2: '//Node.js', tool3: '//MongoDB'}
  const info2 = {img: weatherappImg, title: 'MyClimi', tool1: '//JavaScript', tool2: '//KeyFrames', tool3: '//RestApi'}
  const info3 = {img: CDSIMG1, title: 'CDS', tool1: '//Python', tool2: '//Arduino', tool3: '//CanvasAPI'}
  const info4 = {img: kiwiImg, title: 'Kiwi-El-Gato', tool1: '//JavaScript', tool2: '//JotForm', tool3: '//WordPress'}
  const info5 = {img: kiwipongimg, title: 'Kiwi Pong', tool1: '//C#', tool2: '//Unity', tool3: '//2D-Modeling'}
  const info6 = {img: reactTSImg1, title: 'ReactTS', tool1: '//Javascript', tool2: '//Bootstrap', tool3: '//Chart.js'}

  useEffect(()=> {
    if(DLObj.isLight) {
      title.current.style.color = 'black'
      subTitle.current.style.color = "black"
    }
    else {
      title.current.style.color = 'white'
      subTitle.current.style.color = "white"
    }
  },[DLObj])
  
  const [selectedProjectInfo, changeProjectInfo] = useState({title: '', img: [], desc: '', tool1: '', tool2: '', tool3: '', isOpen: false, demoUrl: '', codeUrl: '', logos: []})

  //When user clicks on project we add onclick method, one method that takes a parameter called name probably or info
  //In method we say dependent on name we will change the data in the object of selectedProjectInfo using the useState method
  //We also will say before this to make the div with Project Info appear with animation
  const [state, changeState] = useState(true)


  const projectClick = (index) => {
    //set original project info to new project variable for changes
      console.log("Inner Project Function Clicked!")
      projectInfoBox.current.style.transform = 'translateX(0%)'
      projectInfoBackground.current.classList.add('projectShadow')
      // projectInfoBackground.current.classList === 'projectShadow' ? projectInfoBackground.current.classList.remove('projectShadow') : projectInfoBackground.current.classList.add('projectShadow')
      var newProject = selectedProjectInfo
      if(index === 1) {
        newProject.title = info1.title
        newProject.img = [info1.img, recipeImg2, recipeImg3]
        newProject.desc = 'A Fullstack Recipe Creation App'
        newProject.tool1 = info1.tool1
        newProject.tool2 = info1.tool2
        newProject.tool3 = info1.tool3
        newProject.demoUrl = 'https://recipeat.herokuapp.com/'
        newProject.codeUrl = 'https://github.com/kaimcfarlane/Recipeat_PUBLIC'
        newProject.logos = [mongoDB, node, typescript]
        changeProjectInfo(newProject)
        console.log('Image passed is: ' + JSON.stringify(selectedProjectInfo))
        changeState(!state)
      }
      else if(index === 2) {
        newProject.title = info2.title
        newProject.img = [info2.img, 'null']
        newProject.desc = 'A Dynamic Weather App'
        newProject.tool1 = info2.tool1
        newProject.tool2 = info2.tool2
        newProject.tool3 = info2.tool3
        newProject.demoUrl = 'https://kaimcfarlane.github.io/WeatherApp/'
        newProject.codeUrl = 'https://github.com/kaimcfarlane/MyClimi'
        newProject.logos = [html, javascript, api]
        changeProjectInfo(newProject)
        changeState(!state)
      }
      else if(index === 3) {
        newProject.title = info3.title
        newProject.img = [info3.img, 'null']
        newProject.desc = 'A Canvas Docking Station'
        newProject.tool1 = info3.tool1
        newProject.tool2 = info3.tool2
        newProject.tool3 = info3.tool3
        newProject.demoUrl = 'https://github.com/kaimcfarlane/CDS'
        newProject.codeUrl = 'https://github.com/kaimcfarlane/CDS'
        newProject.logos = [python, api, CPlus]
        changeProjectInfo(newProject)
        changeState(!state)
      }
      else if(index === 4) {
        newProject.title = info4.title
        newProject.img = [info4.img, 'null']
        newProject.desc = 'An Educational Website'
        newProject.tool1 = info4.tool1
        newProject.tool2 = info4.tool2
        newProject.tool3 = info4.tool3
        newProject.demoUrl = 'https://kiwielgato.com/'
        newProject.codeUrl = 'https://github.com/kaimcfarlane/KiwiELGato_Website'
        newProject.logos = [html, css, javascript]
        changeProjectInfo(newProject)
        changeState(!state)
      }
      else if(index === 5) {
        newProject.title = info5.title
        newProject.img = [info5.img, 'null']
        newProject.desc = 'A 1980s Video Game Classic w/t a Modern Twist'
        newProject.tool1 = info5.tool1
        newProject.tool2 = info5.tool2
        newProject.tool3 = info5.tool3
        newProject.demoUrl = 'https://play.unity.com/mg/other/kiwi-pong-webgl'
        newProject.codeUrl = 'https://github.com/kaimcfarlane/UnityPongGame'
        newProject.logos = [model, unity, CSharp]
        changeProjectInfo(newProject)
        changeState(!state)
      }
      else if(index === 6) {
        newProject.title = info6.title
        newProject.img = [info6.img, 'null']
        newProject.desc = 'A Series of Reaction Speed Games'
        newProject.tool1 = info6.tool1
        newProject.tool2 = info6.tool2
        newProject.tool3 = info6.tool3
        newProject.demoUrl = 'https://kaimcfarlane.github.io/ReactTS/'
        newProject.codeUrl = 'https://github.com/kaimcfarlane/React_TS'
        newProject.logos = [html, css, javascript]
        changeProjectInfo(newProject)
        changeState(!state)
      }
    }

    //FIX codeURL on INDEX6 because it is not working just openign websit epage again

  useEffect(() => {
    console.log("Project Button closed so value here in object should trigger a close")
    if (selectedProjectInfo.isOpen === true) {
      projectInfoBox.current.style.transform = 'translateX(-100%)'
      projectInfoBackground.current.classList.remove('projectShadow')
      selectedProjectInfo.isOpen = false
    }
  },[selectedProjectInfo, state])

  // useEffect(()=> {
  //   console.log("Value passed to inner project component" + selectedProjectInfo.img)
  // },[selectedProjectInfo, selectedProjectInfo.img, state])

    useEffect(()=>{
        projectInfoBox.current.style.backgroundColor = '#ffffff00'
    }, [DLObj.isLight])

  

  return (
    <>
      <section ref={titleContainer} id='projectTitleContainer'>
        <h1 ref={title} id='projectTitle'>I'm a Creator</h1>
        <p ref={subTitle} id='projectSubTitle'>&lt;Front and Backend/&gt;</p>
      </section>
      <section ref={projectContainer} id='projectContainer'>
        <div className='projectSubBox' ref={topProjects} id='topProjects'>
              <Project DLObj={DLObj} info={info1} projectClick={projectClick} index={1}/>
              <Project DLObj={DLObj}  info={info2} projectClick={projectClick} index={2}/>
              <Project DLObj={DLObj} info={info3} projectClick={projectClick} index={3}/>
        </div>
        <div className='projectSubBox' ref={botProjects} id='botProjects'>
            <Project DLObj={DLObj} info={info4} projectClick={projectClick} index={4}/>
            <Project DLObj={DLObj} info={info5} projectClick={projectClick} index={5}/>
            <Project DLObj={DLObj} info={info6} projectClick={projectClick} index={6}/>
        </div>
      </section>
      <section ref={projectInfoBackground} id='projectInfoBackground'>
        <div ref={projectInfoBox} id='projectInfoBox'>
          <ProjectInfo selectedProjectInfo={selectedProjectInfo} changeProjectInfo={changeProjectInfo} changeState={changeState} state={state} DLObj={DLObj}/>
        </div>
      </section>
    </>
  )
}
