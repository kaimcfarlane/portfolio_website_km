import React, {useRef} from 'react'
import './Header.css'

export default function Header() {
    //We are implementing button here
    //Styling on web page link 
    //Check errors on chroms and look to handle future ones
    //as well as solve cuyrrent ones

    const burgerMenu = useRef();
    function burgerMenuClick() {
        // $('.menu').click (function(){
        //     $(this).toggleClass('open');
        //   });
        burgerMenu.current.classList.toggle('open');
        console.log("burgerMenu Clicked!");
    } 

  return (

    
    <>
        <div>This is the header</div>
        <div ref={burgerMenu} className="menu btn11" data-menu="11" onClick={burgerMenuClick}>
        <div className="icon-left"></div>
        <div className="icon-right"></div>
      </div>
    </>
  )
}
