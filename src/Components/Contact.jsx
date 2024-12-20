import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import contactbg from "../assets/contactbg.jpg";
import CountUp, { useCountUp } from "react-countup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendFormData } from "../Api/Api";
const ContactSection = ({ contact }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email_id: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string().required("Number is required"),

    message: Yup.string().required("Message is required"),
  });

  const initialValues = { name: "", email_id: "", message: "", mobile: "" };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Form 1 values:", values);

      // Send the form data to the server
      const result = await sendFormData(values);

      // Display success toast
      toast.success(result);

      // Reset the form
      resetForm();
    } catch (error) {
      // Display error toast
      toast.error("Form submission failed!");
      console.error("Form submission error:", error);
    }
  };

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div
      className="relative bg-cover bg-center  h-max flex items-center justify-center"
      style={{
        backgroundImage: `url(${contact?.contact_form_bg_image_url})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10   w-[85%] mx-auto  flex flex-col lg:flex-row items-center lg:items-start gap-20 py-24">
        {/* Left Section */}
        <div className="text-white lg:w-[60%]">
          <h2 className="text-4xl font-bold font-playfair mb-10">
            {contact?.contact_form_main_title}
          </h2>
          <h4 className="text-xl font-semibold   font-figtree mb-6">
            {contact?.contact_form_title}
          </h4>
          <p className="text-base mb-6">
            <div
              dangerouslySetInnerHTML={{
                __html: contact?.contact_form_description,
              }}
            />
          </p>
          <h4 className="text-xl font-semibold   font-figtree mb-6">
            {contact?.contact_form_alternate_title}
          </h4>
          <p className="text-base mb-6">
            <div
              dangerouslySetInnerHTML={{
                __html: contact?.contact_form_alternate_description,
              }}
            />
          </p>

          <div className="flex items-center justify-start gap-4 py-8">
            <div className="text-center border-e-[1px] pe-4">
              <h2 className="text-5xl font-bold font-playfair text-[#104cba]">
                {" "}
                <CountUp end={contact?.counter} duration={2} enableScrollSpy />
                {contact?.counter_symbol}
              </h2>
              <p className="text-white font-figtree text-base">
                {contact?.counter_title}
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold font-playfair text-[#104cba]">
                {" "}
                <CountUp
                  end={contact?.second_counter}
                  duration={2}
                  enableScrollSpy
                />
                {contact?.second_counter_symbol}
              </h2>
              <p className="text-white font-figtree text-base">
                {contact?.second_counter_title}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className=" lg:p-6 rounded-lg shadow-lg lg:w-[40%]  w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 font-figtree">
                <div>
                  <label className="block text-white mb-2" htmlFor="name">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="w-full p-3 rounded-lg   text-white border  bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="email">
                    Email
                  </label>
                  <Field
                    name="email_id"
                    type="email"
                    className="w-full p-3 rounded-lg   text-white border   bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="mobile">
                    Mobile
                  </label>
                  <Field
                    name="mobile"
                    type="text"
                    className="w-full p-3 rounded-lg   text-white border   bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="message">
                    Message
                  </label>
                  <Field
                    name="message"
                    as="textarea"
                    rows="3"
                    className="w-full p-3 rounded-lg   text-white border  bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#104cba] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                  disabled={isSubmitting}
                >
                  SUBMIT
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactSection;
