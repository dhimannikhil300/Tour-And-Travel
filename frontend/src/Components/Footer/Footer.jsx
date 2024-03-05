import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  const qucikLinks = [
    {
      id:1,
      path: '/home',
      display: 'Home',
    },
    {
      id:2,
      path: '/about',
      display: 'About',
    },
    {
      id:3,
      path: '/tours',
      display: 'Tours',
    },
  ];
  const qucikLinks2 = [
    {
      id:1,
      path: '/gallery',
      display: 'Gallery',
    },
    {
      id:2,
      path: '/login',
      display: 'Login',
    },
    {
      id:3,
      path: '/register',
      display: 'Register',
    },
  ];

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, sint.</p>
              <div className="social__links d-flex  align-items-center gap-4 ">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-line"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-facebook-circle-line"></i>
                  </Link>
                  <Link to="#">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                qucikLinks.map( (item)=>(
                  <ListGroupItem key={item.id} className='ps-0 border-0 '>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                qucikLinks2.map( (item)=>(
                  <ListGroupItem key={item.id} className='ps-0 border-0 '>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 '>
                    <h6 className="mb-0 d-flex align-items-center gap-2 ">
                      <span>
                        <i class="ri-phone-fill"></i>
                        Phone:
                      </span>
                      <p className='mb-0'>
                        +91 7494938207
                      </p>
                    </h6>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 '>
                    <h6 className="mb-0 d-flex align-items-center gap-2 ">
                      <span>
                        <i class="ri-map-pin-line"></i>
                        Address:
                      </span>
                      <p className='mb-0'>
                        TDI City, Mohali
                      </p>
                    </h6>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 '>
                    <h6 className="mb-0 d-flex align-items-center gap-2 ">
                      <span>
                        <i class="ri-mail-line"></i>
                        Email:
                      </span>
                      <p className='mb-0'>
                        dhimannikhil300@gmail.com
                      </p>
                    </h6>
                  </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">Copyright {year}, design and develop by Nikhil. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer