import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ src, title, desc, id }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      {/* Image */}

      <div>
        <img
          src={src}
          alt="Service"
          className="w-full lg:h-[400px] h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Title (Always Visible) */}
      <div className="absolute top-6  right-10 w-full text-center bg-slate-100 text-black text-2xl font-bold font-playfair  px-6 py-2  rounded-lg   z-10">
        {title}
      </div>

      {/* Description (Visible on Hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:p-10 p-4">
        <p className="text-white py-6 text-lg font-figtree">
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          />
        </p>

        <Button text={"View More"} to={`/services/${id}`} color={"white"} />
      </div>
    </div>
  );
};

export default ServiceCard;
