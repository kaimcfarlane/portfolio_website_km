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
        var allElements = document.getElementsByTagName("*");
                if(!NDClicked) {
                    //add code to make body background black
                    console.log("toogle night btn clicked");
                    // document.body.style.backgroundColor = "blue";
                    setIColor('black');
                    // console.log("tooglenight.checked: " + tooglenight.checked);
                    NDClicked = true;
                    for (var i = 0, len = allElements.length; i < len; i++) {
                        var element = allElements[i];
                        element.style.backgroundColor = "#16161a";
                    }
                    // i.setState({color: 'white'});
                }else{
                    //add code to make background white again
                    console.log("toogle night btn clicked");
                    // console.log("tooglenight.checked: " + tooglenight.checked);
                    document.body.style.backgroundColor = "white";
                    setIColor('white');
                    NDClicked = false;
                    document.body.style.backgroundColor = "#16161a";
                    for (var x = 0, lenx = allElements.length; x < lenx; x++) {
                        var elementx = allElements[x];
                        elementx.style.backgroundColor = "#fffffe";
                    }
                    // i.setState({color: 'black'});
                }

                //Make sure to add code to change the value of checkbox to checked one the click

        }

    //We need to set the value of checked using a state thing, we did it before in last react app so look there

        // Below Changes the background of every elements background to balck or white and liek before we are havign trouble
        // accessing the CSS trhough regular JS and probably will have to do so through states which is annoyning
        // If we keep below we would have to change every single color thats isn't the right background to what it is
        // If we just change the background then we'll have to change every single items we want to changed background on
        // After this fix the mobile menu popping o wrong side at first click and fix mouse position for laptop view via media querys.


    //add .specialB and .specialA classes to the burgerMenu/Left&Right Classes for !DLClicked
    

    const [DLChecked, setCheck] = useState(false);
    const DLSwitch = useRef();

    const DLBtnClick = () => {
        console.log("CSS Switch Clicked")
        const tBtn = document.getElementById("toogleNight");
        console.log("DLChecked: " + DLChecked)
        console.log("DLSwitch element below: " + DLSwitch);
        var allElements = document.getElementsByTagName("*");
        if(!DLChecked) 
        {
            setCheck(true);
            // tooglenight.checked = true;
            // tBtn.checked = true;
            for (var i = 0, len = allElements.length; i < len; i++) {
                var element = allElements[i];
                element.style.backgroundColor = "#16161a";
            }
            DLSwitch.current.style.backgroundColor = "#6246ea";
            burgerMenuRight.current.style.backgroundColor = "white";
            burgerMenuLeft.current.style.backgroundColor = "#ffffff00";

            burgerMenuLeft.current.classList.add('specialA');
            burgerMenuRight.current.classList.add('specialA');
            burgerMenuLeft.current.classList.add('specialB');
            burgerMenuRight.current.classList.add('specialB');
        }
        else{
            setCheck(false);
            // tooglenight.checked = false;
            // tBtn.checked = false;
            burgerMenuLeft.current.classList.remove('specialA');
            burgerMenuRight.current.classList.remove('specialA');
            burgerMenuLeft.current.classList.remove('specialB');
            burgerMenuRight.current.classList.remove('specialB');
            for (var x = 0, lenx = allElements.length; x < lenx; x++) {
                var elementx = allElements[x];
                elementx.style.backgroundColor = "#fffffe";
            }
            DLSwitch.current.style.backgroundColor = "#303030";
            burgerMenuRight.current.style.backgroundColor = "#212121";
            burgerMenuLeft.current.style.backgroundColor = "#ffffff00";
        }
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
             id="toogleNight" ref={tooglenight} className='cbx hidden' onClick={tooglenightBtn} checked={DLChecked}/>
            <label for="tooglenight" className='switch' onClick={DLBtnClick} id="DLswitch" ref={DLSwitch}></label>
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

