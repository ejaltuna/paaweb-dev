// import React from 'react'

import PropTypes from 'prop-types'
// import { Carousel } from 'react-bootstrap'
import Carousel from 'react-grid-carousel'
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
 

const images = [
  'https://a0.muscache.com/im/pictures/37e211bb-6ef8-44b6-8022-7427e7a241a5.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/c571ab10-d896-4095-b4be-4e57aa8b43cd.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/54b3eadc-e503-41da-a9fe-ba10d20d9aa6.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/b2d713c1-1304-4363-a34f-19fc3c94bcd5.jpg?aki_policy=large',
  'https://a0.muscache.com/im/pictures/6514fab6-a3c4-47b3-8f11-a736d6d3ff77.jpg?aki_policy=large'
]
 
 

const Bannner = () => {
  const [isHover, setIsHover] = useState(false)

  const handleHover = useCallback(() => {
    setIsHover(state => !state)
  }, [])
  return (
    <>
      <Carousel cols={6} rows={1} gap={10}  loop>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=4" />
          {/* anything you want to show in the grid */}
        </Carousel.Item> 
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=5" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=6" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=7" />
        </Carousel.Item>
      </Carousel>


      <Container>
      <h2 align="center">
        Use{' '}
        <span
          css={`
            background: lightgray;
          `}
        >
          &nbsp;react-grid-carousel&nbsp;
        </span>{' '}
        to build image carousel
      </h2>
      <Row onMouseLeave={handleHover} onMouseEnter={handleHover}>
        
          <Carousel cols={4} hideArrow={!isHover} showDots>
            {images.map((img, i) => (
              <Carousel.Item key={i}>
                <img src={img} width="100%" height="200px" />
              </Carousel.Item>
            ))}
          </Carousel>
        
     
      </Row> 
      
    </Container>

    
    </>
    // <div> 
    //   <Carousel variant="dark">
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="https://picsum.photos/400/280?random=0"
    //         alt="First slide"
    //       />
    //       <Carousel.Caption>
    //         <h5>First slide label</h5>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="https://picsum.photos/400/280?random=1"
    //         alt="Second slide"
    //       />
    //       <Carousel.Caption>
    //         <h5>Second slide label</h5>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="https://picsum.photos/400/280?random=2"
    //         alt="Third slide"
    //       />
    //       <Carousel.Caption>
    //         <h5>Third slide label</h5>
    //         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
  )
}


export default Bannner