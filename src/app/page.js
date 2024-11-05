"use client";
import { useState } from "react";
import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Navigation from "@/components/Navigation";
import Navy from "../../public/assets/navy.png";
import Mint from "../../public/assets/mint.png";
import Ocean from "../../public/assets/ocean.png";
import ArrowPageChange from "@/components/ArrowPageChange";

export default function Home() {
  return (
    <div className="min-h-full ">
      <div className="flex flex-row justify-around py-10 ">
        <section className="flex flex-col justify-around">
          <h1 className="capitalize text-6xl">
            <strong>the perfect moment</strong> <br></br>between
            <strong> past</strong> and <strong>future</strong>
          </h1>

          <ButtonCTA text="buy now "></ButtonCTA>
          <ArrowPageChange></ArrowPageChange>
        </section>

        <section>
          <div className="flex flex-row items-center justify-around">
            <Image
              src={Navy}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className="flex flex-col justify-around items-center">
              <span
                data-dot="navy"
                className="bg-[#778090] p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"
              ></span>
              <span
                data-dot="mint"
                className="bg-[#8EDCD6] p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"
              ></span>
              <span
                data-dot="ocean"
                className="bg-[#D9E7ED] p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"
              ></span>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="bg-[#778090] p-2 m-1 cursor-pointer rounded-lg">
              <Image
                src={Navy}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
            <div className="bg-[#8EDCD6] p-2 m-1 cursor-pointer rounded-lg">
              <Image
                src={Mint}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
            <div className="bg-[#D9E7ED] p-2 m-1 cursor-pointer rounded-lg">
              <Image
                src={Ocean}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// const navyCTA = document.querySelector("[data-color='navy']");

// navyCTA.addEventListener("click", (e) => {
//   console.log("click navy");
// });
