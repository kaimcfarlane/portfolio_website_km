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
    const proTitle = useRef()
    const proDesc = useRef()
    const btnsContainer = useRef()
    const logoBox = useRef()
    const projectInfoContainer = useRef()
    const rocket = useRef()
    const codeBtn = useRef()
    const demoBtn = useRef()
    const world = useRef()

    useEffect(()=>{
        if(DLObj.isLight)
        {
            closeBtn.current.style.backgroundColor = '#ffffff00'
            proTitle.current.style.backgroundColor = 'white'
            proTitle.current.style.color = '#16161a'
            proDesc.current.style.backgroundColor = 'white'
            proDesc.current.style.color = '#16161a'
            btnsContainer.current.style.backgroundColor = 'white'
            logoBox.current.style.backgroundColor = 'white'
            projectInfoContainer.current.style.backgroundColor = 'white'
            rocket.current.style.backgroundColor = '#fff0'
            world.current.style.backgroundColor = '#fff0'
            demoBtn.current.style.backgroundColor = 'black'
            demoBtn.current.style.color = 'white'
            demoBtn.current.style.border = '1px solid #ffffff'
            demoBtn.current.style.boxShadow = '#000 4px 4px 0 0, #fff 4px 4px 0 1px'
            codeBtn.current.style.backgroundColor = 'black'
            codeBtn.current.style.color = 'white'
            codeBtn.current.style.border = '1px solid #ffffff'
            codeBtn.current.style.boxShadow = '#000 4px 4px 0 0, #fff 4px 4px 0 1px'
            projectInfoContainer.current.style.borderStyle = 'none'
            // projectInfoContainer.current.style.borderRadius = '4px'
            // projectInfoContainer.current.style.borderWidth = '7px'
            // projectInfoContainer.current.style.borderColor = 'black'
            projectInfoContainer.current.style.boxShadow = 'none'
        }
        else{
            // projectInfoContainer.current.style.borderRadius = '4px'
            // projectInfoContainer.current.style.borderWidth = '5px'
            // projectInfoContainer.current.style.borderColor = 'white'
            // projectInfoContainer.current.style.borderStyle = 'double'
            projectInfoContainer.current.style.boxShadow = 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
            closeBtn.current.style.backgroundColor = '#ffffff00'
            proTitle.current.style.backgroundColor = '#16161a'
            proTitle.current.style.color = 'white'
            proDesc.current.style.backgroundColor = '#16161a'
            proDesc.current.style.color = 'white'
            btnsContainer.current.style.backgroundColor = '#16161a'
            logoBox.current.style.backgroundColor = '#16161a'
            projectInfoContainer.current.style.backgroundColor = '#16161a'
            rocket.current.style.backgroundColor = 'white'
            world.current.style.backgroundColor = '#fff0'
            demoBtn.current.style.backgroundColor = 'white'
            demoBtn.current.style.color = '#16161a'
            demoBtn.current.style.border = '1px solid #ffffff'
            demoBtn.current.style.boxShadow = '#000 4px 4px 0 0, #fff 4px 4px 0 1px'
            codeBtn.current.style.backgroundColor = '#16161a'
            codeBtn.current.style.color = 'white'
            codeBtn.current.style.border = '1px solid #ffffff'
            codeBtn.current.style.boxShadow = '#000 4px 4px 0 0, #fff 4px 4px 0 1px'
        }
    }, [DLObj.isLight])

    
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
                <div ref={projectInfoContainer} id='projectInfoContainer'> 
                    <img ref={projectInfoImg} id='projectInfoImg' alt='' src={selectedProjectInfo.img[imgIndex]}></img>
                    <h1 ref={proTitle} id='projectInfoTitle'>{selectedProjectInfo.title}</h1>
                    <p ref={proDesc} id='projectInfoDesc'>{selectedProjectInfo.desc}</p>
                    <div ref={btnsContainer} id='buttonsContainer'>
                            <button ref={demoBtn} id='demoBtn' role="button" onClick={() => {urlBtnClick(selectedProjectInfo.demoUrl)}}>Live Demo <span ref={rocket}>&#128640;</span></button>
                            <button ref={codeBtn} id='codeBtn' onClick={() => {urlBtnClick(selectedProjectInfo.codeUrl)}}>Code <span ref={world}>&#127757;</span></button>
                    </div>
                    <div ref={closeBtn} id="closeBtnContainer" class="arrow arrow--left" onClick={closeProject} onMouseOver={addArrowHoverCSS} onMouseLeave={removeArrowHoverCSS}>
                        <span ref={btnSpan}></span>
                    </div>
                    <div ref={logoBox} id='logoBox' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img alt='logo' src={selectedProjectInfo.logos[0] && selectedProjectInfo.logos[0]} style={{width: '30px', height: '30px'}}></img>
                        <img alt='logo' src={selectedProjectInfo.logos[1] && selectedProjectInfo.logos[1]} style={{width: selectedProjectInfo.title === 'Kiwi Pong' ? '27px' : '30px', height: selectedProjectInfo.title === 'Kiwi Pong' ? '27px' : '30px'}}></img>
                        <img alt='logo' src={selectedProjectInfo.logos[2] && selectedProjectInfo.logos[2]} style={{width: selectedProjectInfo.title === 'Recipeat' ? '26px' : '30px', height: selectedProjectInfo.title === 'Recipeat' ? '26px' : '30px', marginLeft: selectedProjectInfo.title === 'Recipeat' && '5px'}}></img>
                    </div>
                </div>
  )
}
