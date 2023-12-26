import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";
const Header = ()=>{
    const navigate = useNavigate()
    return (
        <div className="Header">
            <a className="Header_a--Name" onClick={()=>navigate("/")}>
                Lai Tan Tai
            </a>
            <div className="Header_a--Info">
                <a onClick={()=>navigate("/recent")}>
                    Recent work
                </a>
                <a onClick={()=>navigate("/contact")}>
                    Contact me
                </a>
            </div>
            <div className="Header_a--Link">
                <a href="https://www.facebook.com/tai.lai.144"><img className="w-8 h-8" src="./2023_Facebook_icon.svg.webp"/></a>
                <a href="https://github.com/LaiTanTai"><img className="w-10 h-10 rounded-full" src="./tải xuống.png"/></a>
            </div>
        </div>
    );
}
export default Header