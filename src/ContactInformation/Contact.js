import React from 'react'
import {
  Button,
  Carousel,
  Form,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../ContactInformation/Contact.css'

function Contact() {
  return (
    <div>
      <section>
        <div className='box'>
          {/* <p style={{ textAlign: 'center' }}>CONTACT</p> */}
          <p style={{ textAlign: 'center' }}>
            {' '}
            <strong> Contact are </strong> : 9541340833
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
