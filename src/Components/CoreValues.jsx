import React from 'react'
import corebg from "../assets/business.jpg";
const CoreValues = (
    {data}
) => {
  return (
    <div>
       <div className="relative">
            <img
              src={data.corevalueContent.image_url}
              alt=""
              className="w-full h-[450px]  object-cover"
            />{" "}
            <div
              className="md:w-[75%] w-[85%] bg-white rounded-lg shadow-md absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 z-10"
              style={{
                backgroundImage: `url(${corebg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className=" text-4xl font-bold font-playfair text-center   py-10">
                {data.corevalueContent.title}
              </h2>
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 md:px-16 px-6 pb-10">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.corevalueContent.description,
                  }}
                />
              </p>
            </div>
          </div>
          <div className="w-[85%] mx-auto mt-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2    w-[70%] mx-auto gap-y-10 gap-x-20   ">
              {data.coreValue?.map((value, index) => (
                <div key={value.id} className="flex items-start">
                  {/* Icon */}
                  <div className="text-2xl text-[#104cba] mr-4">➤</div>
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">
                      {value.title}
                    </h3>
                     
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default CoreValues
