import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardDemo } from "../../../ui-components/CardwithGig";
import eventsData from "../../../data/EventData";
import './Slide.css'
const EventSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="event-slider-container">
      <Slider {...settings} className="">
        {eventsData.map((event, index) => (
          <CardDemo className="event-slide"
            key={index}
            name={event.name}
            description={event.description}
            image={event.image}
            hoverGif={event.hoverGif}
          />
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;
