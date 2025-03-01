import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="py-3.5 text-sm border bg-[linear-gradient(90deg,#FEECFF_0%,#FECAFF_12%,#FEB5FF_27%,#FFDBE7_40%,#FFF4D6_49%,#F3FCD7_59%,#D2F5EE_71%,#C3EFFF_84%,#FBEFFF_100%)]">
      <Link href={"/"}>
        <div className="container flex justify-center items-center gap-1">
          <span>
            <span className="hidden md:inline">
              This page is included in a free SaaS Website Kit.{" "}
            </span>
            View the complete Kit
          </span>
          <Image
            src={"/assets/icons/right-arrow.svg"}
            alt="right-arrow"
            width={16}
            height={16}
            className="pt-1"
          />
        </div>
      </Link>
    </div>
  );
};

export default Banner;
