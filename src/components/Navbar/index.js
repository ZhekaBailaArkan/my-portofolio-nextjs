import Link from "next/link";
import React, { useState } from "react";
import Logo from "../svgs/Logo";

function Navbar() {
  const [active, setActive] = useState(null);
  return (
    <nav className="flex justify-between items-center py-6 px-36 fixed top-0 w-screen bg-white">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-12">
        <Link
          href="#home"
          className={`font-normal text-lg duration-300 ${
            active == 1
              ? "text-salmon border border-b-2 border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(1)}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={`font-normal text-lg duration-300 ${
            active == 2
              ? "text-salmon border-b-2 border-solid border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(2)}
        >
          About Me
        </Link>
        <Link
          href="#skils"
          className={`font-normal text-lg duration-300 ${
            active == 3
              ? "text-salmon border-b-2 border-solid border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(3)}
        >
          Skils
        </Link>
        <Link
          href="#contact"
          className={`font-normal text-lg duration-300 ${
            active == 4
              ? "text-salmon border-b-2 border-solid border-b-salmon border-x-0 border-t-0"
              : ""
          }`}
          onClick={() => setActive(4)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
