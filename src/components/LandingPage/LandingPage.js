import React, { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import "./LandingPage.css";

const LandingPage = ({ setViewFlag, data }) => {
    return (
        <div className="landing-content">
            <div className="landing-text">
                <h1 style={{ color: "white" }}>Find documents on single click</h1>
                <p style={{ color: "white" }}>Dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="landing-search">
                <SearchBar onSearch={data} updateFlag={setViewFlag} />
            </div>
        </div>
    );
};

export default LandingPage;