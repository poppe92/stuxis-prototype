import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// import images
import img1 from "public/images/stuxisInsideAndOutside.webp";
import heroImage from "public/images/heroImage.webp";

function openPreschool() {
  return (
    <>
      <Hero image={heroImage}>
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Öppen Förskola
        </h1>
      </Hero>
      <div className="flex flex-col w-full items-center justify-center text-xl">
        <p className="w-1/2 p-2 ">
          Det är medlemmarna i föreningen som ideellt driver öppna förskolan och
          verksamheten på Stuxis.
        </p>

        <p className="w-1/2 p-2 ">
          Lokalen är utrustad med leksaker, pyssel, böcker, spel och annat skoj!
          Självklart finns toalett, skötbord och ett litet kök med mikrovågsugn
          där man kan värma mat.
        </p>

        <Image
          src={img1}
          alt="Samlingsbild på stuxis innomhus och utomhus."
          placeholder="blur"
          className="w-1/2 p-2 flex flex-col justify-center"
        />

        <p className="w-1/2 p-2 ">
          För tillfället har vi inte öppet lokalen på vardagar, men söker dig
          som är intresserad av att hålla öppet. Vänligen mejla
          <a
            className="font-bold p-1 underline decoration-light-comfy-red decoration-3"
            href="mailto:stuxisparklek@gmail.com">
            stuxisparklek@gmail.com
          </a>{" "}
          vid intresse.
        </p>

        <p className="w-1/2 p-2 ">
          Följ oss på
          <Link
            className="font-bold underline decoration-3 p-1 decoration-light-comfy-red"
            href="https://facebook.com/stuxis">
            Facebook
          </Link>
          för aktuell information och ändringar gällande öppettider.
        </p>
      </div>
    </>
  );
}

export default openPreschool;
