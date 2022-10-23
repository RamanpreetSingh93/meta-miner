/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";

interface searchBarProps {
    onSearch: any;
    updateFlag: any;
}

const SearchBar: React.FunctionComponent<searchBarProps> = (props:searchBarProps) => {
    const [searchValue, setSearchValue] = useState("");
    console.log("searchData from Search:   " + searchValue)

    const onClick = (data: string) => {
        props.onSearch(data)
        props.updateFlag("Search Clicked")
    }

    return (
        <div className="container-searchbar">
            <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                    <input className="search_input" id="search_input" type="text" name="" placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
                    {/* call props.onSearch here */}
                    <a className="cancel-search-icon" onClick={() => { return( document.getElementById("search_input") as HTMLInputElement).value = ""; }}><FontAwesomeIcon icon={faXmark} style={{ color: "#beabe2" }} /></a>
                    <a className="search_icon" onClick={() => onClick(searchValue)}><FontAwesomeIcon icon={faSearch} style={{ color: "#beabe2" }} /></a>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;