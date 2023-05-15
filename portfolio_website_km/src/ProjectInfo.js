import {React, useEffect,  useRef} from 'react'
import './ProjectInfo.css'
import closePic from './close.png'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'

export default function ProjectInfo({selectedProjectInfo, DLObj, changeProjectInfo, changeState, state}) {
    // useEffect(()=> {
    //     console.log("Value passed to inner project component" + selectedProjectInfo.img)
    // },[selectedProjectInfo])

    //Below our useState that calls this stuff to be passed is going to fast
    //By the time our img reaches here, the useState already render stuff

    const projectInfoImg = useRef()

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

    var imgIndex = 0
    setInterval(() => {
        if(imgIndex < selectedProjectInfo.img.length)
        {
            imgIndex++
            projectInfoImg.src = selectedProjectInfo.img[imgIndex]
        }
        else{
            imgIndex--
            projectInfoImg.src = selectedProjectInfo.img[imgIndex]
        }
        console.log("IMG HAS CHANGED:")
        console.log(selectedProjectInfo.img[imgIndex])
        console.log("IMG INDEX: " + imgIndex)
    }, [8000])

    useEffect(()=> {},[imgIndex])


  return (
                <div id='projectInfoContainer'> 
                    <img ref={projectInfoImg} id='projectInfoImg' alt='' src={selectedProjectInfo.img[imgIndex]}></img>
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
