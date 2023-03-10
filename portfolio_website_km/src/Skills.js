import React from 'react'
import './skill.css'
import JS_Icon from './javascriptIcon.png'
import html_Icon from './htmlLogo.png'
import css_Icon from './cssLogo.png'
import java_Logo from './javaLogo.png'
import react_Logo from './reactLogo.png'
import typescript_Logo from './typescriptLogo.png'
import cSharp_Logo from './cSharp_Logo.png'

export default function skillsPage() {
  return (
  <>
    <section id='skillsContainer'>
      <div id='skillsText'>
        <h1>I'm</h1>
        <h1>Experienced</h1>
        <p>- 3 Years Experience -</p>
      </div>
      <div id='skillsContent'>
        <div>
          <h1>Lanuages</h1>
          <div className='imageContainer'>
            <img className='icon' alt='languageIcon' src={html_Icon}></img>
            <img className='icon' alt='languageIcon' src={css_Icon}></img>
            <img className='icon' alt='languageIcon' src={JS_Icon}></img>
            <img className='icon' id='typescript_Logo' alt='languageIcon' src={typescript_Logo}></img>
            <img className='icon' id='react_Logo' alt='languageIcon' src={react_Logo}></img>
            <img className='icon' id='java_Logo' alt='languageIcon' src={java_Logo}></img>
            <img className='icon' id='cSharp_Logo' alt='languageIcon' src={cSharp_Logo}></img>
          </div>
        </div>
        <div>
        <h1>Libraries</h1>
          <div className='imageContainer'>
            <img className='icon' alt='libraryIcon' src={JS_Icon}></img>
            <img className='icon' alt='libraryIcon' src={JS_Icon}></img>
            <img className='icon' alt='libraryIcon' src={JS_Icon}></img>
          </div>
        </div>
        <div>
        <h1>Learned</h1>
          <div className='imageContainer'>
            <img className='icon' alt='learnedIcon' src={JS_Icon}></img>
            <img className='icon' alt='learnedIcon' src={JS_Icon}></img>
            <img className='icon' alt='learnedIcon' src={JS_Icon}></img>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
