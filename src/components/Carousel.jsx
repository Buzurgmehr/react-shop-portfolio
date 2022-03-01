import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../styles/Carousel.scss'
import { Data } from './DataCarousel'
const Carousel = ({ slides }) => {
    const [currentSlide,
        setCurrentSlide] = useState(0)
    const length = slides.length
    return (
        <div className="carousel-main">
            <div className="arrows">
                <ArrowBackIosIcon className="left" onClick={() => setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide -1)} />
                <ArrowForwardIosIcon className="right" onClick={() => setCurrentSlide(currentSlide === length -1 ? 0 : currentSlide + 1)}/>
            </div>
            {Data.map((slide, index) => {
                return (
                <div className={index === currentSlide ? 'carousel active' : 'carousel'}>
                    {index === currentSlide && (
                        <div className={slide.className}>
                            <div className="texts">
                                <p className='slides-title'>{slide.title}</p>
                                <p>{ slide.text}</p>
                            </div>
                            <img src={slide.image} alt="" />
                        </div>
                    )}
                </div>
            )})}
        </div>
    )
}

export default Carousel