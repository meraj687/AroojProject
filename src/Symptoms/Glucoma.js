import React from 'react'
import { Button, Col, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Glucoma() {
  return (
    <div>
      <section>
        <div className='box'>
          <p style={{ textAlign: 'center' }}>GLUCOMA</p>
          <Form.Group className='mb-3' controlId='formBasicAge'>
            <Form.Label>Age</Form.Label>
            <Form.Control type='number' placeholder='Age' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicSugar'>
            <Form.Label>Sugar Level</Form.Label>
            <Form.Control type='number' placeholder='Sugar Level' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicBP'>
            <Form.Label>Blood Pressure</Form.Label>
            <Form.Control type='number' placeholder='Blood Pressure' />
          </Form.Group>
          <Col sm={10}>
            <label htmlFor=''>1 . Vomiting</label>
            <Form.Check
              type='radio'
              label='Yes'
              name='formHorizontalRadios1'
              id='formHorizontalRadios1'
            />
            <Form.Check
              type='radio'
              label='No'
              name='formHorizontalRadios1'
              id='formHorizontalRadios2'
            />
          </Col>
          <Col sm={10}>
            <label htmlFor=''>2 . Stomach Pain</label>
            <Form.Check
              type='radio'
              label='Yes'
              name='formHorizontalRadios2'
              id='formHorizontalRadios1'
            />
            <Form.Check
              type='radio'
              label='No'
              name='formHorizontalRadios2'
              id='formHorizontalRadios2'
            />
          </Col>
          <Col sm={10}>
            <label htmlFor=''>3 . Itching Skin</label>
            <Form.Check
              type='radio'
              label='Yes'
              name='formHorizontalRadios3'
              id='formHorizontalRadios1'
            />
            <Form.Check
              type='radio'
              label='No'
              name='formHorizontalRadios3'
              id='formHorizontalRadios2'
            />
          </Col>
          <Button variant='primary' type='submit'>
            <Link
              to='/Gluca'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Submit
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Glucoma
