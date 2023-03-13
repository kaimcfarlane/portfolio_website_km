import {React, useRef} from 'react'

export default function Project({info}) {

  const imgSrc = info.img
  const projectImg = useRef()
  const projectTitle = useRef()
  const tool1 = useRef()
  const tool2 = useRef()
  const tool3 = useRef()

  return (
    <div className='project'>
            <img ref={projectImg} src='' alt='' id='projectImg' className='projectImg'></img>
            <h1 ref={projectTitle} id='projectTitle' className='projectTitle'>{info.title}</h1>
            <div className='skillsContainer'>
              <p ref={tool1} className='tool' id='tool1'>{info.tool1}</p>
              <p ref={tool2} className='tool' id='tool2'>{info.tool2}</p>
              <p ref={tool3} className='tool' id='tool3'>{info.tool3}</p>
            </div>
    </div>
  )
}
