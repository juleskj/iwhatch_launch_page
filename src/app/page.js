import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Navigation from "@/components/Navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-full ">
      <Navigation></Navigation>
      <main className="p-10">
        <div className="flex flex-row justify-around">
          <section className="flex flex-col justify-around">
            <h1 className="capitalize font-bold text-5xl">
              the perfect moment{" "}
            </h1>
            <h1 className="capitalize text-5xl">
              between <strong>past</strong> and <strong>future</strong>{" "}
            </h1>
            <ButtonCTA text="buy now "></ButtonCTA>
            <div className="flex flex-row items-center">
              <span className="p-2 m-1 ">
                <FaLongArrowAltLeft />
              </span>
              <p>1</p>
              <span className="p-2 m-1 ">
                <FaLongArrowAltRight />
              </span>
            </div>
          </section>

          <section className="flex flex-row items-center justify-around">
            <div className="place_holder"></div>
            <div className="flex flex-col justify-around items-center">
              <span className="bg-black p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"></span>
              <span className="bg-black p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"></span>
              <span className="bg-black p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"></span>
            </div>
          </section>
        </div>
        <section className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-around items-center">
            <span className="p-2 m-1 cursor-pointer " data-color="navy"></span>
            <span className="p-2 m-1 cursor-pointer " data-color="mint"></span>
            <span className="p-2 m-1 cursor-pointer " data-color="ocean"></span>
          </div>
        </section>
      </main>
    </div>
  );
}

// const navyCTA = document.querySelector("[data-color='navy']");

// navyCTA.addEventListener("click", (e) => {
//   console.log("click navy");
// });
