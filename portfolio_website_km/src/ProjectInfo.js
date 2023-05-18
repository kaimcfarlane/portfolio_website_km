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
    const closeBtn = useRef()
    const btnSpan = useRef()

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

    const addArrowHoverCSS = () => {
        // closeBtn.current.style.animation = 'none';
        btnSpan.current.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(0, 0, 0) 0px 0px 0px 3px'
    }

    const removeArrowHoverCSS = () => {
        // closeBtn.current.style.animation = 'blink 2s linear infinite';
        btnSpan.current.style.boxShadow = 'none';
    }

  return (
                <div id='projectInfoContainer'> 
                    <img ref={projectInfoImg} id='projectInfoImg' alt='' src={selectedProjectInfo.img[imgIndex]}></img>
                    <h1 id='projectInfoTitle'>{selectedProjectInfo.title}</h1>
                    <p id='projectInfoDesc'>{selectedProjectInfo.desc}</p>
                    <div id='buttonsContainer'>
                            <button id='demoBtn' role="button" onClick={() => {urlBtnClick(selectedProjectInfo.demoUrl)}}>Live Demo <span>&#128640;</span></button>
                            <button id='codeBtn' onClick={() => {urlBtnClick(selectedProjectInfo.codeUrl)}}>Code <span>&#127757;</span></button>
                    </div>
                    <div ref={closeBtn} id="closeBtnContainer" class="arrow arrow--left" onClick={closeProject} onMouseOver={addArrowHoverCSS} onMouseLeave={removeArrowHoverCSS}>
                        <span ref={btnSpan}></span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '24px'}}>
                        <img alt='logo' src={selectedProjectInfo.logos[0] && selectedProjectInfo.logos[0]} style={{width: '30px', height: '30px'}}></img>
                        <img alt='logo' src={selectedProjectInfo.logos[1] && selectedProjectInfo.logos[1]} style={{width: selectedProjectInfo.title === 'Kiwi Pong' ? '27px' : '30px', height: selectedProjectInfo.title === 'Kiwi Pong' ? '27px' : '30px'}}></img>
                        <img alt='logo' src={selectedProjectInfo.logos[2] && selectedProjectInfo.logos[2]} style={{width: selectedProjectInfo.title === 'Recipeat' ? '26px' : '30px', height: selectedProjectInfo.title === 'Recipeat' ? '26px' : '30px', marginLeft: selectedProjectInfo.title === 'Recipeat' && '5px'}}></img>
                    </div>
                </div>
  )
}
