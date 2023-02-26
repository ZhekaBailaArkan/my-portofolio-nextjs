function Skils() {
  return (
    <div
      className="flex items-center justify-center h-screen px-80 py-5"
      id="skils"
    >
      <div className="bg-salmon w-full px-10 py-7 rounded-md space-y-10">
        <h1
          className="flex gap-1 text-6xl font-semibold text-black justify-center"
          data-aos="fade-up"
        >
          Skils <span className="text-white">.</span>
        </h1>
        <div className="mt-5 space-y-8">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">HTML:</h1>
            <div className="grid grid-cols-10 bg-black p-3 rounded-full w-full">
              <div
                className="bg-white col-span-8 rounded-full h-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">CSS:</h1>
            <div className="grid grid-cols-10 bg-black p-3 rounded-full w-full">
              <div
                className="bg-white  col-span-8 rounded-full h-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold">JAVASCRIPT:</h1>
            <div className="grid grid-cols-10 bg-black p-3 rounded-full w-full">
              <div
                className="bg-white  col-span-6 rounded-full h-2"
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
