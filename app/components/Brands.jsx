import React from "react";
import Image from "next/image";
import candlelight from "../../public/candlelight.png";
import awards from "../../public/awards.png";
import nicebook from "../../public/nicebook.png";
import drum from "../../public/drum.png";
import nva2018silver from "../../public/nva2018silver.png";
import nva2018winner from "../../public/nva2018winner.png";

function Brands() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-center gap-14 animate-scroll p-4">
        <Image src={candlelight} height={100} width="auto" alt="brand" className="w-auto" />
        <Image src={awards} height={100} width="auto" alt="brand" className="w-auto" />
        <Image src={nicebook} height={100} width="auto" alt="brand" className="w-auto" />
        <Image src={candlelight} height={100} width="auto" alt="brand" className="w-auto" />
        <Image src={awards} height={100} width="auto" alt="brand" className="w-auto" />
        <Image src={nicebook} height={100} width="auto" alt="brand" className="w-auto" />
        <Image src={drum} height={100} width={100} alt="brand" />
        <Image src={nva2018silver} height={100} width={100} alt="brand" />
        <Image src={nva2018winner} height={100} width={100} alt="brand" />
      </div>
    </div>
  );
}

export default Brands;
