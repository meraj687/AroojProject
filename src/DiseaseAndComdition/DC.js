import React from 'react'
import { Button, Col, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card, CardGroup, Carousel, CarouselItem } from 'react-bootstrap'
import '../DiseaseAndComdition/DC.css'
import Sdata from '../Sdata'
function DC() {
  return (
    <div style={{ padding: '10px' }}>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src={Sdata[0].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[0].link} target='_blank'>
                {Sdata[0].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/AbPain'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={Sdata[1].imgsrc} />
          <Card.Body>
            <Card.Title>
              {' '}
              <a href={Sdata[1].link} target='_blank'>
                {Sdata[1].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/AnpQ1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={Sdata[2].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[2].link} target='_blank'>
                {Sdata[2].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/BCW1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      {/* Another column */}
      <CardGroup>
        <Card>
          <Card.Img variant='top' src={Sdata[3].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[3].link} target='_blank'>
                {Sdata[3].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/BPM1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={Sdata[4].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[4].link} target='_blank'>
                {Sdata[4].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/CPI1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={Sdata[5].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[5].link} target='_blank'>
                {Sdata[5].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/CPA1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* Another Column */}
      <CardGroup>
        <Card>
          <Card.Img variant='top' src={Sdata[6].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[6].link} target='_blank'>
                {Sdata[6].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/CAF1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={Sdata[7].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[7].link} target='_blank'>
                {Sdata[7].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/D1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={Sdata[8].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[8].link} target='_blank'>
                {Sdata[8].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                <Link
                  to='/EP1'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Answering Question
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default DC
