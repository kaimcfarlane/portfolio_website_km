import React from 'react'
import './achieve.css'
import purple_Logo from './purpleawardLogo.png'


export default function Achieve() {
  return (
    <>
        <div id='titleContainer'>
            <h1>I'm an Innovator and an Achiever</h1>
            <img alt='' src=''></img>
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
            <div id='workContainer'>
                <div className='job'></div>
                <div className='job'></div>
                <div className='job'></div>
            </div>
        </section>
    </>
    
  )
}
