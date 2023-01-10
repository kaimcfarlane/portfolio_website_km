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
    const logoText = useRef();

    function HomeBtn() {
        console.log("Home Button Clicked");
        // window.location.reload();
        // window.scrollTo({ top: 100, behavior: 'smooth' });
        var scrollToTop = window.setInterval(function() {
            var pos = window.pageYOffset;
            if ( pos > 0 ) {
                window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
            } else {
                window.clearInterval( scrollToTop );
            }
        }, 16); // how fast to scroll (this equals roughly 60 fps)
        scrollToTop();
    }

    function burgerMenuClick() {
        burgerMenu.current.classList.toggle('open');
        console.log(menuContent.current.style.display);
        if(menuContent.current.style.display === "none" || menuContent.current.style.display === '')
        {
            // menuContent.current.style.opacity = "0"
            menuContent.current.style.display = "flex";
            menuContent.current.style.animation = "slideLeft"
            setTimeout(() => {
                // menuContent.current.style.opacity = "100%"
                // menuContent.current.style.left = "86.5%"
                // menuContent.current.style.left = "0";
                menuContent.current.style.right = "0";
                burgerMenu.current.style.backgroundColor = "#a7a7fa";
            },100)
            // burgerMenu.current.style.backgroundColor = "#7a61f0d9";
            
        }
        else {
            menuContent.current.style.animation = "slideRight"
            // burgerMenu.current.style.animation = "slideBurgerRight";
            setTimeout(() => {
                // menuContent.current.style.left = "100%"
                menuContent.current.style.right = "-285px";
                setTimeout(() => {
                    menuContent.current.style.display = "none"
                },600)
            },100)
            setTimeout(() => {
                burgerMenu.current.style.backgroundColor = "";
            },320);
            
        }
        
        console.log("burgerMenu Clicked!");
    } 

  return (

    
    <>
    <section id={styles.header}>
    <div ref={logoText} id={styles.logoText} onClick={HomeBtn}>KM</div>
    <div id={styles.burgerMenu}>
        <div  ref={burgerMenu} className='menu btn11' data-menu="11" onClick={burgerMenuClick}>
            <div ref={burgerMenuLeft} className='icon-left'></div>
            <div ref={burgerMenuRight} className='icon-right'></div>
        </div>
    </div>
        <div id={styles.menuContent} ref={menuContent}>
            <ul id={styles.dropdown}>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>&lt;ABOUT/&gt;</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>&lt;SKILLS/&gt;</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>&lt;PROJECTS/&gt;</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>&lt;CONTACT/&gt;</a></li>
                <li className={styles.headerItem}><a href='#' className={styles.hLink}>&lt;resumé/&gt;</a></li>
            </ul>
        </div>
    </section>
    </>
  )
}



//Our slide menu is overflowing because it is only partially coming out left
//To fix make left 100% and format so it looks same as before
//Next add parrallax for on mouse move for profile picture 
//Then add the typing for hey I'm in different languages
//Add dark light mode slector next to burger menu, try just balck white selector
//Add zoom in/zoom out hover effect for logo
//Add linkedin and github and resume if we can find logo into burger menu
//Add load in animations for all things on the screen with the mouse coming in last probably
//just add everthing come in from below with opacity 0 to 100 with header first then center stuff then mouse icon animation
//just barely lower than orginal location too


//For anything below full screen
//82.85 for line to no scroll bar but line show
//83.1 For minimum scroll bar

//For full screen
//85.4% With right line
//

