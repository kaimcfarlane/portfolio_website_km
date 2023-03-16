import { hover } from '@testing-library/user-event/dist/hover'
import {React, useEffect, useRef} from 'react'
import './project.css'

export default function Project({info, DLObj}) {

  const project = useRef()
  const projectImg = useRef()
  const proTitle = useRef()
  const skillsBox = useRef()
  const tool1 = useRef()
  const tool2 = useRef()
  const tool3 = useRef()

  //Use Icons or projcts images

  useEffect(()=>{
    if(DLObj.isLight) {
      project.current.style.background = 'white'
      // project.current.style.boxShadow = '9px 10px 3px 0px rgb(98 70 234 / 76%)'
      console.log((project.current.classList))
      // project.current.classList.add('projectLightHover')
      proTitle.current.style.backgroundColor = 'white'
      proTitle.current.style.color = 'black'
      skillsBox.current.style.backgroundColor = 'white'
      tool1.current.style.backgroundColor = 'white'
      tool2.current.style.backgroundColor = 'white'
      tool3.current.style.backgroundColor = 'white'
      tool1.current.style.color = '#6246ea'
       tool2.current.style.color = '#6246ea'
       tool3.current.style.color = '#6246ea'
       tool1.current.style.textShadow =  ''
       tool2.current.style.textShadow =  ''
       tool3.current.style.textShadow =  ''
    }
    else{
       // project.current.style.background = 'rgb(98,70,234)'
       project.current.style.background = 'linear-gradient(0deg, rgba(98,70,234,1) 0%, rgba(255,255,255,1) 100%)'
      //  project.current.style.boxShadow = '9px 10px 3px 0px rgb(255 255 255)'
       proTitle.current.style.backgroundColor = 'rgba(255, 255, 255, 0)'
       proTitle.current.style.color = 'white'
       skillsBox.current.style.backgroundColor = 'rgba(255, 255, 255, 0)'
       tool1.current.style.backgroundColor = 'rgba(255, 255, 255, 0)'
       tool2.current.style.backgroundColor = 'rgba(255, 255, 255, 0)'
       tool3.current.style.backgroundColor = 'rgba(255, 255, 255, 0)'
       tool1.current.style.color = 'white'
       tool2.current.style.color = 'white'
       tool3.current.style.color = 'white'
       tool1.current.style.textShadow =  '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)'
       tool2.current.style.textShadow =  '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)'
       tool3.current.style.textShadow =  '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)'
    }
  },[DLObj])
  

  const unhoverProject = () => {
      project.current.style.boxShadow = ''
      console.log("UNHOVER BTN CLICKED!")
  }

  const backgroundHoverEnter = () => {
      if(DLObj.isLight){
        project.current.style.boxShadow = '9px 10px 3px 0px rgb(98 70 234 / 76%)'
      }
      else{
        project.current.style.boxShadow = '9px 10px 3px 0px rgb(254 254 254 / 100%)'
      }
 }

 const backgroundHoverLeave = () => {
  project.current.style.boxShadow = ''
}

  return (
    <div ref={project} id='project' onClick={unhoverProject} onMouseEnter={backgroundHoverEnter} onMouseLeave={backgroundHoverLeave}>
            <img ref={projectImg} src={info.img} alt='' id='projectImg'></img>
            <h1 ref={proTitle} id='proTitle' >{info.title}</h1>
            <div ref={skillsBox} id='skillsBox'>
              <p ref={tool1} className='tool' id='tool1'>{info.tool1}</p>
              <p ref={tool2} className='tool' id='tool2'>{info.tool2}</p>
              <p ref={tool3} className='tool' id='tool3'>{info.tool3}</p>
            </div>
    </div>
  )
}
