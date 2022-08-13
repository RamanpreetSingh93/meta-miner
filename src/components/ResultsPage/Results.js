import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import "./Results.css";
import DataTabs from './DataTabs';

const Results = ({ setViewFlag, data }) => {
    return (
        <div className="results-page">
            <SearchBar onSearch={data} updateFlag={setViewFlag} />
            <div className='d-tabs'><DataTabs /></div>
        </div>
    );
};

export default Results;