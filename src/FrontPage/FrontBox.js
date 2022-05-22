import { Button, Dropdown } from 'react-bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FrontBox() {
  return (
    <>
      <section>
        <div className='box'>
          <p style={{ textAlign: 'center' }}>REGISTRATION FORM</p>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {/* <Form.Group className='mb-3' controlId='formBasicAge'>
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
            </Form.Group> */}
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicComfirmPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Please Confirm Your Password'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              <Link
                to='/Symptoms'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Submit
              </Link>
            </Button>
          </Form>
        </div>
      </section>
    </>
  )
}

export default FrontBox
