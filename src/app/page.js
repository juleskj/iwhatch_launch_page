import Image from "next/image";
import ButtonCTA from "@/components/ButtonCTA";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <ButtonCTA text="buy now"></ButtonCTA>
      </main>
    </div>
  );
}
