import React, {useRef, useEffect} from 'react';
import styles from './Welcome.module.css';
import imageC from './selfPictures/selfie2.jpg';
import imageS from './KaiMcFarlaneSeniorPicture2.jpeg';
import { func } from 'prop-types';

export default function Welcome() {

    const profilePic = useRef();
    const subtitle = useRef();
    const title = useRef();
    const paragraph1 = useRef();
    const paragraph2 = useRef();
    const mouseContainer = useRef();

    
    useEffect(() => {
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
        },4000)
        

    const mainLoadAnimation = () => {
        if(profilePic) 
        {
            profilePic.current.style.display = "none";
            subtitle.current.style.display = "none";
            title.current.style.display = "none";
            paragraph1.current.style.display = "none";
            paragraph2.current.style.display = "none";

         setTimeout(() => {
             profilePic.current.style.display = "block";
            // title.current.style.display = "block";
            subtitle.current.style.display = "block";
         },1000)
         setTimeout(() => {
            title.current.style.display = "block";
            subtitle.current.style.display = "block";
        },2000)
        setTimeout(() => {
            paragraph1.current.style.display = "block";
            paragraph2.current.style.display = "block";
        },3000)
        }
    }  

    const mainMouseLoadAnimation = () => {
        if(profilePic) 
        {
            mouseContainer.current.style.display = "none";

         setTimeout(() => {
            mouseContainer.current.style.display = "block";
         },3800)
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
    <section id={styles.welcomeAll}>
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
    </section>
    <div ref={mouseContainer} id={styles.mouseContainer}>
        <div className={styles["icon-scroll"]}></div>
    </div>
    
    </>
  )
}
