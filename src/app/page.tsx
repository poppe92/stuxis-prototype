import BecomeMemberButton from "@/components/BecomeMemberButton";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

// import images
import img1 from "/public/Stuxis_Logo.webp";
import img2 from "/public/images/stuxisFullImage.webp";
import heroImage from "/public/images/heroImage.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero image={heroImage}>
        <div className="flex flex-col items-center">
          <h1 className="flex flex-wrap items-center font-bold text-2xl text-comfy-blue pt-12 max-w-xl justify-center ">
            Välkommen till
            <Image
              src={img1}
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

      <div className="flex flex-col w-full items-center justify-center text-xl">
        <p className="w-1/2 p-2 ">
          Stuxis är en ideellt driven förening som drivs av Föräldraföreningen i
          Stuxbergsgatans Fritidspark.
        </p>

        <Image
          src={img2}
          alt="/"
          placeholder="blur"
          className="flex w-1/2 p-2 justify-center"
        />

        <p className="w-1/2 p-2 ">
          I parken finns en lokal som används till öppen förskola och hyrs ut
          till barnkalas. I anslutning till lokalen finns en leksaksbod som
          medlemmar i föreningen får tillgång till. Leksaksboden är fylld med
          massor av roliga utomhusleksaker för alla åldrar. I parken finns även
          en stor låda med sandlådeleksaker som man får låna som icke medlem.
          roliga
        </p>

        <div className="p-2 w-1/2">
          <p>
            Medlemskapet kostar
            <span className="font-bold underline decoration-light-comfy-red decoration-4 px-1 ">
              150 kr
            </span>
            per kalenderår och gäller för en hel familj.
          </p>
        </div>

        <p className="w-1/2 p-2">
          Läs mer{" "}
          <Link href="/membership" className="text-comfy-blue font-bold">
            här
          </Link>{" "}
          eller bli medlem direkt med knappen:
        </p>
      </div>

      <BecomeMemberButton />

      {/* Latest News */}
      <div className="flex flex-col items-center text-xl w-full">
        <h1 className="flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Senaste Nytt
        </h1>
        <div className="w-1/2">
          <h2 className="text-l font-bold  text-comfy-blue underline decoration-light-comfy-red decoration-4 pb-2">
            Stuxisdagen 19 augusti 2023!
          </h2>
          <p>
            Kom och fira stuxisdagen med oss! Det blir besök av sommarskuggan,
            hoppborg, korv, fika, filtloppis, ansiktsmålning och aktiviter.
          </p>
          <p>
            Vill du vara med på filtloppis, ta med en egen filt och skriv ut ett
            swishnummer, vi har inte möjlighet att bistå med det.
          </p>
          <p>
            Alla medlemmar är välkomna! Är du inte medlem? Bli medlem idag eller
            på plats!
          </p>
        </div>
      </div>
    </main>
  );
}
