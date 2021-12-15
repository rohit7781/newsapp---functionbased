
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  const apiKey = process.env.REACT_APP__NEWS_API

 
  const [progress, setProgress] = useState(0)




    return (
      <Router>
        <div>
        <Navbar />
          <LoadingBar
            color='#dee81a'
            progress={progress}
          />
         
          {/* <News setProgress={setProgress} apiKey={apiKey} pageSize='6' category="general" /> */}
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize='6' category="general" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize='6' category="general" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize='6' category="sports" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize='6' category="science" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize='6' category="business" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize='6' category="technology" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize='6' category="health" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize='6' category="entertainment" />} />
          </Routes>
        </div>
      </Router>
    )
  
}

export default App ;