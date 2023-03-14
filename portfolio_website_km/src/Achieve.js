import {React, useRef, useEffect, useState} from 'react'
import './achieve.css'
import purple_Logo from './purpleawardLogo.png'
import kiwi_WebsitePic from './kiwiWebsitePic.png'
import modsvr_Pic from './modsvr_Pic.png'
import modstank_Pic from './modstankPic.png'
import ufit_Pic from './ufitPic.png'
import purpleWeb_Logo1 from './purpleWeb_Logo1.png'
import purpleWeb_Logo2 from './purpleWeb_Logo2.png'
import purpleWeb_Logo3 from './purpleWeb_Logo3.png'


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
    

   

    // function openJobDesc() {
    //     console.log("IMG CLIKED!")
    // }

  return (
    <>
        <div id='titleContainer'>
            <h1 ref={achieveTitle}>I'm an Innovator</h1>
            <p ref={achieveSubtitle} id='achieveSubtitle'>-Work and Awards-</p>
            <img alt='' src=''></img>
        </div>
        <div id='workContainer'>
                <div ref={job1} className='job' id='job1'>
                    <h1 ref={jobTitle1} className='jobh1'>Website Developer and Founder</h1>
                    <h2 ref={jobSub1} className='jobh2'>Kiwi-El-Gato</h2>
                    <img ref={img1} id='kiwi_WebsitePic' src={kiwi_WebsitePic} alt='' onClick={() => openJobDesc(1)}></img>
                    <p ref={jobDesc1} className='jobDesc' id='jobDesc1'>Developed educational website with digital art, designs, animations, and code</p>
                </div>
                <div ref={job2} className='job' id='job2'>
                    <h1 ref={jobTitle2} className='jobh1'>Lead Software Devloper Intern</h1>
                    <h2 ref={jobSub2} className='jobh2'>Musuem of Discovery and Science</h2>
                    <img ref={img2} id='modsvr_Pic' src={modsvr_Pic} alt='' onClick={() => openJobDesc(2)}></img>
                    <p ref={jobDesc2} className='jobDesc' id='jobDesc2'>Programmed virtual reality images and animations with C# and Unity to explain natural phenomena</p>
                </div>
                <div ref={job3} className='job' id='job3'>
                    <h1 ref={jobTitle3} className='jobh1'>Website Application Developer Intern</h1>
                    <h2 ref={jobSub3} className='jobh2'>University of Florida Information Technology</h2>
                    <img ref={img3} id='ufit_Pic' src={ufit_Pic} alt='' onClick={() => openJobDesc(3)}></img>
                    <p ref={jobDesc3} className='jobDesc' id='jobDesc3'>Redesigning and implementing new cards feature for the personal UF Workspace with javascript frameworks</p>
                </div>
            </div>
        <section id='achievePageContainer'>
            <div id='awardsContainer'>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={purple_Logo}></img>
                    <p ref={awardTop1} className='awardText1'>Miami Herald's Silver Knight Award</p>
                    <p ref={awardBot1} className='awardText2'>-Digital and Interactive Media HM-</p>
                </div>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={[purple_Logo]}></img>
                    <p ref={awardTop2}  className='awardText1'>Principal's Award</p>
                    <p ref={awardBot2}className='awardText2'>-Founder and Creator of Kiwi-El-Gato</p>
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
