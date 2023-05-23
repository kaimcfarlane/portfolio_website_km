import {React, useEffect, useRef} from 'react'

export default function SkillsRTitle({inView, name, DLObj}) {

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
        if(inView){
          h1.current.classList.add("snappedRS1")
        }
        // else{
        //   h1.current.classList.remove("snappedRS1")
        // }
      }
      else if(name === 'Libraries')
      {
        if(inView){
          h1.current.classList.add("snappedRS2")
        }
        // else{
        //   h1.current.classList.remove("snappedRS2")
        // }
      }
      else if(name === 'Learned')
      {
        if(inView){
          h1.current.classList.add("snappedRS3")
        }
        // else{
        //   h1.current.classList.remove("snappedRS3")
        // }
      }
    },[inView])

  return (
    <h1 ref={h1} style={{color: 'black'}}>{name}</h1>
  )
}
