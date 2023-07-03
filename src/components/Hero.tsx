import React from "react";
import Image from "next/image";
import { PropsWithChildren } from "react";

type HeroProps = {
  image: string;
};

function Hero({ image, children }: PropsWithChildren<HeroProps>) {
  return (
    <div className="flex flex-col items-center text-center pt-24 px-24 w-full">
      <Image
        src={image}
        alt="/"
        height={350}
        width={1200}
        className="object-contain w-full h-auto"
      />
      {children}
    </div>
  );
}

export default Hero;
