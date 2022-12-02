import React from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = React.useState(false);
    const [toggleBar,setToggleBar] = React.useState(false);

    function hamburgerClick () {
        setShowMediaIcons(!showMediaIcons); 
        setToggleBar(!toggleBar);
    }

    return (
        
        <nav>
            
            <div className="Navbar">
                <div className="wrapper">
                    <div className="left">
                        <a href="#home" className="logo"><h1><span className="arrow">&lt;</span>Nikhil<span className="arrow">/&gt;</span></h1></a>
                    </div>
                    <div className="right">
                        <div  className="Navbar-options">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#works">Works</a></p>
                            <p><a href="#contact">Contact</a></p>
                        </div>
                        <div className="hamburger-menu" onClick={hamburgerClick}>
                            {toggleBar===false ? <FaBars size={35} /> : <ImCross size={30} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hamburger-navbar" style={{display: showMediaIcons !== true && "none"}}>
                <div  className="Navbar-options-hamburger">
                    <p onClick={hamburgerClick}><a href="#home">Home</a></p>
                    <p onClick={hamburgerClick}><a href="#about">About</a></p>
                    <p onClick={hamburgerClick}><a href="#works">Works</a></p>
                    <p onClick={hamburgerClick}><a href="#contact">Contact</a></p>
                </div>
            </div>
        </nav>
        
       
    );
}
 