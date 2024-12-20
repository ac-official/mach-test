import React from 'react'

const Specialities = ({data}) => {
  return (
    <div>
       <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[50%] w-[85%] mb-16">
            {data?.specialityContent?.title}
          </h2>
          <div className="w-[85%] mx-auto flex justify-between items-center md:flex-row flex-col  gap-10 about-style-four ">
            <div className="md:w-1/2">
              <img
                src={data?.specialityContent?.image_url}
                alt="Business Representation"
                className="lg:w-[85%] h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-1/2">
              <ul className="font-figtree text-gray-800">
                {data?.specialities?.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Specialities
