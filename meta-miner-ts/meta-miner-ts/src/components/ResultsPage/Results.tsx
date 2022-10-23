import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import DataTabs from './DataTabs'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'

import './Results.scss'

interface resultsProps {
    setViewFlag: any;
    data: any;
    backgroundTheme: any
}

const Results: React.FunctionComponent<resultsProps> = (props: resultsProps) => {
    console.log(props.backgroundTheme + "===>theme");
    const [getBckgrnd, setBckgrnd] = useState(props.backgroundTheme)
    const [getTheme, setTheme] = useState(props.backgroundTheme === "dark-theme" ? true : false)

    useEffect(() => {
        getBckgrnd === 'dark-theme'
            ? document.getElementsByClassName('results-page')[0]
                ? (document.getElementsByClassName('results-page')[0].className =
                    'results-page')
                : (document.getElementsByClassName(
                    'results-page-light'
                )[0].className = 'results-page')
            : document.getElementsByClassName('results-page')[0]
                ? (document.getElementsByClassName('results-page')[0].className =
                    'results-page-light')
                : (document.getElementsByClassName('results-page-light')[0].className =
                    'results-page-light')

        getBckgrnd === 'dark-theme'
            ? document.getElementsByClassName('d-tabs')[0]
                ? (document.getElementsByClassName('d-tabs')[0].className =
                    'd-tabs')
                : (document.getElementsByClassName(
                    'd-tabs-light'
                )[0].className = 'd-tabs')
            : document.getElementsByClassName('d-tabs')[0]
                ? (document.getElementsByClassName('d-tabs')[0].className =
                    'd-tabs-light')
                : (document.getElementsByClassName('d-tabs-light')[0].className =
                    'd-tabs-light')
    }, [getBckgrnd])
    return (
        <div className='results-view'>
            <Header setBackGround={setBckgrnd} setTheme={setTheme} getTheme={getTheme} />
            <div className="results-page-light">
                <SearchBar onSearch={props.data} updateFlag={props.setViewFlag} />
                <div className="d-tabs">
                    <DataTabs backGroundValue={getBckgrnd} />
                </div>
            </div>
        </div>
    )
}

export default Results
