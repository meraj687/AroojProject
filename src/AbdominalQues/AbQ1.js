import React, { useState } from 'react'
import { Button, Col, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Q1() {
  const [information, setInformation] = useState(
    'Your problem may be a HIATAL HERNIA.'
  )
  const [information1, setInformation1] = useState('')
  const [information2, setInformation2] = useState('No Problem seen.')
  const [information3, setInformation3] = useState('')
  const [advice, setAdvice] = useState(
    'See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort.'
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
              Do you feel pressure in your upper abdomen that gets worse when
              you bend over or lie down at night?
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
            <Link to='/Q1' style={{ textDecoration: 'none', color: 'white' }}>
              NEXT QUESTION
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Q1
