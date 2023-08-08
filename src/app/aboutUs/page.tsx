import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";

function aboutUs() {
  return (
    <>
      <Hero image="/heroImage.png">
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12 underline decoration-light-comfy-red decoration-4 pb-12 ">
          Om oss
        </h1>
      </Hero>

      <h1 className="w-full px-24 flex justify-center text-center font-bold text-2xl text-comfy-blue underline decoration-light-comfy-red decoration-4 pb-12">
        Styrelse
      </h1>

      {/* Image Container Div */}
      <div className="flex w-full justify-center items-center p-4 gap-10">
        {/* President */}
        <div>
          <Image
            src="/profileJesper_Square.jpg"
            height={300}
            width={300}
            alt="/"
            className="rounded-3xl border-2 border-solid"
          />
          <h3 className="text-xl font-bold text-center text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4">
            Ordförande: Jesper Nilsson
          </h3>
        </div>

        {/* Paymaster */}
        <div>
          <Image
            src="/kerstinSquare.jpg"
            height={300}
            width={300}
            alt="/"
            className="rounded-3xl"
          />
          <h3 className="text-xl text-center font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4">
            Kassör: Kerstin Westergren
          </h3>
        </div>

        {/* Deputy's */}
        <div>
          <Image
            src="/nathalie.jpg"
            height={300}
            width={300}
            alt="/"
            className="rounded-3xl"
          />
          <h3 className="text-xl text-center font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4">
            Nathalie Forsberg
          </h3>
        </div>
      </div>

      {/* History Div */}
      <div className="flex flex-col w-full items-center justify-center text-xl px-14">
        <h1 className="text-2xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4">
          Historia
        </h1>
        <p className="w-1/2 p-2">
          Tanken med lokalen i Stuxbergsparken var att den skulle vara ett
          allaktivitetshus när den byggdes någon gång under 60-talet. Den öppna
          förskolan i kommunal regi startade 1973 och stängde 2001. Under den
          tiden var även då en föräldraförening aktiv. Den föräldraföreningen
          organiserade bland annat midsommarfirande och luciatåg, svunna tider
          som blivit förevigade på foton i fotopärmar som sparats i lokalen.
        </p>
        <p className="w-1/2 p-2">
          Orsakerna till stängningen av den öppna förskolan anses vara
          införandet av maxtaxereformen som trädde i kraft 2001 och som innebar
          att barn till arbetslösa och föräldralediga fick rätt till förskola,
          samt lokalens ventilationsproblem. Det hade kunnat bli en
          dagverksamhet som därefter huserade i huset, om inte några föräldrar
          engagerat sig och kämpat för att förskolan fick vara kvar.
        </p>
        <p className="w-1/2 p-2">
          Efter ett ilsket brev och en inbjudan till ett möte med berörda
          parter, ordnade den dåvarande förskolechefen så att den nya
          föräldraföreningen fick behålla lokalerna och 2001 uppstod den öppna
          förskolan i dess nuvarande form. Drivkraften var att behålla en
          mötespunkt för föräldrar som var sekulär, då t.ex. en indonesisk
          mammagrupp träffades veckovis i lokalen.
        </p>
        <p className="w-1/2 p-2">
          Men både lokalen och parken var i behov av upprustning. Under åren
          2006-2007 gjordes parken om med nya rutschkanor, sandlådor, gungor och
          balansbana i skogskanten. Även då hade föräldrar i närområdet varit
          aktiva med påtryckningar för att få igenom planerna hos Park och
          Natur. Upprustningen inomhus organiserades genom att målarfärg
          inköptes av kommunen och ett målarschema sattes upp där frivilliga
          fick skriva upp sig för att måla. Kommunen satte in ett nytt pentry
          och en ny toalett.
        </p>
        <p className="w-1/2 p-2">
          Idag hålls lokalen öppen på ideell basis och är ett uppskattat
          tillhåll för föräldralediga med barn i närområdet. Välkomna hit för
          att göra er nya bekantskaper i området!
        </p>
      </div>
    </>
  );
}

export default aboutUs;
