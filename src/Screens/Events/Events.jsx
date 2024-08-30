import React from "react";
import EventSlider from "./Slider/EventSlider.jsx";

const Events = () => {
  return (
    <div className="py-8 px-5 md:pr-0  md:pl-10  ">
      {/* <h1 className="text-3xl pb-4 px-2 font-bold lg:text-5xl lg:px-3 lg:pb-7">Events</h1> */}
      <EventSlider />
    </div>
  );
};

export default Events;
