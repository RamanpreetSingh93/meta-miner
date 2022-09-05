import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import './LandingPage.css'

const LandingPage = ({ setViewFlag, data }) => {
    const [getBckgrnd, setBckgrnd] = useState('light-theme')
    const [getTheme, setTheme] = useState(getBckgrnd === "dark-theme" ? true : false)

    useEffect(() => {
        getBckgrnd === 'dark-theme'
            ? document.getElementsByClassName('landing-content')[0]
                ? (document.getElementsByClassName('landing-content')[0].className =
                    'landing-content')
                : (document.getElementsByClassName(
                    'landing-content-light'
                )[0].className = 'landing-content')
            : document.getElementsByClassName('landing-content')[0]
                ? (document.getElementsByClassName('landing-content')[0].className =
                    'landing-content-light')
                : (document.getElementsByClassName('landing-content-light')[0].className =
                    'landing-content-light')
    }, [getBckgrnd])

    return (
        <>
            <Header setBackGround={setBckgrnd} setTheme={setTheme} getTheme={getTheme} />
            <div className="landing-content">
                <div className="landing-text">
                    <h1>Find documents on single click</h1>
                    <p>Dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="landing-search">
                    <SearchBar onSearch={data} updateFlag={setViewFlag} />
                </div>
            </div>
        </>
    )
}

export default LandingPage
