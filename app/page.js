import Image from "next/image";

import bgTop from "./images/bg-pattern-top.svg";
import bgBottom from "./images/bg-pattern-bottom.svg";
import bgCard from "./images/bg-pattern-card.svg";
import avatar from "./images/image-victor.jpg";

export default function Home() {
  return (
    <main className="relative bg-dark-cyan h-screen overflow-hidden">
      <Image
        className="absolute w-[80rem] h-[80rem] sm:h-[75rem] -left-52 sm:-left-28 md:max-xl:-left-30 -top-[50rem]"
        src={bgTop}
        alt="Circle top"
      />
      <Image
        className="absolute w-[80rem] h-[80rem] sm:h-[75rem] -right-52 sm:-right-28 -bottom-[50rem]"
        src={bgBottom}
        alt="Circle bottom"
      />
      <section className="absolute w-[100%] h-screen bg-transparent flex justify-center items-center">
        <section className="relative w-[30rem] sm:w-[100%] sm:m-6 h-[31rem] sm:h-auto bg-white rounded-3xl">
          <Image
            className="w-[30rem] sm:w-[100%] rounded-t-3xl"
            src={bgCard}
            alt="Background Card"
          />
          <div className="w-[100%] pb-24 flex justify-center items-center">
            <Image
              className="absolute w-36 rounded-full border-white border-8"
              src={avatar}
              alt="Profile Photo"
            />
          </div>

          <article className="w-[100%] flex flex-col justify-center items-center text-center">
            <section className="w-max flex flex-row">
              <h1 className="font-bold text-2xl text-very-dark">
                Victor Crest
              </h1>
              <h2 className="pl-3 text-2xl text-dark-grayish">26</h2>
            </section>
            <section>
              <h2 className="pt-2 font-normal text-lg text-dark-gray">
                London
              </h2>
            </section>

            <div className="w-[100%] block pt-6 border-b-2 border-dark-gray opacity-20" />

            <section className="w-[100%] pt-8 sm:pb-8 flex flex-row gap-20 sm:gap-8 justify-center items-center">
              <article>
                <h2 className="font-bold text-2xl sm:text-xl text-very-dark">
                  80K
                </h2>
                <h3 className="font-normal tracking-widest text-sm text-dark-gray">
                  Followers
                </h3>
              </article>
              <article>
                <h2 className="font-bold text-2xl sm:text-xl text-very-dark">
                  803K
                </h2>
                <h3 className="font-normal tracking-widest text-sm text-dark-gray">
                  Likes
                </h3>
              </article>
              <article>
                <h2 className="font-bold text-2xl sm:text-xl text-very-dark">
                  1.4K
                </h2>
                <h3 className="font-normal tracking-widest text-sm text-dark-gray">
                  Photos
                </h3>
              </article>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
}
