"use client";
import { useState } from "react";
import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Navigation from "@/components/Navigation";

import ArrowPageChange from "@/components/ArrowPageChange";

export default function Home() {
  function setColorOcean11() {
    document.querySelector(".place_holder").style.backgroundImage =
      "url('../assets/ocean.png')";

    const allDots = document.querySelectorAll("[data-dot]");

    allDots.forEach((dot) => {
      dot.style.outlineOffset = "";
    });
    document.querySelector("[data-dot='ocean']").style.outlineOffset = "4px";
  }

  function setColorNavy() {
    document.querySelector(".place_holder").style.backgroundImage =
      "url('../assets/navy.png')";

    const allDots = document.querySelectorAll("[data-dot]");

    allDots.forEach((dot) => {
      dot.style.outlineOffset = "";
    });
    document.querySelector("[data-dot='navy']").style.outlineOffset = "4px";
  }

  function setColorMint() {
    document.querySelector(".place_holder").style.backgroundImage =
      "url('../assets/mint.png')";
    const allDots = document.querySelectorAll("[data-dot]");

    allDots.forEach((dot) => {
      dot.style.outlineOffset = "";
    });

    document.querySelector("[data-dot='mint']").style.outlineOffset = "4px";
  }

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
            <div className="place_holder"></div>
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
            <button
              onClick={setColorNavy}
              className="bg-[#778090] p-2 m-1 cursor-pointer rounded-lg"
              data-color="navy"
            ></button>
            <button
              onClick={setColorMint}
              className="bg-[#8EDCD6] p-2 m-1 cursor-pointer rounded-lg"
              data-color="mint"
            ></button>
            <button
              onClick={setColorOcean11}
              className="bg-[#D9E7ED] p-2 m-1 cursor-pointer rounded-lg"
              data-color="ocean"
            ></button>
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
