import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../list.json";
import Card from "./Card";
function CourseSlider() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  //setting for responsive slider
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <h1 className="text-xl font-bold m-10 flex justify-start w-xl text-orange-500 animate-pulse ">
          Free Courses 🎉✨
        </h1>
        <p className="text-md font-light flex m-3">
          Unlock new skills with free courses! Dive into programming, data
          science, marketing, and more, all at no cost. Learn from top
          institutions, enhance your resume, and stay ahead in your career.
          Flexible, engaging, and accessible anytime—start your journey to
          success today with our free courses!
        </p>
      </div>
      {/* cards or slider */}
      <div className="slider-container m-10">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CourseSlider;
