import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

const weatherImg = 'https://res.cloudinary.com/dgrefesap/image/upload/v1708941786/tourAndTravel/pcghtik5kghpi0c4z0vs.png'
const customizationImg = 'https://res.cloudinary.com/dgrefesap/image/upload/v1708941781/tourAndTravel/iqc8rtpwb9u0bukc06bd.png'
const guideImg = 'https://res.cloudinary.com/dgrefesap/image/upload/v1708941784/tourAndTravel/uhdhvrey8ayqsrvfyn9t.png'

const ServiceList = () => {

    const servidesData = [
        {
            id: 1,
            imgUrl : weatherImg,
            title: "Calculation Weather",
            desc: "lorem Ipsum dolor sit amet, consectetur",
        },
        {
            id: 2,
            imgUrl : guideImg,
            title: "Best Tour Guide",
            desc: "lorem Ipsum dolor sit amet, consectetur",
        },
        {
            id: 3,
            imgUrl : customizationImg,
            title: "Customization",
            desc: "lorem Ipsum dolor sit amet, consectetur",
        },
    ]

  return (
    <>
        {
            servidesData.map((item)=>(
                <Col lg='3' md='6' sm='12' className='mb-4' key={item.id}>
                    <ServiceCard item={item} />
                </Col>
            ))
        }
    </>
  )
}

export default ServiceList