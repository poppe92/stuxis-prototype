import BecomeMemberButton from "@/components/BecomeMemberButton";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import React from "react";

function Membership() {
  return (
    <main className="flex flex-col justify-between">
      <Hero image="/heroImage.png">
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Medlemsförmåner
        </h1>
      </Hero>
      {/* Wrapper */}
      <div className="relative mx-auto">
        {/* Background */}
        <div className="absolute bg-comfy-yellow w-full -z-10 top-4 left-7 h-[calc(100%+16px)]  rounded-lg"></div>
        {/* Cards */}
        <div className="flex content-between gap-6">
          <InfoCard
            image="/person_play.svg"
            headerText="Lek"
            paragraphText="Tillgång till Öppen förskola med lek ute eller inne. En enklarefika till självkostnadspris finns att köpa."
            backgroundColor="bg-light-comfy-blue"
            borderColor="border-comfy-blue"
            shadowColor="shadow-blue-shadow"
          />
          <InfoCard
            image="/door_sliding.svg"
            headerText="Boden"
            paragraphText="Tillgång till koden till leksaksboden (trehjulingar, bobby Cars etc) så att du kan öppna för ditt barn när ni är i parken."
            backgroundColor="bg-light-comfy-purple"
            borderColor="border-comfy-purple"
            shadowColor="shadow-purple-shadow"
          />
          <InfoCard
            image="/cake.svg"
            headerText="Barnkalas"
            paragraphText="Möjlighet att låna lokalen för barnkalas, se regler längre ned på sidan."
            backgroundColor="bg-light-comfy-red"
            borderColor="border-comfy-red"
            shadowColor="shadow-red-shadow"
          />
        </div>
      </div>

      {/* Info Text */}
      <div className="flex flex-col w-full items-center justify-center text-xl p-14">
        <p className="w-1/2 p-2">
          Du som vill engagera dig mer aktivt i föreningen kan t.ex. vara med
          och hålla öppet i lokalen under de tider vi har öppen förskola, vara
          med i styrelsen eller ta dig an något mindre projekt. Det är alla vi
          medlemmar som tillsammans gör föreningen sådan vi vill ha den!
        </p>
        <p className="w-1/2 p-2">
          Om du har förslag rörande öppettider, aktiviteter eller annat så blir
          vi i styrelsen glada om du hör av dig till StuxisParklek@gmail.com.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <BecomeMemberButton />
      </div>
      <div className="h-[400px]"></div>
    </main>
  );
}

export default Membership;
