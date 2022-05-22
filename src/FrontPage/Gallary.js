import React from 'react'
import { Card, CardGroup, Carousel, CarouselItem } from 'react-bootstrap'

function Gallary() {
  return (
    <div style={{ padding: '10px' }}>
      <CardGroup>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/diseasesconditions/images/cards/covid19.jpg?_=56306'
          />
          <Card.Body border='dark'>
            <Card.Title>COVID-18</Card.Title>
            <Card.Text>
              SINCE JANUARY 2020, CDC HAS BEEN LEARNING MORE ABOUT HOW COVID-19
              SPREADS AND AFFECTS PEOPLE AND COMMUNITIES.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/dotw/images/lupus_456px.jpg'
          />
          <Card.Body>
            <Card.Title>LUPUS</Card.Title>
            <Card.Text>
              SYMPTOMS OF THIS DISEASE MAY INCLUDE FATIGUE , JOINT PAIN , SUN
              SENSITIVITY AND SKIN RASHES. LEARN MORE ABOUT HOW TREATMENT CAN
              HELP MAMANGE SYMPTOMS.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/images/features_456px.jpg?_=04949'
          />
          <Card.Body>
            <Card.Title>CDC FEATURES</Card.Title>
            <Card.Text>
              CDC.GOV FEATURES PREVENTION,AWAREMENSS, OR SCREENING FOR DIFFERENT
              PUBLIC HEALTH TOPIC IN SHORTS , USER FRIENDLY ARTICLES.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      {/* Slider Effect  */}
      <div className='midSection'>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.news-medical.net/image.axd?picture=2021%2F10%2Fshutterstock_1483138139-1.jpg'
              alt='Malaria'
            />
            <Carousel.Caption>
              <h5>Malaria</h5>
              <p>
                Diseases that have a sufficiently high global or regional
                prevalence to constitute a significant risk for travellers;
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://s3.amazonaws.com/utep-uploads/wp-content/uploads/uscmph/2017/12/18182358/choleracomeback-1.jpg'
              alt='CHOLERA'
            />
            <Carousel.Caption>
              <h5>CHOLERA</h5>
              <p>
                Information about available vaccines and indications for their
                use by travellers is provided in the pdf entitled
                vaccine-preventable diseases and vaccines besid
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://thenativeantigencompany.com/wp-content/uploads/1970/01/Flavivirus-80.jpg'
              alt='Japanese encephalitis'
            />
            <Carousel.Caption>
              <h5>Japanese encephalitis</h5>
              <p>
                Advice concerning the diseases for which vaccination is
                routinely administered in childhood, i.e. diphtheria, measles,
                mumps and rubella, pertussis, poliomyelitis and tetanus
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* End of Slider Effect */}

      {/* Another column */}
      <CardGroup>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/diseasesconditions/images/cards/covid19.jpg?_=56306'
          />
          <Card.Body>
            <Card.Title>COVID-18</Card.Title>
            <Card.Text>
              SINCE JANUARY 2020, CDC HAS BEEN LEARNING MORE ABOUT HOW COVID-19
              SPREADS AND AFFECTS PEOPLE AND COMMUNITIES.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/dotw/images/lupus_456px.jpg'
          />
          <Card.Body>
            <Card.Title>LUPUS</Card.Title>
            <Card.Text>
              SYMPTOMS OF THIS DISEASE MAY INCLUDE FATIGUE , JOINT PAIN , SUN
              SENSITIVITY AND SKIN RASHES. LEARN MORE ABOUT HOW TREATMENT CAN
              HELP MAMANGE SYMPTOMS.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/images/features_456px.jpg?_=04949'
          />
          <Card.Body>
            <Card.Title>CDC FEATURES</Card.Title>
            <Card.Text>
              CDC.GOV FEATURES PREVENTION,AWAREMENSS, OR SCREENING FOR DIFFERENT
              PUBLIC HEALTH TOPIC IN SHORTS , USER FRIENDLY ARTICLES.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* Another Column */}
      <CardGroup>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/diseasesconditions/images/cards/covid19.jpg?_=56306'
          />
          <Card.Body>
            <Card.Title>COVID-18</Card.Title>
            <Card.Text>
              SINCE JANUARY 2020, CDC HAS BEEN LEARNING MORE ABOUT HOW COVID-19
              SPREADS AND AFFECTS PEOPLE AND COMMUNITIES.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/dotw/images/lupus_456px.jpg'
          />
          <Card.Body>
            <Card.Title>LUPUS</Card.Title>
            <Card.Text>
              SYMPTOMS OF THIS DISEASE MAY INCLUDE FATIGUE , JOINT PAIN , SUN
              SENSITIVITY AND SKIN RASHES. LEARN MORE ABOUT HOW TREATMENT CAN
              HELP MAMANGE SYMPTOMS.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant='top'
            src='https://www.cdc.gov/images/features_456px.jpg?_=04949'
          />
          <Card.Body>
            <Card.Title>CDC FEATURES</Card.Title>
            <Card.Text>
              CDC.GOV FEATURES PREVENTION,AWAREMENSS, OR SCREENING FOR DIFFERENT
              PUBLIC HEALTH TOPIC IN SHORTS , USER FRIENDLY ARTICLES.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default Gallary
