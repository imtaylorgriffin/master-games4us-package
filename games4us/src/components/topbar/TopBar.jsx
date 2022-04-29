import "./topbar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
  return (
    <div className = "top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-reddit"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
             
              <a href="/">
              <li className="topListItem">HOME</li>
              </a>
                
                <li className="topListItem">ABOUT</li>

                <a href="http://localhost:8080">
                <li className="topListItem">PARTNERS</li>
                </a>
              
            </ul>
        </div>
        <div className="topRight">
            <img className = "topImg" 
            src="https://i.pinimg.com/originals/30/0c/8a/300c8aa894335d09990016bf972762e6.jpg" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>


    </div>
  )
}
