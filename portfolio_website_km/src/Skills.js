import {React, useRef, useEffect} from 'react'
import './skill.css'
import SkillsRTitle from './SkillsRTitle'
import JS_Icon from './javascriptIcon.png'
import html_Icon from './htmlLogo.png'
import css_Icon from './cssLogo.png'
import java_Logo from './javaLogo.png'
import react_Logo from './reactLogo.png'
import typescript_Logo from './typescriptLogo.png'
import cSharp_Logo from './cSharp_Logo.png'
import express_Logo from './expressLogo.png'
import mui_Logo from './materialuiLogo.png'
import node_Logo from './nodeLogo.png'
import mongodb_Logo from './mongodb_Logo.png'
import api_Logo from './apiLogo.png'
import git_Logo from './gitLogo.png'
import gitlab_Logo from './gitlabLogo.png'
import heroku_Logo from './herokuLogo.png'
import dr_Logo from './davinciresolveLogo.png'
import chartjs_Logo from './icons8-area-chart-96.png'
import pythonLogo from './pythonlogo.png'
import cPlusPlusLogo from './c++.png'
import jiraLogo from './jiralogo.png'
import sqlLogo from './sqlLogo.png'
import bootstrapLogo from './bootstraplogo.png'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useInView } from 'react-intersection-observer'

export default function Skills({DLObj}) {

  const skillsText = useRef()
  const titleOne = useRef()
  const titleTwo = useRef()
  const subtitle = useRef()
  const titleOneH = useRef()
  const titleTwoH = useRef()

  useEffect(() =>{
    if(!DLObj.isLight)
    {
        titleOne.current.style.color = "#fffffe";
        titleTwo.current.style.color = "#fffffe";
        subtitle.current.style.color = "#fffffe";
        titleOneH.current.style.color = "#fffffe";
        titleTwoH.current.style.color = "#fffffe";

    }
    else
    {
      titleOne.current.style.color = "black";
      titleTwo.current.style.color = "black";
      subtitle.current.style.color = "black";  
      titleOneH.current.style.color = "black";
      titleTwoH.current.style.color = "black";
    }
},[DLObj])

// let callback = (entries, observer) => {
//   entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//           /* remove class when snap target becomes invisible */
//           entry.current.target.classList.remove("snappedLB");
//       } else {
//         console.log("OBESERVER BEING RUN")
//           /* add class when snap target becomes visible */
//           entry.current.target.classList.add("snappedLB");
//       }
//   });
// };
// projectInfoBackground.current.classList.remove('projectShadow')

/* only 50% of the element needs to be visible */
// let options = {
//   threshold: 0.5
// }

// let observer = new IntersectionObserver(callback, options);

// /* do this to #section-2 specifically */
// let section2 = document.querySelector("#section-2")
// console.log(skillsText)
// if(skillsText) {
  
// }

// document.addEventListener("DOMContentLoaded", function(){
//   observer.observe(skillsText);
// });

const { ref, inView, entry } = useInView({threshold: 0,})
const imageContainer1 = useRef()
const imageContainer2 = useRef()
const imageContainer3 = useRef()

useEffect(()=>{
  if(inView) {
    skillsText.current.classList.add("snappedLB")
    imageContainer1.current.classList.add("snappedRS1")
    imageContainer2.current.classList.add("snappedRS2")
    imageContainer3.current.classList.add("snappedRS3")
  }
  // else{
  //   skillsText.current.classList.remove("snappedLB")
  //   imageContainer1.current.classList.remove("snappedRS1")
  //   imageContainer2.current.classList.remove("snappedRS2")
  //   imageContainer3.current.classList.remove("snappedRS3")
  // }
},[inView])



  return (
  <>
    <section inview={inView} id='skillsContainer'>
      <div ref={skillsText} id='skillsText'>
        {/* Skillset I'm Skilled My Talent Im talented */}
        <div id='skillsTitleContainer'>
          <h1 ref={titleOneH} id='word1Half'>I'm</h1>
          <h1 ref={titleTwoH} id='word2Half'>Experienced</h1>
        </div>
          <h1 ref={titleOne} id='word1'>I'm</h1>
          <h1 ref={titleTwo} id='word2'>Experienced</h1>
        <p ref={subtitle} id='word3'>- 3 Years of Code -</p>
      </div>
      <div id='skillsContent' ref={ref}>
        <div>
          <SkillsRTitle inview={inView}  name={'Languages'} DLObj={DLObj}/>
          <div ref={imageContainer1} className='imageContainer'>
            <img className='icon' alt='languageIcon' src={html_Icon} data-tooltip-id="htmlLogo" data-tooltip-content='HTML'></img>
            <ReactTooltip  id='htmlLogo'/>
            <img className='icon' alt='languageIcon' src={css_Icon} data-tooltip-id="cssLogo" data-tooltip-content='CSS'></img>
            <ReactTooltip  id='cssLogo'/>
            <img className='icon' alt='languageIcon' src={JS_Icon} data-tooltip-id="jsLogo" data-tooltip-content='Javascript'></img>
            <ReactTooltip  id='jsLogo'/>
            <img className='icon' id='typescript_Logo' alt='languageIcon' src={typescript_Logo} data-tooltip-id="typeLogo" data-tooltip-content='Typescript'></img>
            <ReactTooltip  id='typeLogo'/>
            <img className='icon' id='java_Logo' alt='languageIcon' src={java_Logo} data-tooltip-id="javaLogo" data-tooltip-content='Java'></img>
            <ReactTooltip  id='javaLogo'/>
            <img className='icon' id='cSharp_Logo' alt='languageIcon' src={cSharp_Logo} data-tooltip-id="csharpLogo" data-tooltip-content='C#'></img>
            <ReactTooltip  id='csharpLogo'/>
            <img className='icon' id='cPlusPlusLogo' alt='languageIcon' src={cPlusPlusLogo} data-tooltip-id="cplusLogo" data-tooltip-content='C++'></img>
            <ReactTooltip  id='cplusLogo'/>
            <img className='icon' id='pythonLogo' alt='languageIcon' src={pythonLogo} data-tooltip-id="pythonLogo" data-tooltip-content='Python'></img>
            <ReactTooltip  id='pythonLogo'/>
          </div>
        </div>
        <div>
        <SkillsRTitle inview={inView} name={'Libraries'} DLObj={DLObj}/>
          <div ref={imageContainer2} className='imageContainer'>
            <img className='icon' id='react_Logo' alt='libraryIcon' src={react_Logo} data-tooltip-id="reactLogo" data-tooltip-content='React.js'></img>
            <ReactTooltip  id='reactLogo'/>
            <img className='icon' id='express_Logo' alt='libraryIcon' src={express_Logo} data-tooltip-id="expressLogo" data-tooltip-content='Express.js'></img>
            <ReactTooltip  id='expressLogo'/>
            <img className='icon' id='mui_Logo' alt='libraryIcon' src={mui_Logo} data-tooltip-id="muiLogo" data-tooltip-content='MaterialUI'></img>
            <ReactTooltip  id='muiLogo'/>
            <img className='icon' id='node_Logo' alt='libraryIcon' src={node_Logo} data-tooltip-id="nodeLogo" data-tooltip-content='Node.js'></img>
            <ReactTooltip  id='nodeLogo'/>
            <img className='icon' id='chartjs_Logo' alt='libraryIcon' src={chartjs_Logo} data-tooltip-id="chartLogo" data-tooltip-content='Chart.js'></img>
            <ReactTooltip  id='chartLogo'/>
            <img className='icon' id='sqlLogo' alt='libraryIcon' src={sqlLogo} data-tooltip-id="sqlLogo" data-tooltip-content='SQL'></img>
            <ReactTooltip  id='sqlLogo'/>
            <img className='icon' id='bootstrap_Logo' alt='libraryIcon' src={bootstrapLogo} data-tooltip-id="bootstrapLogo" data-tooltip-content='Bootstrap'></img>
            <ReactTooltip  id='bootstrapLogo'/>
          </div>
        </div>
        <div>
        <SkillsRTitle inview={inView} name={'Learned'} DLObj={DLObj}/>
          <div ref={imageContainer3} className='imageContainer'>
            <img className='icon' alt='learnedIcon' src={mongodb_Logo} data-tooltip-id="mongoLogo" data-tooltip-content='MongoDB'></img>
            <ReactTooltip  id='mongoLogo'/>
            <img className='icon' alt='learnedIcon' src={api_Logo} data-tooltip-id="apiLogo" data-tooltip-content='API'></img>
            <ReactTooltip  id='apiLogo'/>
            <img className='icon' alt='learnedIcon' src={git_Logo} data-tooltip-id="gitLogo" data-tooltip-content='Git'></img>
            <ReactTooltip  id='gitLogo'/>
            <img className='icon' alt='learnedIcon' src={gitlab_Logo} data-tooltip-id="gitlabLogo" data-tooltip-content='Gitlab'></img>
            <ReactTooltip  id='gitlabLogo'/>
            <img className='icon' alt='learnedIcon' src={heroku_Logo} data-tooltip-id="herokuLogo" data-tooltip-content='Heroku'></img>
            <ReactTooltip  id='herokuLogo'/>
            <img className='icon' alt='learneIcon' src={jiraLogo} data-tooltip-id="jiraLogo" data-tooltip-content='Jira'></img>
            <ReactTooltip  id='jiraLogo'/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
