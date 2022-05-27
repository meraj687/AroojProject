import React from 'react'
import { Button, Col, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card, CardGroup, Carousel, CarouselItem } from 'react-bootstrap'
import '../DiseaseAndComdition/DC.css'
import Sdata from '../Sdata'
function CardDC() {
  return (
    <div>
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
                Click Me
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={Sdata[1].imgsrc} />
          <Card.Body border='dark'>
            <Card.Title>
              {' '}
              <a href={Sdata[1].link} target='_blank'>
                {Sdata[1].title}
              </a>{' '}
            </Card.Title>
            <Card.Text>
              <button type='submit' className='button-30'>
                Click Me
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
                Click Me
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
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
                Click Me
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
                Click Me
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
                Click Me
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default CardDC
