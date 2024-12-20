import React, { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from "react-lazyload";
import Button from "../Components/Button";
import CountUp, { useCountUp } from "react-countup";
import ServiceCard from "../Components/ServiceCard";
import ContactSection from "../Components/Contact";
import AddressCard from "../Components/AddressCard";
import Loader from "../Components/Loader";
import { fetchHomeData } from "../Api/Api";
import MetaHelmet from "../Components/MetaData";
import AboutSection from "../Components/AboutSection";
import CoreValues from "../Components/CoreValues";
import Specialities from "../Components/Specialities";

const Home = () => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchHomeData();

        setData(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching home data:", error);
      }
    };

    loadData();
  }, []);

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
 

  function splitIntoTwoWords(input) {
    // Check if the input contains a space
    if (input.includes(" ")) {
      return input.split(" ", 2); // Split into an array of two words
    }
    return [input]; // Return the input as an array with a single word if no space
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {data && <MetaHelmet metaData={data.meta_data} />}
      {data?.homeBanner?.length > 0 && (
        <div className="carousel-wrapper relative" id="home">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            stopOnHover={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            interval={3000}
            swipeable={false}
            emulateTouch={true}
          >
            {data.homeBanner.map((banner, index) => (
              <div key={banner.id} className="relative">
                <LazyLoad height={200}>
                  <img
                    src={banner.banner_url}
                    alt={banner.title}
                    className="w-full h-screen object-cover"
                  />
                </LazyLoad>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80"></div>
                {/* Title and description overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-start flex-1  w-[85%] mx-auto text-white ">
                  <div className="text-left lg:w-[70%] w-[90%]">
                    <p className="text-[20px]   capitalize font-figtree">
                      {banner.sub_title}
                    </p>
                    <h1 className="text-4xl md:text-7xl capitalize mb-[30px] mt-[20px] font-bold font-playfair ">
                      {banner.title}
                    </h1>
                    <div
                      className="text-[20px] mb-10  capitalize font-figtree"
                      dangerouslySetInnerHTML={{
                        __html: banner.description,
                      }}
                    />

                    <Button text={banner.button_text} to={banner.button_url} />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {data?.aboutUs && (
        <section className="bg-gray-100 py-24" id="about-us">
          <AboutSection data={data}/>
        </section>
      )}

      {data?.missionVisionValue && (
        <section className=" w-[85%] mx-auto py-24">
          <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[50%] mb-16">
            {data.missionVisionValue.main_title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3   ">
            <div className="flex justify-center flex-col items-center pt-3   hover:bg-[#eaf3ff] hover:shadow-lg transition duration-300">
              <img
                src={data.missionVisionValue.mission_image_url}
                alt=""
                className="w-[80px] h-[80px] object-cover"
              />

              <h2 className="text-2xl font-bold font-figtree mt-6 uppercase">
                {splitIntoTwoWords(data.missionVisionValue.mission_title)[0]}{" "}
                <span className="text-[#104cba]">
                  {splitIntoTwoWords(data.missionVisionValue.mission_title)[1]}
                </span>
              </h2>
              <div className="flex items-center justify-center  py-6 ">
                <div className="flex items-center space-x-1">
                  <div className="border-t border-[#104cba] w-20"></div>
                  <span className="text-[#104cba] text-lg">★</span>
                  <div className="border-t border-[#104cba] w-20"></div>
                </div>
              </div>

              <img
                src={data.missionVisionValue.mission_image_url}
                alt=""
                className="w-[30px] h-[30px] object-cover"
              />
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 px-8 py-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.missionVisionValue.mission,
                  }}
                />
              </p>
            </div>

            <div className="flex justify-center flex-col items-center pt-3   hover:bg-[#eaf3ff] hover:shadow-lg transition duration-300">
              <div className="w-full flex justify-center flex-col items-center lg:border-x-2 border-gray-500">
                <img
                  src={data.missionVisionValue.vision_image_url}
                  alt=""
                  className="w-[90px] h-[90px] object-cover "
                />

                <h2 className="text-2xl font-bold font-figtree mt-6 uppercase">
                  {splitIntoTwoWords(data.missionVisionValue.vision_title)[0]}{" "}
                  <span className="text-[#104cba]">
                    {splitIntoTwoWords(data.missionVisionValue.vision_title)[1]}
                  </span>
                </h2>
              </div>
              <div className="flex items-center justify-center  py-6 ">
                <div className="flex items-center space-x-1">
                  <div className="border-t border-[#104cba] w-20"></div>
                  <span className="text-[#104cba] text-lg">★</span>
                  <div className="border-t border-[#104cba] w-20"></div>
                </div>
              </div>
              <div className="w-full flex justify-center flex-col items-center lg:border-x-2 border-gray-500">
                <img
                  src={data.missionVisionValue.vision_image_url}
                  alt=""
                  className="w-[30px] h-[30px] object-cover"
                />
              </div>
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 px-8 py-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.missionVisionValue.vision,
                  }}
                />
              </p>
            </div>

            <div className="flex justify-center flex-col items-center pt-3   hover:bg-[#eaf3ff] hover:shadow-lg transition duration-300">
              <img
                src={data.missionVisionValue.our_value_image_url}
                alt=""
                className="w-[90px] h-[90px] object-cover"
              />

              <h2 className="text-2xl font-bold font-figtree mt-6 uppercase">
                {splitIntoTwoWords(data.missionVisionValue.our_values_title)[0]}{" "}
                <span className="text-[#104cba]">
                  {
                    splitIntoTwoWords(
                      data.missionVisionValue.our_values_title
                    )[1]
                  }
                </span>
              </h2>
              <div className="flex items-center justify-center  py-6 ">
                <div className="flex items-center space-x-1">
                  <div className="border-t border-[#104cba] w-20"></div>
                  <span className="text-[#104cba] text-lg">★</span>
                  <div className="border-t border-[#104cba] w-20"></div>
                </div>
              </div>

              <img
                src={data.missionVisionValue.our_value_image_url}
                alt=""
                className="w-[30px] h-[30px] object-cover"
              />
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 px-8 py-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.missionVisionValue.our_values,
                  }}
                />
              </p>
            </div>
          </div>
        </section>
      )}

      {data?.specialities?.length > 0 && (
        <section className="bg-gray-100 py-24">
          <Specialities data={data}/>
         
        </section>
      )}

      {data?.services?.length > 0 && (
        <section className="lg:w-[80%] w-[85%] mx-auto py-24">
          <h2 className=" text-4xl font-bold font-playfair text-center mx-auto lg:w-[50%] w-[85%] mb-16">
            {data?.siteData?.home_service_heading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:gap-20 gap-6">
            {data?.services?.map((item) => (
              <ServiceCard
                key={item.id}
                src={item.thumbnail_image_url}
                title={item.title}
                desc={item.short_description}
                id={item.short_url}
              />
            ))}
          </div>
        </section>
      )}

      {data?.corevalueContent && (
        <section className="pb-24 bg-gray-100" id="core-value">
          <CoreValues data={data}/>
        </section>
      )}
      {data?.contactUs && (
        <section id="contact-us">
          <ContactSection contact={data.contactUs} />
        </section>
      )}

      <section className="w-[85%] mx-auto pt-20  ">
        
        <img
          src={data?.contactUs?.world_map_url}
          alt=""
          className="w-full mb-6  object-cover"
        />
      </section>
      {data?.branches?.length > 0 && (
        <section className="w-[85%] mx-auto pb-24">
          <AddressCard addresses={data.branches} />
        </section>
      )}
      {data?.contactUs && (
        <section>
          <div className="relative w-full h-[450px]">
            {/* Embedded Google Map */}
            <iframe
              src={data.contactUs.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>

            {/* Address Card */}
            <div className="absolute md:top-4 md:right-4 bottom-3 h-min bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <h2 className="text-2xl font-playfair font-bold mb-2">
                Head Office
              </h2>
              <div className="font-figtree text-gray-800">
                <p>{data.contactUs.head_office_title}</p>
                <p>{data.contactUs.head_office_address}</p>

                <p>
                  <span className="font-bold">Ph:</span>{" "}
                  {data.contactUs.head_office_phone}
                </p>
                <p>
                  <span className="font-bold">Mob:</span>{" "}
                  {data.contactUs.head_office_mobile}
                </p>
                <p>
                  <span className="font-bold">Mail:</span>{" "}
                  <a
                    href={`mailto:${data.contactUs.head_office_email_id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {data.contactUs.head_office_email_id}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
