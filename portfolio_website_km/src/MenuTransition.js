import React, { useState, useRef, useEffect } from 'react'
import './MenuTransition.css'

export default function MenuTransition({navClicked, changeNavClicked, burgerMenu, menuContent, burgerMenuClick, hrefs, DLObj}) {

  const transitionBox = useRef()
  const transitionBoxTitle = useRef()


  useEffect(()=>{
      transitionBox.current.style.transform = "translateX(0%)"
      setTimeout(()=> {
        transitionBox.current.style.transform = "translateX(100%)"
        menuContent.current.style.opacity = "0"
        burgerMenu.current.style.backgroundColor = "rgb(167 167 250 / 0%)"
        //On load call burger menu click but a
        if(menuContent.current.style.display !== "none" && hrefs[6] !== null)
        {
          burgerMenuClick()
        }
        if(hrefs[6] === 0)
          {
            window.location.href = hrefs[0]
          }
          else if(hrefs[6] === 1)
          {
            window.location.href = hrefs[1]
          }
          else if(hrefs[6] === 2)
          {
            window.location.href = hrefs[2]
          }
          else if(hrefs[6] === 3)
          {
            window.location.href = hrefs[3]
          }
          else if(hrefs[6] === 7)
          {
            window.location.href = hrefs[7]
          }
         setTimeout(()=>{
          transitionBox.current.style.opacity = "0"
          setTimeout(()=>{
            if(window.innerWidth < '500') {
              transitionBox.current.style.transform = "translateX(-150%)"
            }
            else{
              transitionBox.current.style.transform = "translateX(-100%)"
            }
            setTimeout(()=>{
              transitionBox.current.style.opacity = "100"
              menuContent.current.style.opacity = "100"
              burgerMenu.current.style.backgroundColor = ""
            },500)
          },500)
        },500)
      },800)
  },[navClicked])

  useEffect(()=> {
    if(DLObj.isLight)
    {
      transitionBoxTitle.current.style.backgroundColor = '#6246ea'
    }
  },[])

  return (
    <div ref={transitionBox} id='transitionBox'>
      <h1 ref={transitionBoxTitle} id='transitionBoxTitle'>KM</h1>
    </div>
  )
}
