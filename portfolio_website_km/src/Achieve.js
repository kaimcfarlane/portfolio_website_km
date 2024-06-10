import {React, useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import './achieve.css'
import purple_Logo from './purpleawardLogo.png'
import kiwi_WebsitePic from './kiwiWebsitePic.png'
import modsvr_Pic from './modsvr_Pic.png'
import modstank_Pic from './modstankPic.png'
import ufit_Pic from './ufitPic.png'
import purpleWeb_Logo1 from './purpleWeb_Logo1.png'
import purpleWeb_Logo2 from './purpleWeb_Logo2.png'
import purpleWeb_Logo3 from './purpleWeb_Logo3.png'
import kiwi_Logo from './Kiwi-cat-logo-1.png'
import Mods_Logo from './MODS_Logo_Transparent.png'
import Mods_Logo2 from './mods_Logo2_Transparent.png'
import UFIT_logo from './UFIT-Primary-Signature.png'
import UF_Logo from './UF_Logo.png'
import codingPic1 from './codingPic1.jpg'
import ufitPic2 from './ufitPic2.jpg'
import vrPic1 from './virtualRealityPic1.jpg'

import UFIT_Logo from './UFIT_Logo2.jpeg'
import Disney_Logo from './Disney_Logo.png'
import InfoTech_Logo from './infotech_logo3.png'

import code3 from './code3.jpg'

import vr3 from './vr3.jpg'
import mods1 from './modstankimg1.png'
import mods2 from './mods2.png'
import mods3 from './mods3.png'
import mods4 from './mods4.png'
import mods5 from './mods5.png'
import mods6 from './mods6.png'
import mods7 from './mods7.png'
import mods8 from './mods8.png'

import kiwi1 from './kiwi1.png'
import kiwi2 from './kiwi2.png'
import kiwi3 from './kiwi3.png'
import kiwi4 from './kiwi4.png'
import kiwi5 from './kiwi5.png'
import kiwi6 from './kiwi6.png'
import kiwi7 from './kiwi7.png'
import kiwi8 from './kiwi8.png'
import kiwi9 from './kiwi9.png'
import kiwi10 from './kiwi10.png'
import kiwi11 from './kiwi11.png'
import kiwi12 from './kiwi12.png'

import ufit2 from './ufit2.png'
import ufit3 from './ufit3.jpeg'
import ufit4 from './ufit4.jpeg'
import ufit5 from './ufit5.jpeg'
import ufit6 from './ufit6.jpeg'
import ufit7 from './ufit7.jpeg'
import ufit8 from './ufit8.jpeg'
import ufit9 from './ufit3.jpeg'


//It works but we want seperate images to display upon clicking an arrow on the img
//Weve tried with just clicking the image for the functionality but our we are not mapping the array with thenew source correctly
//It work as weve made one import equal to another, update the sate and see the change

export default function Achieve({DLObj}) {
    const achieveTitle = useRef()
    const achieveSubtitle = useRef()
    const job1 = useRef()
    const job2 = useRef()
    const job3 = useRef()
    const jobDesc1 = useRef()
    const jobDesc2 = useRef()
    const jobDesc3 = useRef()
    const jobTitle1 = useRef()
    const jobTitle2 = useRef()
    const jobTitle3 = useRef()
    const jobSub1 = useRef()
    const jobSub2 = useRef()
    const jobSub3 = useRef()
    const img1 = useRef()
    const img2 = useRef()
    const img3 = useRef()
    const awardBot1 = useRef()
    const awardBot2 = useRef()
    const awardBot3 = useRef()
    const awardTop1 = useRef()
    const awardTop2 = useRef()
    const awardTop3 = useRef()


    // const [jobImages, setJobImages] = useState([{job: purpleWeb_Logo1}, {job: purpleWeb_Logo2}, {job: purpleWeb_Logo3}])

    // useEffect(() => {
    //     purpleWeb_Logo1 = jobImages[0].job
    //     purpleWeb_Logo2 = jobImages[1].job
    //     purpleWeb_Logo3 = jobImages[2].job
    // }, [jobImages])
    

    var clicked1 = false;
    var clicked2 = false;
    var clicked3 = false;

    const openJobDesc = (item) => {
        if(window.innerWidth > 500) {
            if (item === 1)
        {
            if(!clicked1)
            {
                // jobDesc1.current.style.display = "flex"
                // img1.current.style.height = "188px"
                // img1.current.style.minHeight = "188px"

                img1.current.style.height = "135px"
                img1.current.style.minHeight = "135px"

                jobDesc1.current.style.opacity = "100%"
                // const newjobImages = jobImages.map((img) => {
                //     if(img.job == kiwi_WebsitePic){
                //         img.job = modstank_Pic
                //     }
                // })
                // setJobImages(newjobImages)
                clicked1 = true
            }
            else
            {
                // jobDesc1.current.style.display = "none"
                // img1.current.style.height = "210px"
                // img1.current.style.minHeight = "210px"
                img1.current.style.height = "177px"
                img1.current.style.minHeight = "177px"
                jobDesc1.current.style.opacity = "0%"
                clicked1 = false
            }
        }
        else if(item === 2)
        {
            if(!clicked2)
            {
                // img2.current.style.height = "188px"
                // img2.current.style.minHeight = "188px"
                img2.current.style.height = "135px"
                img2.current.style.minHeight = "135px"
                jobDesc2.current.style.opacity = "100%"
                clicked2 = true
            }
            else
            {
                // img2.current.style.height = "210px"
                // img2.current.style.minHeight = "210px"
                img2.current.style.height = "177px"
                img2.current.style.minHeight = "177px"
                jobDesc2.current.style.opacity = "0%"
                clicked2 = false
            }
        }
        else 
        {
            if(!clicked3)
            {
                // jobDesc3.current.style.display = "flex"
                // img3.current.style.minHeight = "188px"
                // img3.current.style.height = "188px"
                img3.current.style.minHeight = "135px"
                img3.current.style.height = "135px"
                jobDesc3.current.style.opacity = "100%"
                clicked3 = true
            }
            else
            {
                // jobDesc3.current.style.display = "none"
                // img3.current.style.height = "210px"
                // img3.current.style.minHeight = "210px"
                img3.current.style.height = "177px"
                img3.current.style.minHeight = "177px"
                jobDesc3.current.style.opacity = "0%"
                clicked3 = false
            }
        }
        }
        else if(window.innerWidth<501 && window.innerHeight>850){
            img1.current.style.height = "115px"
            img1.current.style.minHeight = "115px"
            jobDesc1.current.style.opacity = "0%"
            clicked1 = false
            img3.current.style.height = "115px"
            img3.current.style.minHeight = "115px"
            jobDesc3.current.style.opacity = "0%"
            clicked3 = false
            img2.current.style.height = "115px"
            img2.current.style.minHeight = "115px"
            jobDesc2.current.style.opacity = "0%"
            clicked2 = false
        }
        else{
            img1.current.style.height = "70px"
            img1.current.style.minHeight = "70px"
            jobDesc1.current.style.opacity = "0%"
            clicked1 = false
            img3.current.style.height = "70px"
            img3.current.style.minHeight = "70px"
            jobDesc3.current.style.opacity = "0%"
            clicked3 = false
            img2.current.style.height = "70px"
            img2.current.style.minHeight = "70px"
            jobDesc2.current.style.opacity = "0%"
            clicked2 = false
        }
    }

    useEffect(()=> {
        DLswitch()
    }, [DLObj])

    const DLswitch = () => {
        if(!DLObj.isLight)
        {
            job1.current.style.borderColor = "white"
            job2.current.style.borderColor = "white"
            job3.current.style.borderColor = "white"

            job1.current.style.borderWidth = '3px'
            job2.current.style.borderWidth = '3px'
            job3.current.style.borderWidth = '3px'
            job1.current.style.borderStyle = 'ridge'
            job2.current.style.borderStyle = 'ridge'
            job3.current.style.borderStyle = 'ridge'
            job1.current.style.boxShadow = '9px 10px 1px 0px rgb(255 255 255)'
            job2.current.style.boxShadow = '9px 10px 1px 0px rgb(255 255 255)'
            job3.current.style.boxShadow = '9px 10px 1px 0px rgb(255 255 255)'
            

            job1.current.style.backgroundColor = "#6246ea"
            job2.current.style.backgroundColor = "#6246ea"
            job3.current.style.backgroundColor = "#6246ea"

            achieveTitle.current.style.color = "rgb(255, 255, 254)"
            achieveSubtitle.current.style.color = "rgb(255, 255, 254)"
            jobTitle1.current.style.color = "rgb(255, 255, 254)"
            jobTitle2.current.style.color = "rgb(255, 255, 254)"
            jobTitle3.current.style.color = "rgb(255, 255, 254)"
            jobSub1.current.style.color = "rgb(255, 255, 254)"
            jobSub2.current.style.color = "rgb(255, 255, 254)"
            jobSub3.current.style.color = "rgb(255, 255, 254)"
            jobDesc1.current.style.color = "rgb(255, 255, 254)"
            jobDesc2.current.style.color = "rgb(255, 255, 254)"
            jobDesc3.current.style.color = "rgb(255, 255, 254)"
            awardTop1.current.style.color = "rgb(255, 255, 254)"
            awardTop2.current.style.color = "rgb(255, 255, 254)"
            awardTop3.current.style.color = "rgb(255, 255, 254)"
            awardBot1.current.style.color = "rgb(255, 255, 254)"
            awardBot2.current.style.color = "rgb(255, 255, 254)"
            awardBot3.current.style.color = "rgb(255, 255, 254)"

            jobTitle1.current.style.backgroundColor = "#6246ea"
            jobTitle2.current.style.backgroundColor = "#6246ea"
            jobTitle3.current.style.backgroundColor = "#6246ea"
            jobSub1.current.style.backgroundColor = "#6246ea"
            jobSub2.current.style.backgroundColor = "#6246ea"
            jobSub3.current.style.backgroundColor = "#6246ea"
            jobDesc1.current.style.backgroundColor = "#6246ea"
            jobDesc2.current.style.backgroundColor = "#6246ea"
            jobDesc3.current.style.backgroundColor = "#6246ea"
        }
        else
        {
            job1.current.style.borderColor = "#6246ea"
            job2.current.style.borderColor = "#6246ea"
            job3.current.style.borderColor = "#6246ea"
            job1.current.style.backgroundColor = "white"
            job2.current.style.backgroundColor = "white"
            job3.current.style.backgroundColor = "white"

            job1.current.style.borderWidth = '1px'
            job2.current.style.borderWidth = '1px'
            job3.current.style.borderWidth = '1px'
            job1.current.style.borderStyle = 'solid'
            job2.current.style.borderStyle = 'solid'
            job3.current.style.borderStyle = 'solid'
            job1.current.style.boxShadow = '9px 10px 3px 0px rgb(98 70 234 / 76%)'
            job2.current.style.boxShadow = '9px 10px 3px 0px rgb(98 70 234 / 76%)'
            job3.current.style.boxShadow = '9px 10px 3px 0px rgb(98 70 234 / 76%)'

            achieveTitle.current.style.color = "black"
            achieveSubtitle.current.style.color = "black"
            jobTitle1.current.style.color = "black"
            jobTitle2.current.style.color = "black"
            jobTitle3.current.style.color = "black"
            jobSub1.current.style.color = "black"
            jobSub2.current.style.color = "black"
            jobSub3.current.style.color = "black"
            jobDesc1.current.style.color = "black"
            jobDesc2.current.style.color = "black"
            jobDesc3.current.style.color = "black"
            awardTop1.current.style.color = "black"
            awardTop2.current.style.color = "black"
            awardTop3.current.style.color = "black"
            awardBot1.current.style.color = "black"
            awardBot2.current.style.color = "black"
            awardBot3.current.style.color = "black"

            jobTitle1.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobTitle2.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobTitle3.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobSub1.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobSub2.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobSub3.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobDesc1.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobDesc2.current.style.backgroundColor = "rgb(255, 255, 254)"
            jobDesc3.current.style.backgroundColor = "rgb(255, 255, 254)"
        }
    }
    

    // const unhoverProject = () => {
    //     // project.current.style.boxShadow = ''
    //     console.log("Project " + index + " Btn Clicked!")
    //     projectClick(index)
    // }
    
    const kiwiPicArr = [kiwi7,kiwi9,kiwi10,kiwi11,kiwi12,kiwi5,kiwi4,kiwi2,kiwi1]
    const modsPicArr = [mods4,mods8,mods7,mods2,mods3]
    const ufitPicArr = [ufit4,ufit5,ufit6,ufit7,ufit9]
    const pictureSwap = (element, picArr) => {
            var i=0
            setInterval(()=> {
                if(i === picArr.length)
                {
                    i=0
                }
                element.current.style.opacity = 0;
                setTimeout(()=> {
                    element.current.src = picArr[i]
                    setTimeout(()=>{
                        element.current.style.opacity = 100;
                        i++
                    },100)
                },500)
            },7000)
    }

    

    

    // useEffect(() => {
    //     // setInterval(() => {
    //     //     if(img3.current.name === 'imgA') 
    //     //     {
    //     //         img3.current.src = vr3
    //     //         img3.current.name = 'imgB'
    //     //     } 
    //     //     else
    //     //     {
    //     //         img3.current.src = code3
    //     //         img3.current.name = 'imgA'
    //     //     }
    //     //     console.log(img3.current.src)
    //     // }, 6000)
       
    // },[inView])
    

    const backgroundHoverLeave = (name) => {
        name.current.style.boxShadow = ''
      }

      const backgroundHoverEnter = (name) => {
        if(DLObj.isLight){
          name.current.style.boxShadow = 'rgba(98, 70, 234, 0.76) 5px 6px 7px 0px'
        }
        else{
          name.current.style.boxShadow = 'rgb(255 255 255 / 73%) 5px 7px 7px 0px'
        }
   }

   const { ref, inView, entry } = useInView({threshold: 0,})
   const titleContainer = useRef()
   const awardsContainer = useRef()

   useEffect(()=>{
    if(inView) {
      titleContainer.current.classList.add("snappedLBTitle")
      awardsContainer.current.classList.add("snappedLBLate")
      job1.current.classList.add("snappedRS1")
      job2.current.classList.add("snappedRS2")
      job3.current.classList.add("snappedRS3")
    //   pictureSwap(img1,kiwiPicArr)
    //   pictureSwap(img2,modsPicArr)
    //   pictureSwap(img3,ufitPicArr)
      if(window.innerWidth < '970') {
        jobTitle3.current.innerHTML = "Software Engineer Intern"
        jobSub3.current.innerHTML = 'June 2024 - Present'
        jobTitle1.current.innerHTML = "Web-App Developer Intern"
        jobSub2.current.innerHTML = "January 2023 - Janauary 2024"
    }
    }
    else{
    //   titleContainer.current.classList.remove("snappedLB")
    //   awardsContainer.current.classList.remove("snappedLBLate")
    //   job1.current.classList.remove("snappedRS1")
    //   job2.current.classList.remove("snappedRS2")
    //   job3.current.classList.remove("snappedRS3")
    }
  },[inView])

    const updateDimension = () => {
        if(window.innerWidth < '970' && window.innerWidth > '500') {
            jobTitle3.current.innerHTML = "Software Engineer Intern"
            jobSub3.current.innerHTML = 'June 2024 - Present'
            jobTitle1.current.innerHTML = "Web-App Developer Intern"
            jobSub2.current.innerHTML = "January 2023 - Janauary 2024"
        }
        else{
            jobTitle3.current.innerHTML = "Software Engineer Intern"
            jobSub3.current.innerHTML = 'June 2024 - Present'
            jobTitle1.current.innerHTML = "Web-App Developer Intern"
            jobSub2.current.innerHTML = "January 2023 - Janauary 2024"

        }
    }

    window.addEventListener('resize', updateDimension);

      

  return (
    <>
        <div ref={titleContainer} id='achieveTitleContainer'>
            <h1 id='achieveTitle' ref={achieveTitle}>I'm an Innovator</h1>
            <p ref={achieveSubtitle} id='achieveSubtitle'>&lt;Work and Awards/&gt;</p>
            <img alt='' src=''></img>
        </div>
        <div ref={ref} id='workContainer'>
                <div ref={job1} className='job' id='job1'>
                    <h1 ref={jobTitle1} className='jobh1'>Web-App Developer Intern</h1>
                    <h2 ref={jobSub1} className='jobh2'>Janaury 2023 - January 2024</h2>
                    <img id='ufit_logo' src={UFIT_Logo}></img>
                    <img className='achieveImg' ref={img1} id='kiwi_WebsitePic' src={codingPic1} alt='' onClick={() => openJobDesc(1)} onMouseEnter={() => backgroundHoverEnter(img1)} onMouseLeave={() => backgroundHoverLeave(img1)}></img>
                    <p ref={jobDesc1} className='jobDesc' id='jobDesc1'>Redesigned and implemented new cards feature for the personal UF Workspace with React.js, Node.js, and SQL</p>
                </div>
                <div ref={job2} className='job' id='job2'>
                    <h1 ref={jobTitle2} className='jobh1'>Software Engineer Intern</h1>
                    <h2 ref={jobSub2} className='jobh2'>January 2024 - June 2024</h2>
                    <img id='disney_logo' src={Disney_Logo}></img>
                    <img className='achieveImg' ref={img2} id='modsvr_Pic' src={vr3} alt='' onClick={() => openJobDesc(2)} onMouseEnter={() => backgroundHoverEnter(img2)} onMouseLeave={() => backgroundHoverLeave(img2)}></img>
                    <p ref={jobDesc2} className='jobDesc' id='jobDesc2'>Created offline-mode feature for a Seating Application utilized in WDW rides, employing Angular, Angular Material, and Flask</p>
                </div>
                <div ref={job3} className='job' id='job3'>
                    <h1 ref={jobTitle3} className='jobh1'>Software Engineer Intern</h1>
                    <h2 ref={jobSub3} className='jobh2'>June 2024 - Present</h2>
                    <img id='infotech_logo' src={InfoTech_Logo}></img>
                    {/* {window.innerWidth > '970px' ? 'UF Information Technology' : 'UFIT'} */}
                    <img className='achieveImg' name={'imgA'} ref={img3} id='ufit_Pic' src={code3} alt='' onClick={() => openJobDesc(3)} onMouseEnter={() => backgroundHoverEnter(img3)} onMouseLeave={() => backgroundHoverLeave(img3)}></img>
                    <p ref={jobDesc3} className='jobDesc' id='jobDesc3'>Creating software using React.js</p>
                </div>
            </div>
        <section id='achievePageContainer'>
            <div ref={awardsContainer} id='awardsContainer'>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={purple_Logo}></img>
                    <p ref={awardTop1} className='awardText1'>Miami Herald's Silver Knight Award</p>
                    <p ref={awardBot1} className='awardText2'>-Digital and Interactive Media HM-</p>
                </div>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={[purple_Logo]}></img>
                    <p ref={awardTop2}  className='awardText1'>Principal's Award</p>
                    <p ref={awardBot2}  className='awardText2'>-Founder and Creator of Kiwi-El-Gato-</p>
                </div>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={purple_Logo}></img>
                    <p ref={awardTop3} className='awardText1'>Outstanding Senior Leader Award</p>
                    <p ref={awardBot3}className='awardText2'>-Leadership through Code-</p>
                </div>
            </div>
        </section>
    </>
    
  )
}
