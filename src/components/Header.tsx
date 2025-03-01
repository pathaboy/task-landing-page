import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-black">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="task-manager"
            width={40}
            height={41}
          />
        </Link>

        <button className="sm:hidden">
          <Image
            src={"/assets/icons/hamburger.svg"}
            alt="menu"
            aria-label="open navigation menu"
            width={20}
            height={20}
          />
        </button>
        <Link
          href={"/"}
          className="py-2.5 px-3.5 bg-white text-black text-[16px] font-bold rounded-[10px] hidden sm:inline-flex justify-center items-center leading-none"
        >
          Get for free
        </Link>
      </div>
    </header>
  );
};

export default Header;
