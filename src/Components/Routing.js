import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Weather from './weather';
export default class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/weather' element={<Weather/>}/>
                

                
            </Routes>
        </Router>
      </div>
    )
  }
}
