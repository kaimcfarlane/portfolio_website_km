import {React, useEffect} from 'react'
import './ProjectInfo.css'
import closePic from './close.png'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'

export default function ProjectInfo({selectedProjectInfo, DLObj, changeProjectInfo, changeState, state}) {
    // useEffect(()=> {
    //     console.log("Value passed to inner project component" + selectedProjectInfo.img)
    // },[selectedProjectInfo])

    //Below our useState that calls this stuff to be passed is going to fast
    //By the time our img reaches here, the useState already render stuff

    const closeProject = () => {
        var newProject = selectedProjectInfo
        newProject.isOpen = true
        changeProjectInfo(newProject)
        console.log('Close Project Btn Clicked, selectedPorjectInfo is now ' + selectedProjectInfo.isOpen)
        changeState(!state)
    }

    const urlBtnClick = (url) => {
        // window.location.href = url + '_blank'
        window.open(url, '_blank')
    }


  return (
                <div id='projectInfoContainer'> 
                    <img id='projectInfoImg' alt='' src={selectedProjectInfo.img}></img>
                    <h1 id='projectInfoTitle'>{selectedProjectInfo.title}</h1>
                    <p id='projectInfoDesc'>{selectedProjectInfo.desc}</p>
                    <div id='buttonsContainer'>
                            <button id='demoBtn' role="button" onClick={() => {urlBtnClick(selectedProjectInfo.demoUrl)}}>Live Demo <span>&#128640;</span></button>
                            <button id='codeBtn' onClick={() => {urlBtnClick(selectedProjectInfo.codeUrl)}}>Code <span>&#127757;</span></button>
                    </div>
                    {/* <div id='closeBtnContainer'>
                        <img id='closePic' alt='Close Btn' src={closePic} onClick={closeProject}></img>
                    </div> */}
                    <div id="closeBtnContainer" class="close-container" onClick={closeProject}>
                        {/* <div class="leftright"></div>
                        <div class="rightleft"></div> */}
                        <button id='close'></button>
                    </div>
                </div>
  )
}
