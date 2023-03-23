import {React, useEffect} from 'react'
import './ProjectInfo.css'

export default function ProjectInfo({selectedProjectInfo, DLObj}) {
    // useEffect(()=> {
    //     console.log("Value passed to inner project component" + selectedProjectInfo.img)
    // },[selectedProjectInfo])

    //Below our useState that calls this stuff to be passed is going to fast
    //By the time our img reaches here, the useState already render stuff
  return (
                <div> 
                    <img id='projectInfoImg' alt='' src={selectedProjectInfo.img}></img>
                </div>
  )
}
