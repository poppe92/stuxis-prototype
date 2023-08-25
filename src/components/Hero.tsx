import React from "react";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type HeroProps = {
  image: StaticImageData;
  shadowColor?: string;
  borderColor?: string;
};

function Hero({
  image,
  shadowColor,
  borderColor,
  children,
}: PropsWithChildren<HeroProps>) {
  return (
    <div className="flex flex-col text-center px-2 md:pt-24 md:px-24 w-full">
      <Image
        src={image}
        alt="/"
        height={350}
        width={1200}
        placeholder="blur"
        className={`object-contain w-full h-auto rounded-2xl border-2 border-solid ${borderColor} ${shadowColor}`}
      />
      {children}
    </div>
  );
}

export default Hero;
