import React, { useState } from "react";
import MyFoto from "public/zhekaFoto.png";
import Image from "next/image";

function Navbar() {
  const [active, setActive] = useState(null);
  return (
    <nav className="flex justify-between items-center py-4 px-36 fixed top-0 w-screen max-w-[1700px] bg-white z-50">
      <Image
        src={MyFoto}
        width={40}
        height={40}
        alt={MyFoto}
        className="rounded-full"
      />
      <div className="flex gap-16">
        <a
          href="#home"
          className={`font-normal text-base duration-300 hover:text-salmon ${
            active == 1
              ? "text-salmon border border-b-2 border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(1)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`font-normal text-base duration-300 hover:text-salmon ${
            active == 2
              ? "text-salmon border-b-2 border-solid border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(2)}
        >
          About me
        </a>
        <a
          href="#skils"
          className={`font-normal text-base duration-300 hover:text-salmon ${
            active == 3
              ? "text-salmon border-b-2 border-solid border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(3)}
        >
          Skils
        </a>
        <a
          href="#contact"
          className={`font-normal text-base duration-300 hover:text-salmon ${
            active == 4
              ? "text-salmon border-b-2 border-solid border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(4)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
