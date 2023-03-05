import React from "react";

function Skils() {
  return (
    <div
      className="flex items-center justify-center h-screen px-80 py-5"
      id="skils"
    >
      <div className="w-full px-10 py-10 rounded-md space-y-10">
        <h1
          className="flex gap-1 text-6xl font-semibold text-black justify-center"
          data-aos="fade-up"
        >
          Skils <div className="text-salmon">.</div>
        </h1>
        <div className="mt-5 space-y-8">
          <div className="space-y-2">
            <h1 className="text-xl font-bold">HTML :</h1>
            <div className="grid grid-cols-10 bg-[#D8D8D8] p-3 rounded-full w-full">
              <div
                className="bg-[#393E46] col-span-9 rounded-full h-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">CSS :</h1>
            <div className="grid grid-cols-10 bg-[#D8D8D8] p-3 rounded-full w-full">
              <div
                className="bg-[#393E46] col-span-8 rounded-full h-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">JAVASCRIPT :</h1>
            <div className="grid grid-cols-10 bg-[#D8D8D8] p-3 rounded-full w-full">
              <div
                className="bg-[#393E46] col-span-7 rounded-full h-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">PHP :</h1>
            <div className="grid grid-cols-10 bg-[#D8D8D8] p-3 rounded-full w-full">
              <div
                className="bg-[#393E46] col-span-6 rounded-full h-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">GIT :</h1>
            <div className="grid grid-cols-10 bg-[#D8D8D8] p-3 rounded-full w-full">
              <div
                className="bg-[#393E46] col-span-6 rounded-full h-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
