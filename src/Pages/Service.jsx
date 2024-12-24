import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Gallery from "../Components/Gallery";
import CertificationSlider from "../Components/CertificationSlider";
import ContactSection from "../Components/Contact";
import ProjectCard from "../Components/ProjectCard";
import { useParams } from "react-router-dom";
import { fetchServiceData } from "../Api/Api";
import Loader from "../Components/Loader";
import MetaHelmet from "../Components/MetaData";
import AboutSection from "../Components/AboutSection";
import Specialities from "../Components/Specialities";
import CoreValues from "../Components/CoreValues";

const Services = () => {
  const { serviceId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const openModal = (id) => {
    setIsModalOpen(true);
    setTimeout(() => setIsTransitioning(true), 10);
    setModalContent(() => {
      return data?.service?.sub_services?.find((item) => item.title === id);
    });
  };
  console.log(modalContent);
  const closeModal = () => {
    setIsTransitioning(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchServiceData(serviceId);
        setData(result);
        // Now that data is loaded, find the blog
        setIsLoading(false);
        // Set other blogs excluding the selected one
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching service data:", error);
      }
    };

    loadData();
  }, [serviceId]); // Dependency on blogId
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {data && <MetaHelmet metaData={data.meta_data} />}

      {data?.banner && (
        <div className="relative">
          <LazyLoad height={200}>
            <img
              src={data.banner.banner_url}
              alt={"banner"}
              className="w-full h-screen object-cover"
            />
          </LazyLoad>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80"></div>
          {/* Title and description overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start flex-1  w-[85%] mx-auto text-white  ">
            <div className="text-left lg:w-[70%] w-[90%]">
              <p className="text-2xl   capitalize font-figtree">
                What Makes Mach International
              </p>
              <h1 className="text-4xl md:text-7xl capitalize mb-[30px] mt-[20px] font-bold font-playfair ">
                {data.banner.banner_title}
              </h1>
              <div className="text-[20px] mb-10  capitalize font-figtree">
                {data.banner.banner_sub_title}
              </div>
            </div>
          </div>
        </div>
      )}

      {data?.aboutUs && (
        <section className="bg-gray-100 py-24">
          <AboutSection data={data} pageType={'service'} />
        </section>
      )}

      {data?.service && (
        <section className="w-[85%] mx-auto py-24">
          <p className="mb-8 lg:w-[50%] md:w-[70%] mx-auto  text-4xl text-center font-bold font-playfair">
            {data.service.inner_title}
          </p>
          <div className="font-figtree text-center text-gray-800 text-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: data.service.description,
              }}
            />
          </div>
        </section>
      )}

      {data?.service?.sub_services?.length > 0 && (
        <section className="w-[85%] mx-auto pb-24">
          <p className="mb-12 md:w-[50%] mx-auto  text-4xl text-center font-bold font-playfair">
            Our Services
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6">
            {data.service.sub_services.map((service, index) => (
              <div key={index}>
                <div className="relative  ">
                  <img
                    src={service.thumbnail_image_url}
                    alt=""
                    className="w-full h-[380px] object-cover"
                  />

                  <div className="absolute flex flex-col justify-between right-0 top-0 bg-[#FFFFFF] bg-opacity-85 lg:w-[55%] w-[70%] h-[380px] p-6 font-playfair ">
                    <div>
                      <h3 className="mb-6 text-[20px]">{service.title}</h3>
                      <div className="text-lg text-gray-700">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: service.short_description,
                          }}
                        />
                      </div>{" "}
                    </div>

                    <div className="my-3">
                      <button onClick={() => openModal(service.title)}>
                        <span className="border-black border py-2 px-5 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out transform hover:bg-[#104cba] hover:text-white hover:border-[#104cba]  active:opacity-70">
                          READ MORE
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data?.specialities?.length > 0 && (
        <section className="bg-gray-100 py-24">
          <Specialities data={data} />
        </section>
      )}

      {data?.service?.projects?.length > 0 && (
        <section className="w-[85%] mx-auto pb-24 font-playfair">
          <p className="mb-12 md:w-[50%] mx-auto  text-4xl text-center font-bold font-playfair">
            Projects Completed
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6">
            {data.service.projects.map((project, index) => (
              <ProjectCard project={project} />
            ))}
          </div>
        </section>
      )}

      {data?.corevalueContent && (
        <section className="pb-24 bg-gray-100">
          <CoreValues data={data} pageType={'service'} />
        </section>
      )}

      {data?.service?.gallery?.length > 0 && (
        <section className="w-[85%] mx-auto py-24">
          <p className="mb-16  mx-auto  text-4xl text-center  font-bold font-playfair">
            Our Gallery
          </p>

          <Gallery gallery={data.service.gallery} />
        </section>
      )}
      {data?.service?.certifications?.length > 0 && (
        <section className="w-[85%] mx-auto pb-24">
          <p className="mb-16  mx-auto  text-4xl text-center  font-bold font-playfair">
            Licenses and certifications
          </p>

          <CertificationSlider
            Ourcertifications={data.service.certifications}
          />
        </section>
      )}
      {data?.contactUs?.org_chart_url && (
        <section className="w-[85%] mx-auto    ">
          <p className="mb-12  mx-auto  text-4xl text-center  font-bold font-playfair">
            Our Organization Chart
          </p>

          <img
            src={data?.contactUs?.org_chart_url}
            alt=""
            className="w-full mb-6  object-cover"
          />
        </section>
      )}

      {data?.contactUs && (
        <section id="contact-us">
          <ContactSection contact={data.contactUs} />
        </section>
      )}

      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[999] transition-opacity duration-300 ${
            isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative bg-white px-10 pb-10 pt-6 rounded-lg max-w-2xl md:w-full w-[80%] max-h-[80vh] overflow-y-auto transition-transform duration-300 ${
              isTransitioning ? "scale-100" : "scale-50"
            }`}
          >
            <button
              className="absolute top-2 right-2 w-8 h-8  text-black"
              onClick={closeModal}
            >
              <XMarkIcon />
            </button>
            <div className="text-center">
              <h2 className="text-2xl mb-6 font-semibold">
                {modalContent.title}
              </h2>
              <img
                src={modalContent.thumbnail_image_url}
                alt=""
                className="h-[200px] w-full rounded-lg object-cover"
              />
              <div className="text-lg text-gray-800 mt-4 font-playfair">
                <div
                  dangerouslySetInnerHTML={{
                    __html: modalContent.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
