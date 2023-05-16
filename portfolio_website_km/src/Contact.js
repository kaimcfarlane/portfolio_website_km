import {React, useRef, useEffect} from 'react'
import './Contact.css'
import purpleCopyright_Logo from './purpleCopyrightLogo.png'

export default function Contact({DLObj}) {

    const contact = useRef()
    const contactTitleContainer = useRef()
    const contactTitle = useRef()
    const contactSubtitle = useRef()
    const formContainer = useRef()
    const submitSpan = useRef()
    const copyrightName = useRef()
    const rectSpan1 = useRef()
    const rectSpan2 = useRef()
    const footerEmail = useRef()
    const footerGithub = useRef()
    const footerLinkedin = useRef()
    const submitBtn = useRef()

    const name = useRef()
    const nameTitle = useRef()
    const email = useRef()
    const emailTitle = useRef()
    const message  = useRef()
    const messageTitle = useRef()



    useEffect(()=> {
        if(DLObj.isLight)
    {
        contact.current.style.backgroundColor = 'white'
        contactTitle.current.style.color = 'black'
        contactSubtitle.current.style.color = 'black'
        copyrightName.current.style.color = 'black'
        rectSpan1.current.style.color = 'black'
        rectSpan2.current.style.color = 'black'
        footerEmail.current.style.color = 'black'
        footerGithub.current.style.color = 'black'
        footerLinkedin.current.style.color = 'black'

        // name.current.classList.remove('whiteUnderline')
        // name.current.classList.add('blackUnderline')
        // submitSpan.current.style.backgroundColor = '#6246ea'
        // submitBtn.current.style.backgroundColor = '#6246ea'
        // submitBtn.current.style.color = 'white'

        email.current.style.color = 'black'
        emailTitle.current.style.color = 'black'
        nameTitle.current.style.color = 'black'
        name.current.style.color = 'black'
        messageTitle.current.style.color = 'black'
        message.current.style.color = 'black'
    }
    else {
        contact.current.style.backgroundColor = '#16161a'
        contactTitle.current.style.color = 'white'
        contactSubtitle.current.style.color = 'white'
        copyrightName.current.style.color = 'white'
        rectSpan1.current.style.color = 'white'
        rectSpan2.current.style.color = 'white'
        footerEmail.current.style.color = 'white'
        footerGithub.current.style.color = 'white'
        footerLinkedin.current.style.color = 'white'
        // submitSpan.current.style.backgroundColor = '#6246ea'
        // submitBtn.current.style.backgroundColor = '#6246ea'
        // submitBtn.current.style.color = 'white'
        // name.current.classList.remove('blackUnderline')
        // name.current.classList.add('whiteUnderline')

        email.current.style.color = 'white'
        emailTitle.current.style.color = 'white'
        nameTitle.current.style.color = 'white'
        name.current.style.color = 'white'
        messageTitle.current.style.color = 'white'
        message.current.style.color = 'white'

    }
    submitSpan.current.classList.remove('Header_lightMode__Po-Zo')
    submitSpan.current.classList.remove('Header_darkMode__vKGtH')
    },[DLObj])
  return (
    <div ref={contact}>
        <section ref={contactTitleContainer} id='titleContainer'>
            <h1 ref={contactTitle} id='contactTitle'>I'm Excited to Hear From You</h1>
            <p ref={contactSubtitle} id='contactSubtitle'>-Don't Be Shy-</p>
        </section>
        <section ref={formContainer} id='formContainer'>
            <form id="form" action="https://formsubmit.co/kaimcfarlane43@gmail.com" method="POST">
                <div id='contactInfo'>
                    <div id='nameContainer'>
                        <label ref={nameTitle} id='nameTitle'>
                            Name
                        </label>
                        <input ref={name} type="text" id="name" name="name" placeholder='Enter your name'></input>
                    </div>
                    <div>
                        <label ref={emailTitle} id='emailTitle'>
                            Email
                        </label>
                        <input ref={email} type="email" id="email" name="email" placeholder='Enter your email'></input>
                    </div>
                </div>
                <div id='contactText'>
                    <label ref={messageTitle} id='messageTitle'>
                        Message
                    </label>
                    <input ref={message} type="text" id="message" name="message" placeholder='Hey Kai, I have an idea for a app...'></input>
                </div>
                {DLObj.isLight ? <div id='sendBtnContainer'>
                    <button ref={submitBtn} id='sendBtn' type="submit" onclick=""><span ref={submitSpan}>SEND</span><i></i></button>
                </div> : <div id='sendBtnContainer'>
                    <button ref={submitBtn} id='sendBtnDark' type="submit" onclick=""><span ref={submitSpan}>SEND</span><i></i></button>
                </div>}
            </form>
        </section>
        <section id='footerText'>
                <a ref={footerLinkedin} id='footerLinkedin' href='https://www.linkedin.com/in/kaimcfarlane/' target='_blank' rel='noreferrer'>LinkedIn</a>
                <span ref={rectSpan1} className='rectSpan'></span>
                {/* <p id='footerEmail'>kaimcfarlane43@gmail.com</p> */}
                <a ref={footerEmail} id='footerEmail' href='mailto: kaimcfarlane43@gmail.com'>Email</a>
                <span ref={rectSpan2} className='rectSpan'></span>
                <a ref={footerGithub} id='footerGithub' href='https://github.com/kaimcfarlane' target='_blank' rel='noreferrer'>GitHub</a>
        </section>
        <section id='copyrightContainer'>
            <img id='copyrightLogo' src={purpleCopyright_Logo} alt='copyrightLogo'></img>
            <p ref={copyrightName} id='copyrightName'>Kai McFarlane 2023</p>
        </section>
    </div>
  )
}