import {React, useRef} from 'react'
import './project.css'

export default function Project({info}) {

  const projectImg = useRef()
  const proTitle = useRef()
  const tool1 = useRef()
  const tool2 = useRef()
  const tool3 = useRef()

  return (
    <div id='project'>
            <img ref={projectImg} src={info.img} alt='' id='projectImg'></img>
            <h1 ref={proTitle} id='proTitle' >{info.title}</h1>
            <div id='skillsBox'>
              <p ref={tool1} className='tool' id='tool1'>{info.tool1}</p>
              <p ref={tool2} className='tool' id='tool2'>{info.tool2}</p>
              <p ref={tool3} className='tool' id='tool3'>{info.tool3}</p>
            </div>
    </div>
  )
}
