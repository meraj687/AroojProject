import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './ContactInformation/Contact'
import { Random } from 'react-animated-text'

// import Check from './FrontPage/Check'
import FrontBox from './FrontPage/FrontBox'
import FrontPage from './FrontPage/FrontPage'
import Gallary from './FrontPage/Gallary'
import GlucomePrecaution from './Precautions/GlucomePrecaution'
import LeucemiaPrecaution from './Precautions/LeucemiaPrecaution'
import LiverPrecaution from './Precautions/LiverPrecaution'
import Fever from './Symptoms/Fever'
import Glucoma from './Symptoms/Glucoma'
import Leucamia from './Symptoms/Leucamia'
import LiverSerosis from './Symptoms/LiverSerosis'
import SymptomsPage from './Symptoms/SymptomsPage'

function App() {
  return (
    /* <FrontPage /> */
    /* <Routes>
      <Check />
    </Routes> */
    // <div>
    //   <div>
    //     <h1>Home</h1>
    //     <h2>About</h2>
    //     <h3>Section</h3>
    //     <Router>
    //       <Routes>
    //         <Route exact path='Gallary' element={Gallary} />
    //       </Routes>
    //     </Router>
    //   </div>
    // </div>
    // <div className='App'>
    //   <h1>Hello</h1>

    //   <Router>
    //     <Link to='/Gallary'>Click here</Link>
    //     <Routes>
    //       <Route exact path='/Gallary' element={<Gallary />} />
    //     </Routes>
    //   </Router>
    // </div>
    <div>
      <Router>
        <FrontPage />
        {/* <Routes>
          <Route exact path='/LiverS' element={<LiverSerosis />} />
        </Routes> */}
        <Routes>
          <Route exact path='/' element={<FrontBox />} />
          <Route exact path='/Gallary' element={<Gallary />} />
          <Route exact path='/LiverS' element={<LiverSerosis />} />
          <Route exact path='/Leuca' element={<Leucamia />} />
          <Route exact path='/Gluco' element={<Glucoma />} />
          <Route exact path='/Fever' element={<Fever />} />
          <Route exact path='/Symptoms' element={<SymptomsPage />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/LiverSe' element={<LiverPrecaution />} />
          <Route exact path='/Leuco' element={<LeucemiaPrecaution />} />
          <Route exact path='/Gluca' element={<GlucomePrecaution />} />
          <Route exact path='/FeverP' element={<GlucomePrecaution />} />
        </Routes>
      </Router>
      <br />

      <Card.Footer
        className='text-muted'
        style={{
          textAlign: 'center',
          fontFamily: 'monospace',
          letterSpacing: '5px',
        }}
      >
        {/* DESIGN BY AROOJ LATIEF */}
        <Random text='DESIGN BY AROOJ LATIEF' />
      </Card.Footer>

      {/* <FrontBox /> */}
    </div>
  )
}

export default App
