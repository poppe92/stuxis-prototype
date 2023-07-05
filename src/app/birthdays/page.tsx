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

      <div className="flex flex-col items-center text-xl max-w-5xl m-auto">
        <h1 className="text-xl font-semibold leading-relaxed p-8 w-full">
          Barnkalas på Stuxis kan medlemmar i Föräldraföreningen vid
          Stuxbergsgatans Fritidspark anordna!
        </h1>

        <List>
          <p>
            Kalaset bokas genom att skriva upp ditt eget namn samt telefonnummer
            i kalasalmanackan. Almanackan hänger i leksaksboden. Var vänlig
            texta tydligt.
          </p>
          <p>
            Föreningen tar ut en avgift på{" "}
            <text className="underline decoration-light-comfy-red decoration-4 font-bold">
              100 kr
            </text>{" "}
            för barnkalas. Avgiften sätts in senast en vecka innan kalaset på
            förenings <text className="font-bold">Swish 123 207 31 87 </text>
            eller <text className="font-bold">PlusGiro 430 45 55-8</text>, ange
            samma uppgifter som i kalasalmanackan samt datumet för kalaset.
          </p>

          <p>
            Instruktioner om lokalen, larm, städning m.m. fås då nyckel hämtas.
            Vid övriga frågor vänd dig till föreningens styrelse,{" "}
            <a
              className="font-bold underline decoration-light-comfy-red decoration-3"
              href="mailto:stuxisparklek@gmail.com">
              stuxisparklek@gmail.com
            </a>
            .
          </p>
          <p>
            För att få tillgång till nyckel: Nyckeln får du genom att kontakta
            den person som hade kalas före dig, kontaktuppgifter finns i
            kalasalmanackan i leksaksboden. Skulle du inte få kontakt med denna
            person kontaktar du styrelsen via mail{" "}
            <a
              className="font-bold underline decoration-light-comfy-red decoration-3"
              href="mailto:stuxisparklek@gmail.com">
              stuxisparklek@gmail.com
            </a>{" "}
            eller via{" "}
            <a
              href="https://www.facebook.com/stuxis"
              className="font-bold underline decoration-light-comfy-red decoration-3">
              Facebook.
            </a>
          </p>
          <p>Du får endast ha en aktiv bokning per barn åt gången.</p>
          <p>
            Om du behöver avboka ditt kalastillfälle gör du detta genom att
            stryka namn och telefonnummer i kalasalmanackan. Gärna så tidigt som
            möjligt för att frigöra lokalen åt andra medlemmar.
          </p>
          <p>
            Om du behöver avboka ditt kalastillfälle gör du detta genom att
            stryka namn och telefonnummer i kalasalmanackan. Gärna så tidigt som
            möjligt för att frigöra lokalen åt andra medlemmar.
          </p>
          <p>
            Lokalen får endast användas till barnkalas, d.v.s. INTE till
            kräftskivor, 40-årskalas etc.
          </p>
          <p>
            Du har tillgång till nyckeln samt lokalen endast den dagen som
            kalaset är bokat.
          </p>
        </List>
        {/* 
            "Kalas får endast hållas på lördagar och söndagar. (Vid överenskommelse sinsemellan kan medlemmar dela på en dag.)",
            "Föreningen tar ut en avgift på 100 kr för barnkalas. Avgiften sätts in senast en vecka innan kalaset på förenings Swish 123 207 31 87 eller PlusGiro 430 45 55-8 , ange samma uppgifter som i kalasalmanackan samt datumet för kalaset.",
            "Instruktioner om lokalen, larm, städning m.m. fås då nyckel hämtas. Vid övriga frågor vänd dig till föreningens styrelse, stuxisparklek@gmail.com.",
            "För att få tillgång till nyckel: Nyckeln får du genom att kontakta den person som hade kalas före dig, kontaktuppgifter finns i kalasalmanackan i leksaksboden. Skulle du inte få kontakt med denna person kontaktar du styrelsen via mail stuxisparklek@gmail.com eller via facebook.",
            "Du får endast ha en aktiv bokning per barn åt gången.",
            "Om du behöver avboka ditt kalastillfälle gör du detta genom att stryka namn och telefonnummer i kalasalmanackan. Gärna så tidigt som möjligt för att frigöra lokalen åt andra medlemmar.",
            "Lokalen får endast användas till barnkalas, d.v.s. INTE till kräftskivor, 40-årskalas etc.",
            "Du har tillgång till nyckeln samt lokalen endast den dagen som kalaset är bokat.", */}
      </div>
    </main>
  );
}

export default birthDays;
// Kalaset bokas genom att skriva upp ditt eget namn samt telefonnummer i kalasalmanackan. Almanackan hänger i leksaksboden. Var vänlig texta tydligt. Kalas får endast hållas på lördagar och söndagar. (Vid överenskommelse sinsemellan kan medlemmar dela på en dag.) Föreningen tar ut en avgift på 100 kr för barnkalas. Avgiften sätts in senast en vecka innan kalaset på förenings Swish 123 207 31 87 eller PlusGiro 430 45 55-8 , ange samma uppgifter som i kalasalmanackan samt datumet för kalaset. Instruktioner om lokalen, larm, städning m.m. fås då nyckel hämtas. Vid övriga frågor vänd dig till föreningens styrelse, stuxisparklek@gmail.com. För att få tillgång till nyckel: Nyckeln får du genom att kontakta den person som hade kalas före dig, kontaktuppgifter finns i kalasalmanackan i leksaksboden. Skulle du inte få kontakt med denna person kontaktar du styrelsen via mail stuxisparklek@gmail.com eller via facebook. Du får endast ha en aktiv bokning per barn åt gången. Om du behöver avboka ditt kalastillfälle gör du detta genom att stryka namn och telefonnummer i kalasalmanackan. Gärna så tidigt som möjligt för att frigöra lokalen åt andra medlemmar. Lokalen får endast användas till barnkalas, d.v.s. INTE till kräftskivor, 40-årskalas etc. Du har tillgång till nyckeln samt lokalen endast den dagen som kalaset är bokat.
