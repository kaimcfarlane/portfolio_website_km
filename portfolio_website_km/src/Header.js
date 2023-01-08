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
    const menuContent = useRef();

    function burgerMenuClick() {
        burgerMenu.current.classList.toggle('open');
        console.log(menuContent.current.style.display)
        if(menuContent.current.style.display === "none" || menuContent.current.style.display === '')
        {
            menuContent.current.style.display = "flex";
            // burgerMenu.current.style.backgroundColor = "#7a61f0d9";
            burgerMenu.current.style.backgroundColor = "#a7a7fa"
        }
        else {
            menuContent.current.style.display = "none";
            burgerMenu.current.style.backgroundColor = "";
        }
        
        console.log("burgerMenu Clicked!");
    } 

  return (

    
    <>
    <section id={styles.header}>
    <div id={styles.logoText}>KM</div>
    <div id={styles.burgerMenu}>
        <div  ref={burgerMenu} className='menu btn11' data-menu="11" onClick={burgerMenuClick}>
            <div ref={burgerMenuLeft} className='icon-left'></div>
            <div ref={burgerMenuRight} className='icon-right'></div>
        </div>
    </div>
        <div id={styles.menuContent} ref={menuContent}>
            <ul id={styles.dropdown}>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>ABOUT</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>SKILLS</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>PROJECTS</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>CONTACT</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>RESUME</a></li>
            </ul>
        </div>
    </section>
    </>
  )
}
