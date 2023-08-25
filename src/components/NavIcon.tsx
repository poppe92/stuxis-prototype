import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavIcon() {
  return (
    <Link className="min-w-[100px] " href="/">
      <Image src="/Stuxis_Logo.webp" alt="/" width={100} height={100} />
    </Link>
  );
}

export default NavIcon;
