import React, {useRef, useEffect, useState} from 'react'
// import './Header.css'
import styles from "./Header.module.css"
import "./burgerMenu.css"
import './nightDay.css'
import Pdf from './kaimcfarlane_resume_current.pdf'
import MenuTransition from './MenuTransition'
// import "https://use.fontawesome.com/releases/v5.1.0/css/all.css"
// {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
//      integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"></link> */}

//some issues
//we need to import the styling link into our react from the codepen
//we also need to make sure that the image of sun and moon appear upon implementing this link
//for th styling also we have an issue with our class names not showing in the elments tab
//Next we need either decompile or import jquery javascript into here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skills from './Skills'



export default function Header({DLObj, toggleDL, animateMenu}) {
    //We are implementing button here
    //Styling on web page link 
    //Check errors on chroms and look to handle future ones
    //as well as solve cuyrrent ones

    const burgerMenu = useRef();
    const burgerMenuLeft = useRef();
    const burgerMenuRight = useRef();
    const menuContent = useRef();
    const styleLink1 = useRef();
    const styleLink2 = useRef();
    const styleLink3 = useRef();
    const styleLink4 = useRef();
    const styleLink5 = useRef();
    const hLink1 = useRef();
    const hLink2 = useRef();
    const hLink3 = useRef();
    const hLink4 = useRef();
    const hLink5 = useRef();
    const logoText = useRef();
    const tooglenight = useRef();
    const i = useRef();

    const [iColor, setIColor] = useState('white');

    const HomeBtn = () => {
        console.log("Home Button Clicked");
        // window.location.reload();
        // window.scrollTo({ top: 100, behavior: 'smooth' });
        // var scrollToTop = window.setInterval(() => {
        //     var pos = window.pageYOffset;
        //     if ( pos > 0 ) {
        //         window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
        //     } else {
        //         window.clearInterval( scrollToTop );
        //     }
        // }, 16); // how fast to scroll (this equals roughly 60 fps)
        // scrollToTop();

        // document.body.scrollTop = 0;
        // window.scrollTo(0,0);
        // window.scroll({
        //     top: 0, 
        //     left: 0, 
        //     behavior: 'smooth' 
        //    });           
        // console.log(document.body.scrollTop)
        // console.log(window.pageYOffset)
        // scrollTo()
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
                // burgerMenu.current.style.backgroundColor = "#a7a7fa";
                if(DLObj.isLight)
                {
                    console.log("Light Mode activated giving mobile menu purple background menu")
                    burgerMenu.current.style.backgroundColor = 'rgb(167, 167, 250)';
                    // menuContent.current.style.backgroundColor = 'rgb(167, 167, 250) !important';
                    // styleLink.current.style.backgroundColor = 'rgb(167, 167, 250) !important';
                    // hLink.current.style.backgroundColor = 'rgb(167, 167, 250) !important';
                    menuContent.current.style.backgroundColor = "#a7a7fa";
                    menuContent.current.style.boxShadow = "#6246ea -5px 5px, #ffffff -10px 10px, #9182df -15px 15px";
                    styleLink1.current.style.backgroundColor = "";
                    styleLink2.current.style.backgroundColor = "";
                    styleLink3.current.style.backgroundColor = "";
                    styleLink4.current.style.backgroundColor = "";
                    styleLink5.current.style.backgroundColor = "";
                    
                    hLink1.current.style.backgroundColor = "";
                    hLink1.current.style.borderStyle = "";
                    hLink1.current.style.borderColor = "white";
                    hLink1.current.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";

                    hLink2.current.style.backgroundColor = "";
                    hLink2.current.style.borderStyle = "";
                    hLink2.current.style.borderColor = "white";
                    hLink2.current.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";

                    hLink3.current.style.backgroundColor = "";
                    hLink3.current.style.borderStyle = "";
                    hLink3.current.style.borderColor = "white";
                    hLink3.current.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";

                    hLink4.current.style.backgroundColor = "";
                    hLink4.current.style.borderStyle = "";
                    hLink4.current.style.borderColor = "white";
                    hLink4.current.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";

                    hLink5.current.style.backgroundColor = "";
                    hLink5.current.style.borderStyle = "";
                    hLink5.current.style.borderColor = "white";
                    hLink5.current.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
                    burgerMenuRight.current.style.backgroundColor = "#ffffff00";
                    
                }
                else
                {
                    //h link is background-color: #7a61f0d9;
                    //border-style solid
                    //border color black
                    menuContent.current.style.boxShadow = "#6246ea -5px 5px, #2d2d2d -10px 10px, #96949400 -15px 15px";
                    menuContent.current.style.backgroundColor = "#6246ead9";
                    
                    styleLink1.current.style.backgroundColor = "#6246ead9";
                    
                    styleLink2.current.style.backgroundColor = "#6246ead9";
                    
                    styleLink3.current.style.backgroundColor = "#6246ead9";
                    
                    styleLink4.current.style.backgroundColor = "#6246ead9";
                    
                    styleLink5.current.style.backgroundColor = "#6246ead9";

                    
                    hLink1.current.style.backgroundColor = "6246ead9";
                    hLink1.current.style.borderStyle = "solid";
                    hLink1.current.style.borderColor = "black";
                    hLink1.current.style.boxShadow = "rgb(0 0 0 / 24%) 0px 3px 8px";
                    // hLink1.current.stlye.boxShadow = "rgb(0 0 0 / 24%) 0px 3px 8px";

                    
                    hLink2.current.style.backgroundColor = "6246ead9";
                    hLink2.current.style.borderStyle = "solid";
                    hLink2.current.style.borderColor = "black";
                    hLink2.current.style.boxShadow = "rgb(0 0 0 / 24%) 0px 3px 8px";

                    
                    hLink3.current.style.backgroundColor = "6246ead9";
                    hLink3.current.style.borderStyle = "solid";
                    hLink3.current.style.borderColor = "black";
                    hLink3.current.style.boxShadow = "rgb(0 0 0 / 24%) 0px 3px 8px";

                   
                    hLink4.current.style.backgroundColor = "6246ead9";
                    hLink4.current.style.borderStyle = "solid";
                    hLink4.current.style.borderColor = "black";
                    hLink4.current.style.boxShadow = "rgb(0 0 0 / 24%) 0px 3px 8px";

                    
                    hLink5.current.style.backgroundColor = "6246ead9";
                    hLink5.current.style.borderStyle = "solid";
                    hLink5.current.style.borderColor = "black";
                    hLink5.current.style.boxShadow = "rgb(0 0 0 / 24%) 0px 3px 8px";

                    console.log("Dark Mode activated giving mobile menu black background menu");
                    burgerMenu.current.style.backgroundColor = "rgb(98 70 234 / 19%)";

                    burgerMenuRight.current.style.backgroundColor = "#ffffff00";

                    //add the this to regular light view to box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

                }
            },100)
            // burgerMenu.current.style.backgroundColor = "#7a61f0d9";
        }
        else {
            menuContent.current.style.animation = "slideRight"
            // burgerMenu.current.style.animation = "slideBurgerRight";
            if(DLObj.isLight)
                    {
                        burgerMenuRight.current.style.backgroundColor = "black";
                    }
                    else 
                    {
                        burgerMenuRight.current.style.backgroundColor = "white";
                    }
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
                        // element.style.backgroundColor = "#16161a";
                        element.current.classList.add(styles.darkMode);
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

                        // elementx.style.backgroundColor = "#fffffe";
                        elementx.current.classList.add(styles.lightMode);
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

    //Make general burgermneu background color to be
    //background-color: #6246ead9; this if other not working #7272ff;
    //With the background of the hlink being a bit less transparent
    //aslo add new border lines to match

    const makeDarkMode = () => {
        setCheck(true)
        DLBtnClick()
    }

    //Bit Confusing, above we have !DLChecked so, if we are in dark mode, local storage is true, we call make darkMode, this makes DLChecked true, then on load we see if not DLChecked so goes to top part and makes local storage true again 
    useEffect(() => {
        if(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) != null)
        {
          JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ? makeDarkMode() : setCheck(false) && DLBtnClick()
          console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
        }
        else
        {
          console.log("User has no data in localStorage")
        }
    },[])

    const LOCAL_STORAGE_KEY = 'DLStorageKey';


    const DLBtnClick = () => {
        console.log("CSS Switch Clicked")
        const tBtn = document.getElementById("toogleNight");
        console.log("DLChecked: " + DLChecked)
        console.log("DLSwitch element below: " + DLSwitch);
        var allElements = document.getElementsByTagName("*");
        if(!DLChecked) 
        {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(true))
            
            toggleDL();
            console.log("DLOBJ is now " + DLObj.isLight);
            setCheck(true);
            // tooglenight.checked = true;
            // tBtn.checked = true;
            for (var i = 0, len = allElements.length; i < len; i++) {
                var element = allElements[i];
                // element.style.backgroundColor = "#16161a";
                element.classList.remove(styles.lightMode);
                element.classList.add(styles.darkMode);
            }
            DLSwitch.current.style.backgroundColor = "#6246ea";
            burgerMenuRight.current.style.backgroundColor = "white";
            burgerMenuLeft.current.style.backgroundColor = "#ffffff00";
            logoText.current.style.textShadow = '2px 1px 0px #ffffff';
            logoText.current.style.fontWeight = 'bold';
            
            burgerMenuLeft.current.classList.add('specialA');
            burgerMenuRight.current.classList.add('specialA');
            burgerMenuLeft.current.classList.add('specialB');
            burgerMenuRight.current.classList.add('specialB');
        }
        else{
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false))

            toggleDL();
            console.log("DLOBJ is now " + DLObj.isLight);
            setCheck(false);
            // tooglenight.checked = false;
            // tBtn.checked = false;
            logoText.current.style.textShadow = '';
            logoText.current.style.fontWeight = '';
            burgerMenuLeft.current.classList.remove('specialA');
            burgerMenuRight.current.classList.remove('specialA');
            burgerMenuLeft.current.classList.remove('specialB');
            burgerMenuRight.current.classList.remove('specialB');
            for (var x = 0, lenx = allElements.length; x < lenx; x++) {
                var elementx = allElements[x];
                // elementx.style.backgroundColor = "#fffffe";
                elementx.classList.remove(styles.darkMode)
                elementx.classList.add(styles.lightMode);
            }
            DLSwitch.current.style.backgroundColor = "#303030";
            burgerMenuRight.current.style.backgroundColor = "#212121";
            burgerMenuLeft.current.style.backgroundColor = "#ffffff00";
            //Add Dark Mode changes for mobile menu
            menuContent.current.style.backgroundColor = "";
        }
    }

    const [navClicked, changeNavClicked] = useState(false)

        // const triggerNavTransition = () => {
        //     // var nav  = !navClicked
        //     // console.log('RUNNING')
        //     // changeNavClicked(nav)
        //     changeNavClicked(!navClicked)
        // }


    


    // const scrollTo = () => {
    //     console.log("running scroll function")
    //     Skills.current.scrollIntoView({
    //         block: 'end',
    //         behavior: 'smooth',
    //         inline: 'center'
    //     })
    // }

//on header butto click do this changeNavClicked(!navClicked)
       
    

  return (
    <>
    <section id={styles.header}>
    <a href='' id={styles.logoHREF}>
        <div ref={logoText} id={styles.logoText} onClick={HomeBtn}>KM</div>
    </a>
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
                {/* Create naivation component or use inline stlyes w/t object */}
                <li ref={styleLink1} className={styles.headerItem}><a ref={hLink1} onClick={() => {changeNavClicked(!navClicked)}} href='#mainPage' className={styles.hLink}>&lt;ABOUT/&gt;</a></li>
                <li ref={styleLink2} className={styles.headerItem}><a ref={hLink2} onClick={() => {changeNavClicked(!navClicked)}} href='#skillsPage' className={styles.hLink}>&lt;SKILLS/&gt;</a></li>
                <li ref={styleLink3} className={styles.headerItem}><a ref={hLink3} onClick={() => {changeNavClicked(!navClicked)}} href='#projectsPage' className={styles.hLink}>&lt;PROJECTS/&gt;</a></li>
                <li ref={styleLink4} className={styles.headerItem}><a ref={hLink4} onClick={() => {changeNavClicked(!navClicked)}} href='#contactPage' className={styles.hLink}>&lt;CONTACT/&gt;</a></li>
                <li ref={styleLink5} className={styles.headerItem}><a ref={hLink5} onClick={() => {changeNavClicked(!navClicked)}} href={Pdf} target="_blank" className={styles.hLink}>&lt;resumé/&gt;</a></li>
            </ul>
        </div>
    </section>
    <MenuTransition menuContent={menuContent} burgerMenu={burgerMenu} burgerMenuClick={burgerMenuClick} navClicked={navClicked} changeNavClicked={changeNavClicked}/>
    </>
  )
}




//Next add parrallax for on mouse move for profile picture 
//Then add the typing for hey I'm in different languages
//Add dark light mode slector next to burger menu, try just balck white selector
//Add linkedin and github and resume if we can find logo into burger menu
//Add load in animations for all things on the screen with the mouse coming in last probably
//just add everthing come in from below with opacity 0 to 100 with header first then center stuff then mouse icon animation

