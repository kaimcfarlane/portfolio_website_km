import {React, useEffect, useRef} from 'react'

export default function SkillsRTitle({name, DLObj}) {

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

  return (
    <h1 ref={h1} style={{color: 'black'}}>{name}</h1>
  )
}
