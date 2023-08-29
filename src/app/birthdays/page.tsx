import Hero from "@/components/Hero";
import List from "@/components/List";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// import images
import img1 from "public/images/stuxisInsideAndOutside.webp";
import img2 from "public/images/stuxisKitchenAndInside.webp";
import birthdayImage from "public/images/birthdayImage.webp";

function birthDays() {
  return (
    <>
      <Hero image={birthdayImage}>
        <h1 className="lg:w-1/3 w-full flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Barnkalas
        </h1>
      </Hero>

      <div className="flex flex-col w-full items-start lg:items-center justify-center text-xl ">
        <h1 className="lg:w-1/2 px-10 lg:p-2">
          Medlemmar i föreningen kan hyra lokalen för barnkalas. Lokalen har ett
          fullt utrustat kök, två toaletter, samt plats för 20 barn vid
          barnanpassade bord och stolar. I lokalen finns ett rum fullt med
          leksaker för alla åldrar. Kostnaden för att hyra lokalen en dag är
          <span className="underline decoration-light-comfy-red decoration-4 font-bold px-1">
            200 kr
          </span>
          .
        </h1>

        <p className="lg:w-1/2 px-10 lg:p-2">
          För frågor och förfrågningar, vänligen mejla
          <a
            className="font-bold p-1 underline decoration-light-comfy-red decoration-3"
            href="mailto:stuxisparklek@gmail.com">
            stuxisparklek@gmail.com
          </a>
          .
        </p>

        <p className="lg:w-1/2 px-10 lg:p-2">
          För att se obokade dagar, kolla på{" "}
          <Link
            href="/activities#calendar"
            className="font-bold text-comfy-blue ">
            {" "}
            Aktivtet och Kalender
          </Link>{" "}
          ifall din önskade dag är ledig.
        </p>

        <h2 className="lg:w-1/2 px-10 lg:p-2">Observera att: </h2>
        <div className="lg:w-1/2 lg:p-2 px-10">
          <List>
            <p>Kalas endast får hållas på lördagar och söndagar.</p>
            <p>Man endast får ha en aktiv bokning per barn åt gången.</p>
            <p>
              Lokalen endast får användas till barnkalas, d.v.s.
              <span className="font-bold"> INTE</span> till kräftskivor,
              40-årskalas etc.
            </p>
          </List>
        </div>
        <div className="flex lg:flex-row flex-col -[720px] lg:w-1/2 items-center">
          <Image
            src={img1}
            width={1000}
            height={600}
            alt="/"
            placeholder="blur"
            className="lg:w-1/2 lg:p-2 px-10"
          />
          <Image
            src={img2}
            width={1000}
            height={600}
            alt="/"
            placeholder="blur"
            className="lg:w-1/2 lg:p-2 px-10"
          />
        </div>
      </div>
    </>
  );
}

export default birthDays;
