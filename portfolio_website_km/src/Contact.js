import {React, useRef, useEffect} from 'react'
import './Contact.css'

export default function Contact({DLObj}) {

    const contact = useRef()
    const contactTitleContainer = useRef()
    const contactTitle = useRef()
    const contactSubtitle = useRef()
    const formContainer = useRef()
    const submitSpan = useRef()

    useEffect(()=> {
        if(DLObj.isLight)
    {
        contact.current.style.backgroundColor = 'white'
        contactTitle.current.style.color = 'black'
        contactSubtitle.current.style.color = 'black'
    }
    else {
        contact.current.style.backgroundColor = 'black'
        contactTitle.current.style.color = 'white'
        contactSubtitle.current.style.color = 'white'
    }
    submitSpan.current.classList.remove('Header_lightMode__Po-Zo')
    },[DLObj])
  return (
    <div ref={contact}>
        <section ref={contactTitleContainer} id='titleContainer'>
            <h1 ref={contactTitle} id='contactTitle'>I'm Excited to Hear From You</h1>
            <p ref={contactSubtitle} id='contactSubtitle'>-Don't Be Shy-</p>
        </section>
        <section ref={formContainer} id='formContainer'>
            <form id="form" action="/" method="POST">
                <div id='contactInfo'>
                    <div id='nameContainer'>
                        <label id='nameTitle'>
                            Name
                        </label>
                        <input type="text" id="name" name="name" placeholder='Enter your name'></input>
                    </div>
                    <div>
                        <label id='emailTitle'>
                            Email
                        </label>
                        <input type="text" id="email" name="email" placeholder='Enter your email'></input>
                    </div>
                </div>
                <div id='contactText'>
                    <label id='messageTitle'>
                        Message
                    </label>
                    <input type="text" id="message" name="message" placeholder='Hey Kai, I have an idea for a app...'></input>
                </div>
                <div id='sendBtnContainer'>
                    <button id='sendBtn' type="submit" onclick=""><span ref={submitSpan}>SEND</span><i></i></button>
                </div>
            </form>
        </section>
        <section id='footerText'>
                <a id='footerLinkedin' href='https://www.linkedin.com/in/kaimcfarlane/'>LinkedIn</a>
                <span className='rectSpan'></span>
                <p id='footerEmail'>kaimcfarlane43@gmail.com</p>
                <span className='rectSpan'></span>
                <a id='footerGithub' href='https://github.com/kaimcfarlane'>GitHub</a>
        </section>
    </div>
  )
}
