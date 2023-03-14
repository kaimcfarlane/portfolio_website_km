import {React, useRef} from 'react'
import Project from './Project'
import tankPicture from './modstankPic.png'
import recipeImg1 from './recipeatImg1.png'
import reactTSImg1 from './reacttsImg1.png'
import reactTSImg2 from './reacttsImg2.png'
import reactTSImg3 from './reacttsImg3.png'
import kiwiImg from './kiwiWebsitePic.png'
import weatherappImg from './weatherappImg1.png'
import kiwipongimg from './kiwipongImg.png'
import './Projects.css'

export default function Projects({DLObj}) {

  const titleContainer = useRef()
  const title = useRef()
  const subTitle = useRef()
  const projectContainer = useRef()
  const topProjects = useRef()
  const botProjects = useRef()

  const projectImg1 = useRef()
  const projectTitle1 = useRef()

  const info1 = {img: recipeImg1, title: 'Recipeat', tool1: '//TypeScript', tool2: '//Node.js', tool3: '//MongoDB'}
  const info2 = {img: weatherappImg, title: 'MyClimi', tool1: '//JavaScript', tool2: '//KeyFrames', tool3: '//RestApi'}
  const info3 = {img: reactTSImg1, title: 'ReactTS', tool1: '//JavaScript', tool2: '//BootStrap', tool3: '//Chart.js'}
  const info4 = {img: kiwiImg, title: 'Kiwi-El-Gato', tool1: '//JavaScript', tool2: '//JotForm', tool3: '//WordPress'}
  const info5 = {img: kiwipongimg, title: 'Kiwi Pong', tool1: '//C#', tool2: '//Unity', tool3: '//2D-Modeling'}
  const info6 = {img: recipeImg1, title: 'Calculator', tool1: '//C#', tool2: '//2D-Arrays', tool3: '//OOP'}
  

  return (
    <>
      <section ref={titleContainer} id='projectTitleContainer'>
        <h1 ref={title} id='projectTitle'>I'm a Creator</h1>
        <p ref={subTitle} id='projectSubTitle'>-Front and Backend-</p>
      </section>
      <section ref={projectContainer} id='projectContainer'>
        <div className='projectSubBox' ref={topProjects} id='topProjects'>
              <Project info={info1}/>
              <Project  info={info2}/>
              <Project info={info3}/>
        </div>
        <div className='projectSubBox' ref={botProjects} id='botProjects'>
            <Project info={info4}/>
            <Project info={info5}/>
            <Project info={info6}/>
        </div>
      </section>
    </>
  )
}
