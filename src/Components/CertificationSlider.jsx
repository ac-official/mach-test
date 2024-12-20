import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlideshowLightbox } from "lightbox.js-react";
const CertificationSlider = ({ Ourcertifications }) => {
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Enables centering
    centerPadding: "50px", // Adjust padding as needed
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
        {Ourcertifications?.map((item, index) => (
          <div key={index} className="px-3  ">
            <SlideshowLightbox
              className="w-full h-full "
              modalClose={"clickOutside"}
            >
              <img src={item.image_url} alt="" />
            </SlideshowLightbox>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificationSlider;
