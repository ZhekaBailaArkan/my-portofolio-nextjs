import React from "react";

function AboutMe() {
  return (
    <div
      className="flex items-center justify-center h-screen px-80 py-5"
      id="about"
    >
      <div className="w-full px-10 py-10 rounded-md space-y-10">
        <h1
          className="flex gap-1 text-6xl font-semibold text-black justify-center"
          data-aos="fade-up"
        >
          About me <div className="text-salmon">.</div>
        </h1>
        <div className="text-center text-xl">
          Saya adalah siswa smk yang mempunyai ketertarikan pada bidang IT
          terutama pada pemrograman. Saya tertarik pada bagian Frontend. Bahasa
          pemrograman yang saya kuasai HTML, CSS, saya juga sedikit menguasai
          CSS Framework seperti Bootstrap, Tailwindcss. Javascript library
          seperti React js dan framework-nya yaitu Next js.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
