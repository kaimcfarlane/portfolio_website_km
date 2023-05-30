import React, { useState, useRef, useEffect } from 'react'
import './MenuTransition.css'

export default function MenuTransition(navClicked, changeNavClicked) {

  const transitionBox = useRef()

  useEffect(()=>{
      transitionBox.current.style.transform = "translateX(0%)"
      setTimeout(()=> {
        transitionBox.current.style.transform = "translateX(-100%)"
      },1000)
  },[navClicked])

  return (
    <div ref={transitionBox} id='transitionBox'></div>
  )
}
