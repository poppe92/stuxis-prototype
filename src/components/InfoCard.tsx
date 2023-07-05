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
      className={`flex flex-col justify-center items-center text-center rounded-lg border-2 border-solid p-6 min-w-[160px] max-w-[360px] min-h-[410px] ${backgroundColor} ${shadowColor} ${borderColor}`}>
      <Image src={image} alt="" width={60} height={60} />
      <h2 className="text-2xl font-bold leading-relaxed py-2">{headerText}</h2>
      <p className="text-md leading-relaxed pt-5">{paragraphText}</p>
    </div>
  );
}

export default InfoCard;
