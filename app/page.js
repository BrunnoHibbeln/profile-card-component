import Image from "next/image";

import bgTop from "./images/bg-pattern-top.svg";
import bgBottom from "./images/bg-pattern-bottom.svg";
import bgCard from "./images/bg-pattern-card.svg";
import avatar from "./images/image-victor.jpg";

export default function Home() {
  return (
    <main className="relative bg-dark-cyan h-screen overflow-hidden">
      <Image
        className="absolute w-[50rem] h-[50rem] -left-32 -top-[28rem]"
        src={bgTop}
        alt="Circle top"
      />
      <Image
        className="absolute w-[50rem] h-[50rem] -right-32 -bottom-[28rem]"
        src={bgBottom}
        alt="Circle bottom"
      />
      <section className="absolute w-[100%] h-screen bg-transparent flex justify-center items-center">
        <section className="relative w-[20rem] h-[21rem] bg-white rounded-xl">
          <Image className="rounded-t-xl" src={bgCard} alt="Background Card" />
          <Image
            className="absolute right-[36%] top-[25%] rounded-full flex justify-center"
            src={avatar}
            alt="Profile Photo"
          />
        </section>
      </section>
    </main>
  );
}
