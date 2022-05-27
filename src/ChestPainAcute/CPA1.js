import React, { useState } from 'react'
import { Button, Col, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CPA1() {
  const [information, setInformation] = useState(
    'These could be symptoms of HYPERVENTILATION, an episode of overbreathing often caused by stress or anxiety. It can also be caused by increased breathing when your body is not getting enough oxygen and you begin to breathe faster.'
  )
  const [information1, setInformation1] = useState('')
  const [information2, setInformation2] = useState('No Problem seen.')
  const [information3, setInformation3] = useState('')
  const [advice, setAdvice] = useState(
    'If you have a heart condition, lung condition, ASTHMA, or if you are experiencing rapid breathing for the first time, go directly to the emergency room.If you have hyperventilated before due to stress or anxiety, your doctor may have given you information about treating yourself. Lie down, relax, and try to slow your breathing. Try breathing through pursed lips (as if you were whistling), or cover your mouth and one nostril, and breathe through the other nostril. Talk with your doctor about relaxation treatments, to include mindfulness and meditation.'
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
          <p style={{ textAlign: 'center' }}>QUESTION 1</p>
          <Button variant='warning' type='submit' style={{ width: '100%' }}>
            <Link to='/Dc' style={{ textDecoration: 'none', color: 'white' }}>
              BACK TO SYMPTOMS
            </Link>
          </Button>

          <Form.Group className='mb-3' controlId='formBasicAge'>
            <Form.Label>Do you have severe chest pain?</Form.Label>
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

          <Button variant='success' type='submit' style={{ width: '100%' }}>
            <Link to='/CPA2' style={{ textDecoration: 'none', color: 'white' }}>
              NEXT QUESTION
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CPA1
