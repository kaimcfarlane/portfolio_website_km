import {React, useRef} from 'react'
import Project from './Project'
import tankPicture from './modstankPic.png'
import './projects.css'

export default function Projects({DLObj}) {

  const titleContainer = useRef()
  const title = useRef()
  const subTitle = useRef()
  const projectContainer = useRef()
  const topProjects = useRef()
  const botProjects = useRef()

  return (
    <>
      <section ref={titleContainer} id='projectTitleContainer'>
        <h1 ref={title} id='projectTitle'>I'm a Creator</h1>
        <p ref={subTitle} id='projectSubTitle'>-Front and Backend-</p>
      </section>
      <section ref={projectContainer} id='projectContainer'>
        <div className='projectSubBox' ref={topProjects} id='topProjects'>
          {/* <div className='project'>
            <img ref={projectImg1} src='' alt='' id='projectImg1' className='projectImg'></img>
            <h1 ref={projectTitle1} id='projectTitle1' className='projectTitle'></h1>
            <div className='skillsContainer'>
              <p ref={p1t1} className='tool' id='tool1'></p>
              <p ref={p1t2} className='tool' id='tool2'></p>
              <p ref={p1t3} className='tool' id='tool3'></p>
            </div>
          </div> */}
          {/* <Porject info = {img: 'NA', title: '', subTitle: ''}/> */}

          {/* <div className='project'>
          <img ref={projectImg2} src='' alt='' id='projectImg2' className='projectImg'></img>
            <h1 ref={projectTitle2} id='projectTitle2' className='projectTitle'></h1>
            <div className='skillsContainer'>
              <p ref={p2t1} className='tool' id='tool1'></p>
              <p ref={p2t2} className='tool' id='tool2'></p>
              <p ref={p2t3} className='tool' id='tool3'></p>
            </div>
          </div>
          <div className='project'>
          <img ref={projectImg3} src='' alt='' id='projectImg3' className='projectImg'></img>
            <h1 ref={projectTitle3} id='projectTitle3' className='projectTitle'></h1>
            <div className='skillsContainer'>
              <p ref={p3t1} className='tool' id='tool1'></p>
              <p ref={p3t2} className='tool' id='tool2'></p>
              <p ref={p4t3} className='tool' id='tool3'></p>
            </div>
          </div> */}
        </div>
        <div className='projectSubBox' ref={botProjects} id='botProjects'>
          <div className='project'>

          </div>
          <div className='project'>

          </div>
          <div className='project'>

          </div>
        </div>
      </section>
    </>
  )
}
