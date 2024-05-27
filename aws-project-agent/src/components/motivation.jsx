import React from "react"
import motivateQ from "../data/motivationalQuotes"

//literally read from an array and display in a box
function Motivation(){
    const randomIndex = Math.floor(Math.random() * motivateQ.length);
    const randomQuote = motivateQ[randomIndex];

    return(
        <div class="motivate">
            <p><strong>Kind Regards:</strong> <em>{randomQuote}</em></p>
        </div>
    );
}

export default Motivation;