import React from 'react'
import CountUp, { useCountUp } from "react-countup";
const AboutSection = ({data, pageType}) => {
    useCountUp({
        ref: "counter",
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
  return (
    <div className="w-[85%] mx-auto  ">
    <div className="flex flex-col lg:flex-row items-center md:items-start gap-14">
      {/* Left Section */}
      <div className={`${pageType!="service" ? 'lg:w-1/2':'lg:w-full'} about-style-four`} >
        <h2 className="text-2xl font-bold font-figtree text-[#104cba]">
          {data.aboutUs.title}
        </h2>
        <p className="my-8  text-4xl font-bold font-playfair">
          {data.aboutUs.sub_title}
        </p>
        <p className="font-figtree text-gray-800 text-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: data.aboutUs.description,
            }}
          />
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: data.aboutUs.alternate_description,
          }}
        />
      </div>

      {/* Right Section */}
      {!pageType && (<div className="lg:w-1/2 ">
          <div className="lg:w-[80%] w-full ml-auto relative">
            <img
              src={data.aboutUs.key_feature_bg_image_url}
              alt="Business Representation"
              className="w-full md:h-[550px] h-[400px]  object-cover rounded-lg shadow-lg "
            />

            <div className="mt-12  font-figtree w-[80%]  grid  grid-cols-2 absolute bottom-[50px] left-1/2 transform -translate-x-1/2 gap-6   text-center">
              {/* Statistic Item */}
              {data?.keyFeatures?.map((item) => (
                <div
                  className="bg-white bg-opacity-20 backdrop-blur-md  rounded-lg p-5"
                  key={item.id}
                >
                  <h3 className="text-4xl font-bold mb-2  text-white">
                    <CountUp
                      end={item.count}
                      duration={2}
                      enableScrollSpy
                    />
                    {item.symbol}
                  </h3>
                  <p className="text-white text-lg">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>)}
        
    </div>
  </div>
  )
}

export default AboutSection
