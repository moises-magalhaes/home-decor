import React from 'react';
import MainHeadingAbout  from "../components/MainHeadingAbout";


function About(){ 
    return (
        <>
        <MainHeadingAbout/>
            <div className="container">
                <div className="about-us">
                    <h2>Get to know us</h2>

                    <p className ="paragraph">Hey, we are Home Decor, a small family company thats value home and comfort
                    Our company started back there in 1965, with Jose Lorentz. He was a very talented wood worker and decided 
                    to create his own brand of furniture with great quality and sofistication. Now we are not producing our 
                    own material, a choice we made when we decided to expand our services to create the home belonging feeling 
                    to the whole house for our clients.<br/> 
                    
                    In 1993 we started developping the feeling of comfort and sofistication for each individual.<br/></p>

                    <p className ="paragraph">And here are we, figthing for quality of live after a long work day, 
                    making any single person we work for take a brake from chaos and stress just by coming home. We have served 
                    millions of families around Europe and our great purpose is to serve you for the best home you can have!<br/></p>

                    
                </div>
            </div>
        </>
    )
}
    export default About