import {React, useEffect, useRef} from 'react'
import './skillsRTitle.css'

export default function SkillsRTitle({inview, name, DLObj}) {

    const h1 = useRef() 
    useEffect(() =>{
        if(!DLObj.isLight)
        {
            h1.current.style.color = "white"
        }
        else
        {
            h1.current.style.color = "black"
        }
    },[DLObj])

    useEffect(()=> {
      if(name === 'Languages')
      {
        if(inview){
          h1.current.classList.add("snappedRS1")
        }
        // else{
        //   h1.current.classList.remove("snappedRS1")
        // }
      }
      else if(name === 'Libraries')
      {
        if(inview){
          h1.current.classList.add("snappedRS2")
        }
        // else{
        //   h1.current.classList.remove("snappedRS2")
        // }
      }
      else if(name === 'Learned')
      {
        if(inview){
          h1.current.classList.add("snappedRS3")
        }
        // else{
        //   h1.current.classList.remove("snappedRS3")
        // }
      }
    },[inview])

  return (
    <h1 id='title' ref={h1} style={{color: 'black'}}>{name}</h1>
  )
}
