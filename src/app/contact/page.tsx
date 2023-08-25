import Hero from "@/components/Hero";
import React from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import ContactForm from "@/components/ContactForm";

// import images
import heroImage from "/public/images/heroImage.webp";

function contact() {
  return (
    <>
      <Hero image={heroImage}>
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Kontakta Oss
        </h1>
      </Hero>

      {/* Form Wrapper */}
      <div className="flex flex-row-reverse w-full text-xl px-24 ">
        {/* Form */}

        <ContactForm />

        {/* Image with info */}
        <div className=" bg-[url('/images/stuxisAvlang.webp')] w-1/2 bg-cover bg-repeat bg-center z-10  relative p-7 flex flex-col items-center justify-center before:-z-10 before:w-full before:h-full before:block before:absolute before:bg-[rgb(0,0,0,0.7)] text-white">
          {/* Adress */}
          <div>
            <div className="flex items-center text-left gap-4 py-6">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-white text-2xl"
              />
              <div className="">
                <p>Adress</p>
                <p>Stuxbergsgatan 5B, 412 62 Göteborg</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center text-left gap-4 py-6 ">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-2xl"
              />
              <div className="">
                <p>Email</p>
                <a
                  className="font-bold underline decoration-light-comfy-red decoration-3"
                  href="mailto:stuxisparklek@gmail.com">
                  stuxisparklek@gmail.com
                </a>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center text-left gap-4 py-6">
              <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
              <div className="">
                <p>Telefon till styrelse</p>
                <p>(+46) 709 49 49 59</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default contact;
