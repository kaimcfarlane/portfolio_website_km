import {React, useRef, useEffect} from 'react'
import './skill.css'
import SkillsRTitle from './SkillsRTitle'
import JS_Icon from './javascriptIcon.png'
import html_Icon from './htmlLogo.png'
import css_Icon from './cssLogo.png'
import java_Logo from './javaLogo.png'
import react_Logo from './reactLogo.png'
import typescript_Logo from './typescriptLogo.png'
import cSharp_Logo from './cSharp_Logo.png'
import express_Logo from './expressLogo.png'
import mui_Logo from './materialuiLogo.png'
import node_Logo from './nodeLogo.png'
import mongodb_Logo from './mongodb_Logo.png'
import api_Logo from './apiLogo.png'
import git_Logo from './gitLogo.png'
import gitlab_Logo from './gitlabLogo.png'
import heroku_Logo from './herokuLogo.png'
import dr_Logo from './davinciresolveLogo.png'
import chartjs_Logo from './icons8-area-chart-96.png'
import pythonLogo from './pythonlogo.png'
import cPlusPlusLogo from './c++.png'
import jiraLogo from './jiralogo.png'
import sqlLogo from './sqlLogo.png'
import bootstrapLogo from './bootstraplogo.png'

export default function Skills({DLObj}) {

  const titleOne = useRef()
  const titleTwo = useRef()
  const subtitle = useRef()

  useEffect(() =>{
    if(!DLObj.isLight)
    {
        titleOne.current.style.color = "#fffffe";
        titleTwo.current.style.color = "#fffffe";
        subtitle.current.style.color = "#fffffe";
    }
    else
    {
      titleOne.current.style.color = "black";
        titleTwo.current.style.color = "black";
        subtitle.current.style.color = "black";
    }
},[DLObj])


  return (
  <>
    <section id='skillsContainer'>
      <div id='skillsText'>
        {/* Skillset I'm Skilled My Talent Im talented */}
        <h1 ref={titleOne}>I'm</h1>
        <h1 ref={titleTwo}>Experienced</h1>
        <p ref={subtitle}>- 3 Years of Code -</p>
      </div>
      <div id='skillsContent'>
        <div>
          <SkillsRTitle name={'Langauges'} DLObj={DLObj}/>
          <div className='imageContainer'>
            <img className='icon' alt='languageIcon' src={html_Icon}></img>
            <img className='icon' alt='languageIcon' src={css_Icon}></img>
            <img className='icon' alt='languageIcon' src={JS_Icon}></img>
            <img className='icon' id='typescript_Logo' alt='languageIcon' src={typescript_Logo}></img>
            <img className='icon' id='java_Logo' alt='languageIcon' src={java_Logo}></img>
            <img className='icon' id='cSharp_Logo' alt='languageIcon' src={cSharp_Logo}></img>
            <img className='icon' id='cPlusPlusLogo' alt='languageIcon' src={cPlusPlusLogo}></img>
            <img className='icon' id='pythonLogo' alt='languageIcon' src={pythonLogo}></img>
          </div>
        </div>
        <div>
        <SkillsRTitle name={'Libraries'} DLObj={DLObj}/>
          <div className='imageContainer'>
            <img className='icon' id='react_Logo' alt='libraryIcon' src={react_Logo}></img>
            <img className='icon' id='express_Logo' alt='libraryIcon' src={express_Logo}></img>
            <img className='icon' id='mui_Logo' alt='libraryIcon' src={mui_Logo}></img>
            <img className='icon' id='node_Logo' alt='libraryIcon' src={node_Logo}></img>
            <img className='icon' id='chartjs_Logo' alt='libraryIcon' src={chartjs_Logo}></img>
            <img className='icon' id='chartjs_Logo' alt='libraryIcon' src={sqlLogo}></img>
            <img className='icon' id='chartjs_Logo' alt='libraryIcon' src={bootstrapLogo}></img>
          </div>
        </div>
        <div>
        <SkillsRTitle name={'Learned'} DLObj={DLObj}/>
          <div className='imageContainer'>
            <img className='icon' alt='learnedIcon' src={mongodb_Logo}></img>
            <img className='icon' alt='learnedIcon' src={api_Logo}></img>
            <img className='icon' alt='learnedIcon' src={git_Logo}></img>
            <img className='icon' alt='learnedIcon' src={gitlab_Logo}></img>
            <img className='icon' alt='learnedIcon' src={heroku_Logo}></img>
            <img className='icon' alt='learnedIcon' src={jiraLogo}></img>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
