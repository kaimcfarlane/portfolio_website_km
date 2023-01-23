import React, {useRef, useEffect, useState} from 'react'
// import './Header.css'
import styles from "./Header.module.css"
import "./burgerMenu.css"
import './nightDay.css'
// import "https://use.fontawesome.com/releases/v5.1.0/css/all.css"
// {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
//      integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"></link> */}

//some issues
//we need to import the styling link into our react from the codepen
//we also need to make sure that the image of sun and moon appear upon implementing this link
//for th styling also we have an issue with our class names not showing in the elments tab
//Next we need either decompile or import jquery javascript into here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




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
    const tooglenight = useRef();
    const i = useRef();

    const [iColor, setIColor] = useState('white');

    
    const HomeBtn = () => {
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

    const burgerMenuClick = () => {
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
    var NDClicked= false;
    const tooglenightBtn = () => {
                if(!NDClicked) {
                    //add code to make body background black
                    console.log("toogle night btn clicked");
                    // document.body.style.backgroundColor = "blue";
                    setIColor('black');
                    // console.log("tooglenight.checked: " + tooglenight.checked);
                    NDClicked = true;
                    // i.setState({color: 'white'});
                }else{
                    //add code to make background white again
                    console.log("toogle night btn clicked");
                    // console.log("tooglenight.checked: " + tooglenight.checked);
                    document.body.style.backgroundColor = "white";
                    setIColor('white');
                    NDClicked = false;
                    // i.setState({color: 'black'});
                }

                //Stupid but we need to find a way to implement this js code correctly
                //Color of the "i" element need to change onclick and the methods in react
                //keep using the this keyword which won't work unless change is on the elemnt were clicking
                //After making this work we need to probably put our own icons for fas fa-sun
                //I would use the fontawesome since we already have it installed

                //Create a class and add it/remove it from the i tag

        }

  return (
    
    <>
    <section id={styles.header}>
    <div ref={logoText} id={styles.logoText} onClick={HomeBtn}>KM</div>
    <div id={styles.burgerMenu}>
        <div className='content'>
            <i ref={i} className='fas fa sun' style={{color: iColor}}></i>
            &nbsp;&nbsp;&nbsp;
            <input type="checkbox"
            // id="tooglenight" class="cbx hidden" 
             id="toogleNight" ref={tooglenight} className='cbx hidden' onClick={tooglenightBtn} />
            <label for="tooglenight" className='switch'></label>
            &nbsp;&nbsp;&nbsp;
            <i ref={i} className="fas fa-moon"></i>
        </div>
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




//Next add parrallax for on mouse move for profile picture 
//Then add the typing for hey I'm in different languages
//Add dark light mode slector next to burger menu, try just balck white selector
//Add linkedin and github and resume if we can find logo into burger menu
//Add load in animations for all things on the screen with the mouse coming in last probably
//just add everthing come in from below with opacity 0 to 100 with header first then center stuff then mouse icon animation

