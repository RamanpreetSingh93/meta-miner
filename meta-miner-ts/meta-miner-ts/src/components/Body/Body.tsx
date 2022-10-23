import React, { useEffect, useState } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Results from '../ResultsPage/Results'

import './Body.scss'

const Body:React.FunctionComponent = () => {
  const [currentView, setCurrentView] = useState<string>('landing-page')
  const [data, setData] = useState<string>('')
  const [getBckgrnd, setBckgrnd] = useState<string>('light-theme')
  console.log('viewData from Landing:   ' + data)
  // TODO: Use data for parsing to results page and show results accordingly.

  useEffect(() => {
    if (getBckgrnd === 'dark-theme') {
      document
        .getElementsByTagName('body')[0]
        .setAttribute('style', 'background-color: #21262c')
    } else {
      document
        .getElementsByTagName('body')[0]
        .setAttribute('style', 'background-color: #fff')
    }
  }, [getBckgrnd])

  return(
    <div className="body-content">
   { currentView === 'landing-page' ? (
      <LandingPage
        setViewFlag={setCurrentView}
        data={setData}
      />
    ) : (
      <Results
        setViewFlag={setCurrentView}
        data={setData}
        backgroundTheme={getBckgrnd}
      />
    )}
  </div>
  )
}

export default Body
