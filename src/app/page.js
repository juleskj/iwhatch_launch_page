import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-full ">
      <Navigation></Navigation>
      <main className="p-10 flex flex-row justify-around">
        <div className="flex flex-col justify-around">
          <h1 className="capitalize font-bold text-5xl">the perfect moment </h1>
          <h1 className="capitalize text-5xl">
            between <strong>past</strong> and <strong>future</strong>{" "}
          </h1>
          <ButtonCTA text="buy now "></ButtonCTA>
        </div>
        <div>
          <section>
            <div className="place_holder"></div>
            <div>
              <span className="bg-black p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"></span>
              <span className="bg-black p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"></span>
              <span className="bg-black p-2 m-1 rounded-full outline-white outline outline-2 before:content-[' ']"></span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
