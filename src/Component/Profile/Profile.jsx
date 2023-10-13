// import { useEffect } from "react";

import profileImage from "../../image/tushar_photo-removebg-preview.png";
import instagram from "../../image/instagram.jpg";
import github from "../../image/github.png";
import whatsapp from "../../image/whatsapp.png";
import linkdin from "../../image/linkdin.png";

export default function Profile() {
  return (
    <>
      <div className="m-6 mt-52 ">
        <div className="px-2 h-40">
          <h1 className="text-3xl">Hey There,</h1>
          <h1 className="text-3xl">
            I&apos;m <span className="text-6xl text-yellow-500">Tushar</span>{" "}
            Swami
          </h1>
          <a  href="" className=" text-1xl text-yellow-400">
            swamitusharjee2018@gmail.com
          </a>
          <div className="flex">
            <a
              className="p-1"
              href="https://www.linkedin.com/in/alwaystusharswami/"
            >
              <img className="w-7 rounded-lg" src={linkdin} alt="link" />
            </a>
            <a
              className="p-1"
              href="https://www.instagram.com/alwaystusharswami/"
            >
              <img className="w-7 rounded-lg" src={instagram} alt="link" />
            </a>
            <a className="p-1" href="https://wa.me/9664406454">
              <img className="w-7 rounded-lg" src={whatsapp} alt="link" />
            </a>
            <a className="p-1" href="https://github.com/alwaystusharswami">
              <img className="w-7 rounded-lg" src={github} alt="link" />
            </a>
          </div>
        </div>
        <div className="absolute w-32 top-16 right-36 bg-yellow-400 rounded-full">
          <img className="w-56 h-28 rounded-full border-2 border-red-400 shadow-md shadow-yellow-400" src={profileImage} alt="post" />
        </div>
      </div>
    </>
  );
}
