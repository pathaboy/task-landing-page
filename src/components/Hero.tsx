import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="min-h-screen bg-[linear-gradient(to_bottom,#000_0%,#200d42_34%,#4f21a1_65%,#a46edb_100%)] flex flex-col justify-start items-center">
        <div className="container flex flex-col items-center gap-8">
          <Link href={"/"}>
            <div className="inline-flex justify-center items-center gap-1 py-2.5 px-3.5 bg-black text-white text-sm leading-none border border-[#222222] rounded-lg">
              <span className="text-white/50">Version 2.0 is here </span>
              <div className="inline-flex justify-center items-center gap-1">
                <span>Read more</span>
                <Image
                  src={"/assets/icons/right-arrow-white.svg"}
                  alt="read more"
                  width={16}
                  height={16}
                  className="pt-0.5"
                />
              </div>
            </div>
          </Link>

          <h1 className="text-white font-semibold text-[54px] leading-[50px] text-balance text-center tracking-tight md:text-[154px] md:leading-[120px] xl:text-[165px] xl:font-bold xl:leading-[125px] xl:tracking-tighter">
            One Task <br /> at a Time
          </h1>
          <p className="text-xl text-white text-center font-normal text-balance leading-[31px] max-w-[450px] ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <Link href={"/"}>
            <button className="rounded-[10px] py-[15px] px-5 bg-white border-none text-black text-base font-bold">
              Get for free
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
