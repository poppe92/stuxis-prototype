import Hero from "@/components/Hero";
import List from "@/components/List";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function birthDays() {
  return (
    <main>
      <Hero image="/birthdayImage.png">
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Barnkalas
        </h1>
      </Hero>

      {/* <div className="flex flex-col items-center text-xl max-w-5xl m-auto"> */}
      <div className="flex flex-col w-full items-center justify-center text-xl">
        <h1 className="w-1/2 p-2">
          Medlemmar i föreningen kan hyra lokalen för barnkalas. Lokalen har ett
          fullt utrustat kök, två toaletter, samt plats för 20 barn vid
          barnanpassade bord och stolar. I lokalen finns ett rum fullt med
          leksaker för alla åldrar. Kostnaden för att hyra lokalen en dag är
          <text className="underline decoration-light-comfy-red decoration-4 font-bold px-1">
            200 kr
          </text>
          .
        </h1>

        <p className="w-1/2 p-2">
          För frågor och förfrågningar, vänligen mejla
          <a
            className="font-bold p-1 underline decoration-light-comfy-red decoration-3"
            href="mailto:stuxisparklek@gmail.com">
            stuxisparklek@gmail.com
          </a>
          .
        </p>

        <h2 className="w-1/2 p-2">Observera att: </h2>
        <div className="w-1/2 p-2">
          <List>
            <p>Kalas endast får hållas på lördagar och söndagar.</p>
            <p>Man endast får ha en aktiv bokning per barn åt gången.</p>
            <p>
              Lokalen endast får användas till barnkalas, d.v.s.
              <text className="font-bold"> INTE</text> till kräftskivor,
              40-årskalas etc.
            </p>
          </List>
        </div>
        <Image src="/heroImage.png" width={600} height={300} alt="/" />
      </div>
    </main>
  );
}

export default birthDays;
