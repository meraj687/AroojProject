import React, { useState } from 'react'
import { Button, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SymptomsPage() {
  return (
    <div>
      <section>
        <div className='box'>
          <p style={{ textAlign: 'center' }}>SYMPTOMS INFORMATION</p>
          <Form>
            {/* <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group> */}

            <Form.Group className='mb-3' controlId='formBasicSymptoms'>
              <Form.Label>Symptoms</Form.Label>
              {/* <Form.Control type='text' placeholder='Symptoms' /> */}
              <Dropdown>
                <Dropdown.Toggle
                  id='dropdown-button-dark-example1'
                  variant='secondary'
                >
                  Symptoms Checker
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                  <Dropdown.Item href='#/action-1' active>
                    <Link
                      to='/LiverS'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Liver Serosis
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    <Link
                      to='/Leuca'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Leucemia
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    <Link
                      to='/Gluco'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Glucoma
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-4'>
                    <Link
                      to='/Fever'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      Fever
                    </Link>
                  </Dropdown.Item>
                  {/* <Dropdown.Divider /> */}
                  {/* <Dropdown.Item href='#/action-4'>Fever</Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <p style={{ color: 'grey', padding: '5px' }}>
              *{' '}
              <strong>
                {' '}
                We aim to describe a method that combines standardized
                vocabularies, clinical expertise, and natural language
                processing to generate comprehensive symptom vocabularies and
                identify symptom information in EHR notes
              </strong>
            </p>

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
            {/* <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group> */}
            {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group> */}
            {/* <Button variant='primary' type='submit'>
              Submit
            </Button> */}
          </Form>
        </div>
      </section>
    </div>
  )
}

export default SymptomsPage
