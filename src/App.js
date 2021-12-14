
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP__NEWS_API

  state={
    progress:0
  }

  setProgress = (progress)=> {
    this.setState({progress:progress})
  }

  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <LoadingBar
            color='#dee81a'
            progress={this.state.progress}
          />
         
          {/* <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize='6' category="general" /> */}
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize='6' category="general" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize='6' category="general" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize='6' category="sports" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize='6' category="science" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize='6' category="business" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize='6' category="technology" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize='6' category="health" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize='6' category="entertainment" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

