import React, {useRef, useEffect} from 'react';
import styles from './Welcome.module.css';
import imageC from './selfPictures/selfie2.jpg';
import githubPic from  './githubLogo1.png';
import linkedinPic from './linkedinLogo1.png';
import imageS from './KaiMcFarlaneSeniorPicture2.jpeg';
import { func } from 'prop-types';

export default function Welcome({DLObj}) {

    //margin-right 910px for laptop

    //CURRENTLY BEING USED
    //or we can remove the margins off both the img and div surrounding our text then put the main content div with justify content space around.
    //then we can make the mouse have no margin as it doesn't need horizontally centering


    const welcomeAll = useRef();
    const profilePic = useRef();
    const subtitle = useRef();
    const title = useRef();
    const paragraph1 = useRef();
    const paragraph2 = useRef();
    const mouseContainer = useRef();
    const mouse = useRef()
    const linkedinPicture = useRef();
    const githubPicture = useRef();
    const SMContainer = useRef();
    const paragraph1Mob = useRef();
    const paragraph2Mob = useRef();
    const welcomeSubtextMob = useRef();


    useEffect(() =>{
        if(!DLObj.isLight)
        {
            paragraph1.current.style.color = "#fffffe";
            paragraph2.current.style.color = "#94a1b2";
            subtitle.current.style.color = "#fffffe";
            profilePic.current.style.borderColor = "#fffffe";
            mouse.current.style.backgroundColor = "rgb(22, 22, 26)";
            linkedinPicture.current.style.backgroundColor = "white";
            githubPicture.current.style.backgroundColor = "white";
        }
        else
        {
            paragraph1.current.style.color = "black";
            paragraph2.current.style.color = "#2b2c34";
            subtitle.current.style.color = "black";
            profilePic.current.style.borderColor = "black";
            mouse.current.style.backgroundColor = "#a7a7fa";
            linkedinPicture.current.style.backgroundColor = "";
            githubPicture.current.style.backgroundColor = "";
        }
    },[DLObj])

    
    useEffect(() => {
        if(window.innerWidth > '500')
        {
            setInterval(() => {
                document.addEventListener('mousemove', parrallax);
            function parrallax(e) {
                const speed = 4;
                const speed2 = -3;
                const speed3 = 2;
                const speed4 = -1;
                const x = (window.innerWidth - e.pageX*speed)/100;
                const x2 = (window.innerWidth - e.pageX*speed2)/100;
                const x3 = (window.innerWidth - e.pageX*speed3)/100;
                const x4 = (window.innerWidth - e.pageX*speed4)/100;
                const y = (window.innerHeight - e.pageY*speed)/100; 
                profilePic.current.style.transform = "translateX(" + x + "px)" + "translateY(" + y + "px)";
                subtitle.current.style.transform = "translateX(" + x2 + "px)" + "translateY(" + y + "px)";
                title.current.style.transform = "translateX(" + x3 + "px)" + "translateY(" + y + "px)";
                paragraph1.current.style.transform = "translateX(" + x + "px)" + "translateY(" + y + "px)";
                paragraph2.current.style.transform = "translateX(" + x + "px)" + "translateY(" + y + "px)";
                // console.log("Mouse Moved Bro");
                // console.log("Page X speed is " + e.pageX);
                // console.log("X value: " + x);
                if(profilePic)
                {
                    console.log("Profile Pic Object: " + profilePic);
                }
            }
        },6300)
        }
        else{
            paragraph1.current.style.display = 'none';
            paragraph2.current.style.display = 'none';
            welcomeSubtextMob.current.style.display = 'flex'
            paragraph1Mob.current.style.display = 'block'
            paragraph2Mob.current.style.display = 'block'
            setTimeout(()=> {
                SMContainer.current.style.position = 'relative'
                welcomeAll.current.style.marginTop = '-110px'
            },7000)
        }
            
        

    const mainLoadAnimation = () => {
        // if(profilePic) 
        // {
        //     profilePic.current.style.display = "none";
        //     subtitle.current.style.display = "none";
        //     title.current.style.display = "none";
        //     paragraph1.current.style.display = "none";
        //     paragraph2.current.style.display = "none";

         setTimeout(() => {
            //  profilePic.current.style.display = "block";
            profilePic.current.style.opacity = "100%"
            // title.current.style.display = "block";
            subtitle.current.style.opacity = "100%";
         },3000)
         setTimeout(() => {
            title.current.style.opacity = "100%";
        },4200)
        setTimeout(() => {
            paragraph1.current.style.opacity = "100%";
            paragraph1Mob.current.style.opacity = "100%"
            paragraph2.current.style.opacity = "100%";
            paragraph2Mob.current.style.opacity = "100%";
        },5200)
        // }
    }  

    const mainMouseLoadAnimation = () => {
        if(profilePic) 
        {
            mouseContainer.current.style.display = "none";
            SMContainer.current.style.display = "none";
         setTimeout(() => {
            mouseContainer.current.style.display = "block";
         },6300)
         setTimeout(() => {
            SMContainer.current.style.display = "block";
         }, 6100)
        }
    }  

    mainLoadAnimation();
    mainMouseLoadAnimation();

    },[])


    // document.addEventListener('mousemove', parrallax);
    // function parrallax(e) {
    //     const speed = 4;
    //     const speed2 = -3;
    //     const speed3 = 2;
    //     const speed4 = -1;
    //     const x = (window.innerWidth - e.pageX*speed)/100;
    //     const x2 = (window.innerWidth - e.pageX*speed2)/100;
    //     const x3 = (window.innerWidth - e.pageX*speed3)/100;
    //     const x4 = (window.innerWidth - e.pageX*speed4)/100;
    //     const y = (window.innerHeight - e.pageY*speed)/100; 
    //     profilePic.current.style.transform = "translateX(" + x + "px)" + "translateY(" + y + "px)";
    //     subtitle.current.style.transform = "translateX(" + x2 + "px)" + "translateY(" + y + "px)";
    //     title.current.style.transform = "translateX(" + x3 + "px)" + "translateY(" + y + "px)";
    //     paragraph1.current.style.transform = "translateX(" + x + "px)" + "translateY(" + y + "px)";
    //     paragraph2.current.style.transform = "translateX(" + x + "px)" + "translateY(" + y + "px)";
    //     // console.log("Mouse Moved Bro");
    //     // console.log("Page X speed is " + e.pageX);
    //     // console.log("X value: " + x);
    //     if(profilePic)
    //     {
    //         console.log("Profile Pic Object: " + profilePic);
    //     }
    // }

    // const mainLoadAnimation = () => {
    //     if(profilePic) 
    //     {
    //         profilePic.current.style.display = "none";
    //      setTimeout(() => {
    //          profilePic.current.style.display = "block";
    //      },1000)
    //     }
        
    // }
    
   

  return (
    <>
    <div id={styles.SMContainer} ref={SMContainer}>
        <div id={styles.linkedin}>
            <a href='https://www.linkedin.com/in/kaimcfarlane/' target='_blank'>
                <img ref={linkedinPicture}  id={styles.linkedinPic} alt='LinkedIn Logo' src={linkedinPic}></img>
            </a>
        </div>
        <span id={styles.line}></span>
        <div id={styles.github}>
            <a href='https://github.com/kaimcfarlane' target='_blank'>
                <img ref={githubPicture} id={styles.githubPic} alt='GitHub Logo' src={githubPic}></img>
            </a>
        </div>
    </div>
    <section ref={welcomeAll} id={styles.welcomeAll}>
    <div id={styles.welcomeContent}>
        <h2 ref={subtitle} id={styles.subtitle}>Hey I'm,</h2>
        <h1 ref={title} id={styles.title}>Kai McFarlane</h1>
        <p2 ref={paragraph1} id={styles.paragraph1}>Full-Stack Developer - CS Student</p2>
        <p1 ref={paragraph2} id={styles.paragraph2}>I am a software developer driven by a love for creating exciting and impactful projects. I'm currently exploring Web-Development and pursuing a degree in computer science from the University of Florida.</p1>
        {/* I'm a Software Developer that loves to create exciting projects through code. */}
    </div>
    <div>
        <img ref={profilePic} id={styles.profilePic} alt='Logo' src={imageC}></img>
    </div>
    <div ref={welcomeSubtextMob} id={styles.welcomeSubtextMob}>
        <p2 ref={paragraph1Mob} id={styles.paragraph1Mob}>Full-Stack Developer - CS Student</p2>
        <p1 ref={paragraph2Mob} id={styles.paragraph2Mob}>I am a software developer driven by a love for creating exciting and impactful projects. I'm currently exploring Web-Development and pursuing a degree in computer science from the University of Florida.</p1>
    </div>
    </section>
    <div ref={mouseContainer} id={styles.mouseContainer}>
        <div ref={mouse} className={styles["icon-scroll"]}></div>
    </div>
    </>
  )
}
