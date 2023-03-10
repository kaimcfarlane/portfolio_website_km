import React from 'react'
import './skill.css'
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

export default function skillsPage() {
  return (
  <>
    <section id='skillsContainer'>
      <div id='skillsText'>
        <h1>I'm</h1>
        <h1>Experienced</h1>
        <p>- 3 Years of Code -</p>
      </div>
      <div id='skillsContent'>
        <div>
          <h1>Lanuages</h1>
          <div className='imageContainer'>
            <img className='icon' alt='languageIcon' src={html_Icon}></img>
            <img className='icon' alt='languageIcon' src={css_Icon}></img>
            <img className='icon' alt='languageIcon' src={JS_Icon}></img>
            <img className='icon' id='typescript_Logo' alt='languageIcon' src={typescript_Logo}></img>
            <img className='icon' id='java_Logo' alt='languageIcon' src={java_Logo}></img>
            <img className='icon' id='cSharp_Logo' alt='languageIcon' src={cSharp_Logo}></img>
          </div>
        </div>
        <div>
        <h1>Libraries</h1>
          <div className='imageContainer'>
            <img className='icon' id='react_Logo' alt='libraryIcon' src={react_Logo}></img>
            <img className='icon' alt='libraryIcon' src={express_Logo}></img>
            <img className='icon' alt='libraryIcon' src={mui_Logo}></img>
            <img className='icon' alt='libraryIcon' src={node_Logo}></img>
          </div>
        </div>
        <div>
        <h1>Learned</h1>
          <div className='imageContainer'>
            <img className='icon' alt='learnedIcon' src={mongodb_Logo}></img>
            <img className='icon' alt='learnedIcon' src={api_Logo}></img>
            <img className='icon' alt='learnedIcon' src={git_Logo}></img>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
