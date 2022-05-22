import { Dropdown } from 'bootstrap'
import { Button, Form } from 'react-bootstrap'

;<div>
  <section>
    <div className='box'>
      <p style={{ textAlign: 'center' }}>LEUCAMIA</p>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

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
                Liver Serosis
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Leucemia</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Glucoma</Dropdown.Item>
              <Dropdown.Item href='#/action-4'>Fever</Dropdown.Item>
              {/* <Dropdown.Divider /> */}
              {/* <Dropdown.Item href='#/action-4'>Fever</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
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
        {/* <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group> */}
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  </section>
</div>
