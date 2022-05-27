import React, { useState } from 'react'
import { Button, Col, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CPI2() {
  const [information, setInformation] = useState(
    'These symptoms may be caused by PLEURISY, an inflammation of the lining around the lung.'
  )
  const [information1, setInformation1] = useState('')
  const [information2, setInformation2] = useState('No Problem seen.')
  const [information3, setInformation3] = useState('')
  const [advice, setAdvice] = useState(
    'See your doctor. He or she can determine what is causing the PLEURISY. Often, an anti-inflammatory drug will help relieve symptoms. Do not give aspirin to your child. Do not give children 5 years and under cough or cold medicines.'
  )
  const [advice1, setAdvice1] = useState('')
  const [advice2, setAdvice2] = useState('No need.')
  const [advice3, setAdvice3] = useState('')
  const [bg, setBg] = useState('orange')
  const [bg1, setBg1] = useState('green')
  const [fbg, setFBG] = useState('')
  return (
    <div>
      <section>
        <div className='box'>
          <p style={{ textAlign: 'center' }}>QUESTION 2</p>
          <Button variant='warning' type='submit' style={{ width: '100%' }}>
            <Link to='/Dc' style={{ textDecoration: 'none', color: 'white' }}>
              BACK TO SYMPTOMS
            </Link>
          </Button>

          <Form.Group className='mb-3' controlId='formBasicAge'>
            <Form.Label>
              Does your child have a dry cough and a sharp pain in the chest
              when he or she takes a deep breath?
            </Form.Label>
            <br />
            <button
              type='submit'
              className='button-30'
              onClick={(InputEvent) => {
                setInformation1(information)
                setAdvice1(advice)
                setFBG(bg)
              }}
            >
              Yes
            </button>
            <button
              type='submit'
              className='button-30'
              onClick={(InputEvent) => {
                setInformation1(information2)
                setAdvice1(advice2)
                setFBG(bg1)
              }}
            >
              No
            </button>
          </Form.Group>

          <p>
            <strong style={{ color: fbg }}> DIAGNOSIS </strong> : {information1}
          </p>
          {/* <p>{information3}</p> */}
          <p>
            {' '}
            <strong style={{ color: 'red' }}> SELF CARE </strong> : {advice1}
          </p>
          {/* <p>{advice3}</p> */}

          <Button
            variant='success'
            type='submit'
            style={{ width: '100%' }}
            disabled
          >
            <Link to='/BCW2' style={{ textDecoration: 'none', color: 'white' }}>
              NEXT QUESTION
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CPI2
