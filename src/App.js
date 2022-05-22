import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './ContactInformation/Contact'

// import Check from './FrontPage/Check'
import FrontBox from './FrontPage/FrontBox'
import FrontPage from './FrontPage/FrontPage'
import Gallary from './FrontPage/Gallary'
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
        </Routes>
      </Router>
      <Card.Footer className='text-muted' style={{ textAlign: 'center' }}>
        DESIGN BY AROOJ LATIEF
      </Card.Footer>
      {/* <FrontBox /> */}
    </div>
  )
}

export default App
