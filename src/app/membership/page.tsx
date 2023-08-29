import BecomeMemberButton from "@/components/BecomeMemberButton";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import React from "react";
import Image from "next/image";

// import images
import img1 from "public/images/bodenWideBild.webp";
import heroImage from "public/images/heroImage.webp";

function Membership() {
  return (
    <main className="flex flex-col justify-between">
      <Hero image={heroImage}>
        <h1 className="lg:w-1/3 w-full flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Medlemsförmåner
        </h1>
      </Hero>
      {/* Wrapper */}
      <div className="relative md:mx-auto mx-10">
        {/* Background */}
        <div className="absolute bg-comfy-yellow w-full  -z-10 top-4 left-7 h-[calc(100%+16px)]  rounded-lg" />
        {/* Cards */}
        <div className="flex lg:flex-row flex-col content-between gap-6 ">
          <InfoCard
            image="/svg/person_play.svg"
            headerText="Lek"
            paragraphText="Tillgång till öppen förskola med lek inomhus."
            backgroundColor="bg-light-comfy-blue"
            borderColor="border-comfy-blue"
            shadowColor="shadow-blue-shadow"
          />
          <InfoCard
            image="/svg/door_sliding.svg"
            headerText="Boden"
            paragraphText="Tillgång till leksakboden med uteleksaker för alla åldrar."
            backgroundColor="bg-light-comfy-purple"
            borderColor="border-comfy-purple"
            shadowColor="shadow-purple-shadow"
          />
          <InfoCard
            image="/svg/cake.svg"
            headerText="Barnkalas"
            paragraphText="Möjlighet att hyra lokalen för barnkalas."
            backgroundColor="bg-light-comfy-red"
            borderColor="border-comfy-red"
            shadowColor="shadow-red-shadow"
          />
        </div>
      </div>

      {/* Info Text */}
      <div className="flex flex-col w-full lg:items-center lg:justify-center text-xl p-14 ">
        <div className="lg:w-1/2 p-2 flex justify-center">
          <Image
            src={img1}
            alt="Bild på vad som finns i boden."
            placeholder="blur"
          />
        </div>
        <p className="lg:w-1/2 p-2">
          Du som vill engagera dig mer aktivt i föreningen kan t.ex. hålla
          lokalen öppen för öppen förskola, vara med i styrelsen eller ta dig an
          något mindre projekt. Det är alla vi medlemmar som tillsammans gör
          föreningen sådan vi vill ha den!
        </p>
        <p className="lg:w-1/2 p-2">
          Om du har förslag rörande öppettider, aktiviteter eller annat så blir
          vi i styrelsen glada om du hör av dig till
          <a
            className="font-bold p-1 underline decoration-light-comfy-red decoration-3"
            href="mailto:stuxisparklek@gmail.com">
            stuxisparklek@gmail.com
          </a>
          .
        </p>
      </div>
      <div className="flex items-center justify-center">
        <BecomeMemberButton />
      </div>
    </main>
  );
}

export default Membership;
