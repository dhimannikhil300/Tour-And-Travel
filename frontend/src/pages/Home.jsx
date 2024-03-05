import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'

import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery'
import Testimonail from '../Components/Testimonail/Testimonail'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex  align-items-center '>
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941787/tourAndTravel/a7cs8hdcwkrkoi6e6qsg.png`} alt='' />
                </div>
                <h1>Traveling opens the door to creating {" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo rerum unde ratione, non voluptas id sequi blanditiis qui in quos fugit laudantium aperiam. Deserunt praesentium hic dolorem perferendis ad cupiditate dolores!
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className='hero__img-box'>
                <img alt='' src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941784/tourAndTravel/ebikk1c0qvuf77zvafmj.jpg`} />
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box hero__video-box mt-4'>
                <video src={`https://res.cloudinary.com/dgrefesap/video/upload/v1708941785/tourAndTravel/pnl00ipdw9pimdt8c0dw.mp4`} loop muted autoPlay/>
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box mt-5'>
                <img alt='' src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941784/tourAndTravel/ik9ingkorjm6okvynp8v.jpg`} />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We Offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"}/>
              <h2 className='featured__tour-title'>Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />
                <h2>With our all experience <br /> we will serve you</h2>
                <p>
                  Lorem ipsum dolor sit amet, consecterure adipisicing elit.
                  <br />
                  Quas aliquam, hic tempora inventore suscipit unde.
                </p>
                
              </div>

              <div className="counter__wrapper d-flex align-items-center  gap-5 ">
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='experience__img'>
                <img src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941782/tourAndTravel/nhfe2p5b7u5zasefds0y.png`} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial__title">What our fan say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonail />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  )
}

export default Home