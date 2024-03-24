import React from "react";
import '../../App.css';
import logo from './eco-ecology-grass-svgrepo-com.svg';
import logo2 from './eco-ecology-grass-svgrepo-com copy.svg';


export const Home = () => {
    return (
        <div>
            <div className="websiteTitle">
                <img src={logo} className="App-logo1" alt="logo1" />
                <div>
                    TOUCH GRASS
                </div>
                <img src={logo2} className="App-logo2" alt="logo2" />
            </div>
            <div className="websiteSubtitle">
                ABOUT
            </div>
            <div className="SubtitleContent">
                <p>Discover the UAH campus and the greenspaces it offers with Touch Grass, a simple navigation tool</p>
                <p> that guides you to locations you can enjoy nature. </p>
            </div>
            <a href="/map">
                <button class="MapButton" role="button">Begin Navigating</button>
            </a>
            <div className="Content">
                <p>WHY GREENSPACES?</p>
                <p>Greenspaces have been proven to enhance student perception of their campus environment, including: </p>
                <p>- STUDENT WELLBEING</p>
                <p>- MENTAL REJUVENATION</p>
                <p>- STRESS REDUCTION</p>
                <p>- INCREASE IN SOCIAL INTERACTIONS</p>
                <p>- LIFE SATISFACTION</p>
                <p>With Touch Grass and greenspaces, you can help protect and conserve our environment by fostering a healthy relationship with nature, conserving energy consumption at home, promoting the use of greenspaces AND help you, by touching grass.</p>
            </div>
            <div className="cred">
                RECOGNITIONS
            </div>
            <div className="credits">
                We express our deep gratitude to ACM and Botts Innovative Reseach for sponsoring, as well as UAH student Alexis A. for reasearch.
            </div>
            <div className="dev">
                Developed by: ANSHIKA SINHA, ASHLEY KIM, CHLOE HWANG, & PHILLIP HYAMS
            </div>
            <div class="bottom-strip"></div>

        </div>
    )
}

