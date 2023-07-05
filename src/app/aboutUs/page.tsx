import Hero from "@/components/Hero";
import React from "react";

function aboutUs() {
  return (
    <Hero image="/heroImage.png">
      <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
        Om oss
      </h1>
    </Hero>
  );
}

export default aboutUs;
