import React from "react";

function AboutMe() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div id="about" className="space-y-6">
        <div className="flex justify-center">
          <div className="text-6xl font-semibold flex" data-aos-duration="1000" data-aos="fade-up">
            About Me<div className="text-salmon">.</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-xl font-normal text-center w-[60%]" data-aos-duration="1000" data-aos="fade-right">
            Saya adalah siswa smk yang mempunyai ketertarikan pada bidang IT
            terutama pada pemrograman. Saya tertarik pada bagian Frontend.
            Bahasa pemrograman yang saya kuasai HTML, CSS, saya juga sedikit
            menguasai CSS Framework seperti Bootstrap, Tailwindcss. Javascript
            library seperti React js dan framework-nya yaitu Next js
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
