import React from "react"
import amazonLogo from "../assets/imgs/amazonLogo.svg"

function Header(){
    return(
        <div className="item nav_bar">
            <img className="logo" src={amazonLogo} alt="AWS Logo" />
        </div>
    );
}
export default Header;