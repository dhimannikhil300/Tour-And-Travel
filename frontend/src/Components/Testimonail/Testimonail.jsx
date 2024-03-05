import React from 'react'
import Slider from 'react-slick'
const ava01 = 'https://res.cloudinary.com/dgrefesap/image/upload/v1708941782/tourAndTravel/tteyvfmwlnajrilh3uke.jpg'
const ava02 = 'https://res.cloudinary.com/dgrefesap/image/upload/v1708941782/tourAndTravel/f69io1wvrfik7inji7ds.jpg'
const ava03 = 'https://res.cloudinary.com/dgrefesap/image/upload/v1708941782/tourAndTravel/m6pk2aadfxkyxuvbp165.jpg'

const Testimonail = () => {
    const settings = {
        dots: true,
        infinity: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScoll:1,
                    infinity: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScoll:1,
                },
            }
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima natus pariatur aliquid nihil harum voluptatem ducimus incidunt sint aperiam placeat?</p>
            <div className='d-flex align-items-center  gap-4 mt-3 '>
                <img src={ava01} alt='' className='w-25 h-25 rounded-2 ' />
                <div>
                    <h6 className='mb-0 mt-3'>John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima natus pariatur aliquid nihil harum voluptatem ducimus incidunt sint aperiam placeat?</p>
            <div className='d-flex align-items-center  gap-4 mt-3 '>
                <img src={ava02} alt='' className='w-25 h-25 rounded-2 ' />
                <div>
                    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima natus pariatur aliquid nihil harum voluptatem ducimus incidunt sint aperiam placeat?</p>
            <div className='d-flex align-items-center  gap-4 mt-3 '>
                <img src={ava03} alt='' className='w-25 h-25 rounded-2 ' />
                <div>
                    <h6 className='mb-0 mt-3'>John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonail