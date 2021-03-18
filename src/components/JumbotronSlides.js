//import React from 'react'

function JumbotronSlides() {
    let setImg = 1;
    document.getElementById(0).src = document.getElementById(setImg).src;
    document.getElementById(setImg).className = "thumb selected";

}

export default JumbotronSlides
