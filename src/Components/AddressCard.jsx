import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AddressCard = ({ addresses }) => {
  const settings = {
    dots: false,
    infinite: false,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 900,
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
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {addresses?.map((item, index) => (
          <div key={item.id} className="px-3">
            {" "}
            {/* Add spacing between cards */}
            <div className="relative  w-full h-[220px] rounded-lg overflow-hidden border shadow-lg border-gray-300">
              {/* Left Section - Address */}
              <div className="  p-6 bg-white">
                <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
                  {item.title}
                </h2>
                <p className="text-lg font-figtree w-[70%] text-gray-700 whitespace-pre-line">
                  {item.sub_title}
                </p>
              </div>
              {/* Right Section - Flag */}
              <img
                src={item.image_url}
                alt=""
                className="w-[130px]    object-contain absolute top-0 right-0"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AddressCard;
