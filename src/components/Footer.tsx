import React from "react";
import Image from "next/image";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-12 flex justify-between">
      {/* Website image */}
      <div className="w-1/3 text-center flex flex-col gap-6 justify-enter items-center">
        <Image
          src="/Stuxis_Logo.png"
          height={100}
          width={100}
          alt="/"
          className="flex justify-center items-center"
        />
        <a
          href="https://facebook.com/stuxis"
          className="outline outline-offset-8 rounded-2xl outline-2 text-comfy-blue"
          target="_blank">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-lg text-comfy-blue"
          />
        </a>
        <a
          href="https://www.instagram.com/stuxbergsgatans_fritidspark/"
          className="outline outline-offset-8 rounded-2xl outline-2 text-comfy-blue"
          target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-lg text-comfy-blue"
          />
        </a>
      </div>

      {/* Get in touch */}
      <div className="w-1/3 text-center">
        <h1 className="font-bold text-2xl text-comfy-blue  underline decoration-light-comfy-red decoration-4  ">
          Kom i kontakt med oss
        </h1>
        <div className="flex items-center justify-center text-left pt-2 gap-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-comfy-blue text-2xl"
          />
          <div className="w-1/2">
            <p>Adress</p>
            <p>Stuxbergsgatan 5B, 412 62 Göteborg</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-left gap-4 pt-2">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-comfy-blue text-2xl"
          />
          <div className="w-1/2">
            <p>Email </p>
            <a
              className="font-bold underline decoration-light-comfy-red decoration-3"
              href="mailto:stuxisparklek@gmail.com">
              stuxisparklek@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center text-left gap-4 pt-2">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-comfy-blue text-2xl"
          />
          <div className="w-1/2">
            <p>Telefon till styrelsen</p>
            <p>(+46) 709 49 49 59</p>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="w-1/3 text-center ">
        <h1 className="font-bold text-2xl text-comfy-blue underline decoration-light-comfy-red decoration-4 ">
          Snabblänkar
        </h1>
        <div className="flex flex-col gap-3 text-xl items-center pt-4 ">
          <Link href="/">Hem</Link>
          <Link href="/aboutUs">Om Oss</Link>
          <Link href="/contact">Kontakta Oss</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
