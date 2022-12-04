import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Banner = ({banner}) => {
  return (
    <Carousel fade>
          {
              banner.end.map((item, index) => (
                  <Carousel.Item key={index} id="banner" intervel={1000} keyboard={true}>
                      <img src={item.image} alt={`${index} Banner`} className="d-block w-100" id="bannerImage"/>
                  <Carousel.Caption>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                          <p>{item.source}</p>
                  </Carousel.Caption>
                  </Carousel.Item>
              ))
         }
  </Carousel>
  )
}

export default Banner