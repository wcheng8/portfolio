import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import me1 from "../images/ProfileImg_1.jpg"
import me2 from "../images/ProfileImg_2.jpg"

const ImageCarousels = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={me1} alt="Me 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={me2} alt="Me 2" />
      </Carousel.Item>
    </Carousel>
  )
}

export default ImageCarousels
