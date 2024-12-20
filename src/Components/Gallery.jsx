import React, { useState } from "react";

import b1 from "../assets/service1.png";
import b2 from "../assets/service2.png";
import b3 from "../assets/service3.png";
import b4 from "../assets/service4.png";
import b5 from "../assets/service5.png";
import b6 from "../assets/service6.png";
import { SlideshowLightbox } from "lightbox.js-react";
 

const Gallery = ({ gallery }) => {
  return (
    <div>
       

      {/* Image Grid with Lightbox */}
      <SlideshowLightbox
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        lightboxIdentifier="gallery-lightbox"
        showThumbnails
        modalClose={"clickOutside"}
        framework="tailwind" // Optional: Use Tailwind classes for styling
        images={gallery?.map((image) => image.image_url)} // Pass the array of image URLs
      >
        {gallery?.map((image, imageIndex) => (
          <div
            key={imageIndex}
            className="photo-card h-[350px] rounded-lg group overflow-hidden"
          >
            <img
              className=" object-cover w-full h-full shadow-md  transition-transform duration-500 group-hover:scale-110 "
              src={image.image_url}
              alt={image.id}
              data-lightboxjs="gallery-lightbox" // Identifier for Lightbox images
            />
          </div>
        ))}
      </SlideshowLightbox>
    </div>
  );
};

export default Gallery;
