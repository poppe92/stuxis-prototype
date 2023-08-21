import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import React from "react";

function Gallery() {
  return (
    <>
      <Hero image="/images/heroImage.png">
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Galleri
        </h1>
      </Hero>
      <div className="m-auto max-w-5xl">
        <Slider slides={SliderData} />
      </div>
    </>
  );
}
export default Gallery;
