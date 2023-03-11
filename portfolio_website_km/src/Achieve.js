import React from 'react'
import './achieve.css'
import purple_Logo from './purpleawardLogo.png'
import kiwi_WebsitePic from './kiwiWebsitePic.png'
import modsvr_Pic from './modsvr_Pic.png'
import modstank_Pic from './modstankPic.png'
import ufit_Pic from './ufitPic.png'


export default function Achieve() {
  return (
    <>
        <div id='titleContainer'>
            <h1>I'm an Innovator and an Achiever</h1>
            <img alt='' src=''></img>
        </div>
        <div id='workContainer'>
                <div className='job' id='job1'>
                    <h1 className='jobh1'>Website Developer and Founder</h1>
                    <h2 className='jobh2'>Kiwi-El-Gato</h2>
                    <img id='kiwi_WebsitePic' src={kiwi_WebsitePic} alt=''></img>
                    <p className='jobDesc'>Developed educational website through digital art, designs, animations, and code</p>
                </div>
                <div className='job' id='job2'>
                    <h1 className='jobh1'>Lead Software Devloper Intern</h1>
                    <h2 className='jobh2'>Musuem of Discovery and Science</h2>
                    <img id='modsvr_Pic' src={modsvr_Pic} alt=''></img>
                    <p className='jobDesc'>Programmed virtual reality images and animations with C# and Unity to explain natural phenomena</p>
                </div>
                <div className='job' id='job3'>
                    <h1 className='jobh1'>Website Application Developer Intern</h1>
                    <h2 className='jobh2'>University of Florida Information Technology</h2>
                    <img id='ufit_Pic' src={ufit_Pic} alt=''></img>
                    <p className='jobDesc'>Redesigning and implementing new cards feature for the personal UF Workspace with javascript frameworks</p>
                </div>
            </div>
        <section id='achievePageContainer'>
            <div id='awardsContainer'>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={purple_Logo}></img>
                    <p className='awardText1'>Miami Herald's Silver Knight Award</p>
                    <p className='awardText2'>-Digital and Interactive Media HM-</p>
                </div>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={[purple_Logo]}></img>
                    <p className='awardText1'>Principal's Award</p>
                    <p className='awardText2'>-Founder and Creator of Kiwi-El-Gato-</p>
                </div>
                <div className='award'>
                    <img className='awardImg' alt='awardLogo' src={purple_Logo}></img>
                    <p className='awardText1'>Outstanding Senior Leader Award</p>
                    <p className='awardText2'>-Leadership through Code-</p>
                </div>
            </div>
        </section>
    </>
    
  )
}
