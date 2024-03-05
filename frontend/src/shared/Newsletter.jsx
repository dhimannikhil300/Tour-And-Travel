import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Susbcribe now to get usefull traveling infomation.</h2>
                        <div className="newsletter__input">
                            <input type='email' placeholder='Enter your email' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quas?
                        </p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src='https://res.cloudinary.com/dgrefesap/image/upload/v1708941785/tourAndTravel/vnsshpmtsfiensurawyt.png' alt=''/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter