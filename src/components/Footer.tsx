import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="p-12 flex justify-between items-center">
      <div>
        <Image src="/Stuxis_Logo.png" height={100} width={100} alt="/" />
      </div>
      <div>
        <p>Contact</p>
        <div className="flex gap-4">
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
