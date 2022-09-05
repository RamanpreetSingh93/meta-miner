import React, { useEffect, useState } from 'react';
import LandingPage from "../LandingPage/LandingPage";
import Results from "../ResultsPage/Results";

import "./Body.css"

const Body = () => {
    const [currentView, setCurrentView] = useState("LandingPage");
    const [data, setData] = useState("");
    const [getBckgrnd, setBckgrnd] = useState('light-theme')
    console.log("viewData from Landing:   " + data)
    // TODO: Use data for parsing to results page and show results accordingly.

    useEffect(() => {
        if (getBckgrnd === "dark-theme") {
            document.getElementsByTagName("body")[0].style = "background-color: #21262c"
        }
        else {
            document.getElementsByTagName("body")[0].style = "background-color: #fff"
        }

    }, [])
    return (
        <div className='body-content'>
            {currentView === "LandingPage" ? <LandingPage setViewFlag={setCurrentView} data={setData} setBackgroundTheme={setBckgrnd} /> : <Results setViewFlag={setCurrentView} data={setData} backgroundTheme={getBckgrnd} />}
        </div>
    );
};

export default Body;