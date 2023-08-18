import Link from "next/link";
import React from "react";

function BecomeMemberButton() {
  return (
    <div className="flex justify-center w-full h-12 my-5">
      <Link href="https://app.octany.com/1525/checkout/link?productId=5258&locale=sv">
        <button className="rounded-lg border-2 border-solid shadow-purple-button-shadow bg-light-comfy-purple h-12 w-56 hover:bg-comfy-purple border-comfy-purple hover:text-white">
          Bli Medlem
        </button>
      </Link>
    </div>
  );
}

export default BecomeMemberButton;
