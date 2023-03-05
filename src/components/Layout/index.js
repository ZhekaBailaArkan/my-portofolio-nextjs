import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";

function Layout({ children, className }) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div className="flex justify-center">
        <Navbar />
        <div className="snap-container max-w-[1700px]">
          <div className={className}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
