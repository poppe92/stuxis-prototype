import React from "react";
import Image from "next/image";

type InfoCardProps = {
  image: string;
  headerText: string;
  paragraphText: string;
  backgroundColor: string;
  borderColor: string;
  shadowColor: string;
};

function InfoCard({
  image,
  headerText,
  paragraphText,
  backgroundColor,
  borderColor,
  shadowColor,
}: InfoCardProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-lg border-2 border-solid p-4 min-w-[260px] grow max-w-[360px] ${backgroundColor} ${shadowColor} ${borderColor}`}>
      InfoCard
      <Image src={image} alt="" width={60} height={60} />
      <h2>{headerText}</h2>
      <p>{paragraphText}</p>
    </div>
  );
}
// <button className="rounded-lg border border-dark-purple bg-light-purple border-b-4 border-r-4  h-12 w-56 hover:bg-dark-purple ">
//   Bli Medlem
// </button>
// className={`absolute top-0 ${

//     nav ? 'left-0' : 'left-full'

//   } right-0 bottom-0 flex justify-center items-center w-full h-screen sm:hidden bg-black text-center ease-in duration-300`}

export default InfoCard;
