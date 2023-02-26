import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io";

const icons = [
  { href: "https://www.instagram.com/zh33k4/", icon: IoLogoFacebook },
  { href: "https://github.com/ZhekaBailaArkan", icon: IoLogoGithub },
  { href: "https://www.instagram.com/zh33k4/", icon: IoLogoInstagram },
  { href: "https://www.instagram.com/zh33k4/", icon: IoLogoWhatsapp },
];

function Introduction() {
  return (
    <div className="h-screen mx-48 flex justify-between items-center" id="home">
      <div className="basis-2/4">
        <div className="text-xl font-semibold ">Hola! I&apos;m</div>
        <div className="text-4xl font-semibold mt-5 text-salmon">
          Zheka Baila A
        </div>
        <div className="mt-5">
          <div className="text-8xl font-semibold" data-aos-duration="1000" data-aos="fade-right">Frontend</div>
          <div className="text-8xl font-semibold indent-14 flex gap-4 items-end" data-aos-duration="1000" data-aos="fade-left">
            Developer
            <div className="bg-salmon rounded-full w-5 h-5 mb-6"></div>
          </div>
        </div>
        <div className="mt-5 w-10/12">
          Saya adalah siswa smk yang mempunyai ketertarikan pada bidang IT
          terutama pada pemrograman. Saya tertarik pada bagian Frontend.
        </div>
        <div className="flex items-center mt-7 gap-8">
          {icons.map((i, index) => (
            <Link href={i.href} key={index}>
              <i.icon className="w-7 h-7" />
            </Link>
          ))}
        </div>
        <div className="mt-6 bg-salmon w-48 flex justify-center px-14 py-2 text-white font-semibold text-lg rounded-sm drop-shadow-[0px_15px_30px_#FD5956]">
          CV Here
        </div>
      </div>
      <Image
        src="/zhekaFoto.png"
        width={300}
        height={300}
        alt=""
        className="rounded-full bg-slate-700 p-2"
      />
    </div>
  );
}

export default Introduction;
