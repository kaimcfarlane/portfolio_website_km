import React, { useState, useRef, useEffect } from 'react'
import './MenuTransition.css'

export default function MenuTransition({navClicked, changeNavClicked, burgerMenu, menuContent, burgerMenuClick}) {

  const transitionBox = useRef()
  useEffect(()=>{
      transitionBox.current.style.transform = "translateX(0%)"
      setTimeout(()=> {
        transitionBox.current.style.transform = "translateX(100%)"
       menuContent.current.style.opacity = "0"
       burgerMenu.current.style.backgroundColor = "rgb(167 167 250 / 0%)"
        burgerMenuClick()
        setTimeout(()=>{
          transitionBox.current.style.opacity = "0"
          setTimeout(()=>{
            transitionBox.current.style.transform = "translateX(-100%)"
            setTimeout(()=>{
              transitionBox.current.style.opacity = "100"
              menuContent.current.style.opacity = "100"
              burgerMenu.current.style.backgroundColor = ""
            },500)
          },500)
        },500)
      },800)
  },[navClicked])

  return (
    <div ref={transitionBox} id='transitionBox'>
      <h1 id='transitionBoxTitle'>KM</h1>
    </div>
  )
}
