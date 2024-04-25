import React from "react"
import amazonLogo from "../assets/imgs/amazonLogo.svg"

function Header(){
    return(
        <div class="header">
            <img class="logo" src={amazonLogo} alt="AWS Logo" />
        </div>
    );
}
export default Header;