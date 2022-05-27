import React from 'react'
import { Card, Navbar } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './ContactInformation/Contact'
import { Random } from 'react-animated-text'
import { FaBeer, FaInstagram, FaFacebook, FaVoicemail } from 'react-icons/fa'

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
import DC from './DiseaseAndComdition/DC'
import AbdominalPain from './Symptoms/AbdominalPain'
import Q1 from './AnklePain/Q1'
import AbQ1 from './AbdominalQues/AbQ1'
import APQ2 from './AnklePain/APQ2'
import BCW1 from './BreastCancerWomen/BCW1'
import BCW2 from './BreastCancerWomen/BCW2'
import BPM1 from './BreastProblemMen/BPM1'
import BPM2 from './BreastProblemMen/BPM2'
import CPI1 from './ChestPainInfant/CPI1'
import CPI2 from './ChestPainInfant/CPI2'
import CPA1 from './ChestPainAcute/CPA1'
import CPA2 from './ChestPainAcute/CPA2'
import CAF1 from './ColdandFlu/CAF1'
import CAF2 from './ColdandFlu/CAF2'
import D1 from './Diarreha/D1'
import D2 from './Diarreha/D2'
import EP1 from './EarProblem/EP1'
import EP2 from './EarProblem/EP2'

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
          <Route exact path='/Dc' element={<DC />} />
          <Route exact path='/AbPain' element={<AbdominalPain />} />
          <Route exact path='/AbQ1' element={<AbQ1 />} />
          <Route exact path='/AnpQ1' element={<Q1 />} />
          <Route exact path='/AbQ2' element={<APQ2 />} />
          <Route exact path='/BCW1' element={<BCW1 />} />
          <Route exact path='/BCW2' element={<BCW2 />} />
          <Route exact path='/BPM1' element={<BPM1 />} />
          <Route exact path='/BPM2' element={<BPM2 />} />
          <Route exact path='/CPI1' element={<CPI1 />} />
          <Route exact path='/CPI2' element={<CPI2 />} />
          <Route exact path='/CPA1' element={<CPA1 />} />
          <Route exact path='/CPA2' element={<CPA2 />} />
          <Route exact path='/CAF1' element={<CAF1 />} />
          <Route exact path='/CAF2' element={<CAF2 />} />
          <Route exact path='/D1' element={<D1 />} />
          <Route exact path='/D2' element={<D2 />} />
          <Route exact path='/EP1' element={<EP1 />} />
          <Route exact path='/EP2' element={<EP2 />} />
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
        <Navbar.Text>
          <FaInstagram />
        </Navbar.Text>
        <Navbar.Text>
          <FaFacebook />
        </Navbar.Text>
        <Navbar.Text>
          <FaVoicemail />
        </Navbar.Text>
      </Card.Footer>

      {/* <FrontBox /> */}
    </div>
  )
}

export default App
