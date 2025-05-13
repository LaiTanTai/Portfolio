import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"
const Header = ()=>{
    const navigate = useNavigate()
    return (
        <div className="Header">
            <a className="Header_a--Name" onClick={()=>navigate("/")}>
                Tài Lai 
            </a>
            <div className="Header_a--Info">
                <a className="info" onClick={()=>navigate("/Home")}>
                    Home
                </a>
                <a className="info" onClick={()=>navigate("/About")}>
                    About
                </a>
                <a className="info" onClick={()=>navigate("/Work")}>
                    Work
                </a>
                <a className="info" onClick={()=>navigate("/Contact")}>
                    Contact
                </a>
            </div>
        </div>
    );
}
export default Header