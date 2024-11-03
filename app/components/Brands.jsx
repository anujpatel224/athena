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
      <div className="flex justify-center gap-14 animate-scroll p-8 infinite-scroll">
        <Image src={candlelight} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={awards} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={nicebook} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={candlelight} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={awards} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={nicebook} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={drum} height={60} width={60} alt="brand" className="w-auto h-16" />
        <Image src={nva2018silver} height={60} width={180} alt="brand" className="w-auto h-16" />
        <Image src={nva2018winner} height={60} width={180} alt="brand" className="w-auto h-16"/>
        
        <Image src={candlelight} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={awards} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={nicebook} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={candlelight} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={awards} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={nicebook} height={60} width="auto" alt="brand" className="w-auto h-16" />
        <Image src={drum} height={60} width={60} alt="brand" className="w-auto h-16" />
        <Image src={nva2018silver} height={60} width={180} alt="brand" className="w-auto h-16"/>
        <Image src={nva2018winner} height={60} width={180} alt="brand" className="w-auto h-16"/>
      </div>
    </div>
  );
}

export default Brands;
