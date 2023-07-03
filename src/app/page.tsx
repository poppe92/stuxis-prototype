import BecomeMemberButton from "@/components/BecomeMemberButton";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function handleClick() {}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero image="/heroImage.png">
        <div className="flex flex-col items-center">
          <h1 className="flex flex-wrap items-center font-bold text-2xl text-comfy-blue pt-12 max-w-xl justify-center">
            Välkommen till
            <Image
              src="/Stuxis_Logo.png"
              alt="/"
              width={93}
              height={43}
              className="justify-center mx-2 mb-2"
            />
            föräldraföreningen
          </h1>
          <h1 className="font-bold text-2xl text-comfy-blue max-w-xl justify-center pb-12">
            vid Stuxbergsgatans Fritidspark
          </h1>
        </div>
      </Hero>

      <div className="flex flex-col w-full items-center justify-center ">
        <p className="w-1/2 p-2 ">
          Stuxis är en ideellt driven öppen förskola i Stuxbergsgatans
          Fritidspark. Förkolan drivs av en föräldraförening som håller öppet,
          sköter lokalen och köper in leksaker och material. Förskolelokalen är
          fullt utrustad med leksaker, böcker och annat skoj! Själklart finns
          toalett, skötbord och ett litet kök med micro där du kan värma mat.
        </p>
        <p className="w-1/2 p-2 ">
          I anslutning till lokalen finns en leksaksbod med massor av roliga
          utomhusleksaker som föreningens medlemmar har tillgång till.
        </p>

        <div className="flex flex-row pb-5 p-2 w-1/2">
          Medlemskapet kostar
          <p className="font-bold underline decoration-light-comfy-red decoration-4 px-1 ">
            150 kr
          </p>
          per kalenderår och gäller för en hel familj.
        </div>
      </div>
      <BecomeMemberButton />
    </main>
  );
}
// image="/heroImage.png"
// logoImage="/Stuxis_Logo.png"
// text="Välkommen till föräldraföreningen vid Stuxbergsgatans Fritidspa
