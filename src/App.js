import React, { Component } from 'react'
import News from './component/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>        
        <Router>
          <Routes>
            <Route path='/' element={<News key='india' pageSize='6' query='india'/>}/>
            <Route exact path='/business' element={<News key='business' pageSize='6' query='business'/>}/>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize='6' query='entertainment'/>}/>
            <Route exact path='/general' element={<News key='general' pageSize='6' query='general'/>}/>
            <Route exact path='/health' element={<News key='health' pageSize='6' query='health'/>}/>
            <Route exact path='/science' element={<News key='science' pageSize='6' query='science'/>}/>
            <Route exact path='/sports' element={<News key='sports' pageSize='6' query='sports'/>}/>
            <Route exact path='/technology' element={<News key='technology' pageSize='6' query='technology'/>}/>
          </Routes>
        </Router>
          
      </div>
    )
  }
}
