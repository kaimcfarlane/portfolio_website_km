import {React, useRef, useEffect} from 'react'
import './Contact.css'

export default function Contact({DLObj}) {

    const contact = useRef()
    const contactTitleContainer = useRef()
    const contactTitle = useRef()
    const contactSubtitle = useRef()


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
    },[DLObj])
  return (
    <div ref={contact}>
        <section ref={contactTitleContainer} id='titleContainer'>
            <h1 ref={contactTitle} id='contactTitle'>I'm Excited to Hear From You</h1>
            <p ref={contactSubtitle} id='contactSubtitle'>Don't Be Shy</p>
        </section>
    </div>
  )
}
