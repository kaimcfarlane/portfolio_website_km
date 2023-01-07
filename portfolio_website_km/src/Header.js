import React, {useRef} from 'react'
// import './Header.css'
import styles from "./Header.module.css"
import "./burgerMenu.css"

export default function Header() {
    //We are implementing button here
    //Styling on web page link 
    //Check errors on chroms and look to handle future ones
    //as well as solve cuyrrent ones

    const burgerMenu = useRef();
    const burgerMenuLeft = useRef();
    const burgerMenuRight = useRef();

    function burgerMenuClick() {
        burgerMenu.current.classList.toggle('open');
        console.log("burgerMenu Clicked!");
    } 

  return (

    
    <>
    <section id={styles.header}>
    <div>This is the header</div>
        <div ref={burgerMenu} className='menu btn11' data-menu="11" onClick={burgerMenuClick}>
            <div ref={burgerMenuLeft} className='icon-left'></div>
            <div ref={burgerMenuRight} className='icon-right'></div>
        </div>
        <div id='menuContent'>
            <ul id='dropdown'>
                <li className={styles.headerItem}><a href='#'>ABOUT ME</a></li>
                <li className='headerItem'><a href='#'>SKILLS</a></li>
                <li className='headerItem'><a href='#'>PROJECTS</a></li>
                <li className='headerItem'><a href='#'>CONTACT</a></li>
                <li className='headerItem'><a href='#'>RESUME</a></li>
            </ul>
        </div>
    </section>
    </>
  )
}
