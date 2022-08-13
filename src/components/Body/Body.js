import React, { useState } from 'react';
import LandingPage from "../LandingPage/LandingPage";
import Results from "../ResultsPage/Results";

const Body = () => {
    const [currentView, setCurrentView] = useState("LandingPage");
    const [data, setData] = useState("");
    console.log("viewData from Landing:   " + data)
    // TODO: Use data for parsing to results page and show results accordingly.

    return (
        <div className='body-content'>
            {currentView === "LandingPage" ? <LandingPage setViewFlag={setCurrentView} data={setData} /> : <Results setViewFlag={setCurrentView} data={setData} />}
        </div>
    );
};

export default Body;