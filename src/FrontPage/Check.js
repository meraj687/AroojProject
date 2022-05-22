import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Gallary from './Gallary'

function Check() {
  return (
    <Router>
      <div>
        <h1>
          <Link to='/Gallary'>Home</Link>
        </h1>
        <h2>About</h2>
        <h3>Section</h3>
        <Route path='Gallary' exact component={Gallary} />
      </div>
    </Router>
  )
}

export default Check
