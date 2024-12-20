import React from "react";
import insta from "../assets/insta.png";
import linkdin from "../assets/linkdin.png";
import x from "../assets/twitter.png";
import fb from "../assets/fb.png";
import logo from "../assets/logo.png";
import footerbg from "../assets/footerbg.png";
import { HashLink as NavLink } from "react-router-hash-link";

const Footer = ({ data, menu }) => {
  const BaseLinks = [
    { name: "HOME", link: "/" },
    { name: "GROUP", link: "/#about-us" },
  ];

  const serviceLinks = menu.map((item) => ({
    name: item.title,
    link: `/services/${item.short_url}`,
  }));
  const contactLink = { name: "CONTACT US", link: "/#contact-us" };

  const Links = [...BaseLinks, ...serviceLinks, contactLink];

  return (
    <footer className="relative  text-black">
      {/* Top Section */}
      <div className="w-[85%]  mx-auto grid grid-cols-1 md:justify-items-center md:grid-cols-3 gap-8   pt-12 pb-8">
        {/* Logo and Social Media */}
        <div>
          <img
            src={logo}
            alt=""
            className="w-[250px] h-[80px] object-contain"
          />
          <p className="text-lg font-figtree my-6">{data?.footer_text}</p>
          <div className="flex space-x-4">
            <a
              href={data?.facebook_url}
              target="_blank"
              className="   flex items-center justify-center   text-[#00235a]  "
            >
              <img src={fb} alt="" />
            </a>
            <a
              href={data?.instagram_url}
              target="_blank"
              className="w-10 h-10 p-2  flex items-center justify-center   text-[#00235a]  "
            >
              <img src={insta} alt="" />
            </a>
            <a
              href={data?.twitter_url}
              target="_blank"
              className="w-10 h-10  p-2  flex items-center justify-center   text-[#00235a]  "
            >
              <img src={x} alt="" />
            </a>
            <a
              href={data?.linkedin_url}
              target="_blank"
              className="w-10 h-10  p-2 flex items-center justify-center   text-[#00235a]  "
            >
              <img src={linkdin} alt="" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base font-figtree">
            {Links.map((link, index) => (
              <li key={index}>
                <NavLink
                  smooth
                  to={link.link} // e.g., "/about#section-id"
                  className="uppercase"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-4">Contact Us</h3>
          <p className="text-lg font-figtree">
            {data?.address} <br />
            <span className="font-bold">Mail:</span>{" "}
            <a
              href={`mailto:${data?.email_id}`}
              className="text-blue-500 hover:underline"
            >
              {data?.email_id}
            </a>{" "}
            <br />
            <span className="font-bold">Phone:</span> {data?.phone_number}
          </p>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="border-t-[1px]">
        <div className=" w-[85%] font-figtree py-4 mx-auto 6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-lg  ">
            © {new Date().getFullYear()} {data?.copyright_text}
          </p>
        </div>
      </div>

      <img
        src={footerbg}
        alt=""
        className="grayscale rotate-180 w-full absolute bottom-0 -z-10"
      />
    </footer>
  );
};

export default Footer;
