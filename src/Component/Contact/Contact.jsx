import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="p-5 bg-yellow-600 mx-5 h-60 rounded-3xl">
        <h1>
          Lets <span className="text-3xl ">Connect</span> there
        </h1>
        <hr />
        <div className="flex justify-between">
          <div>
            {" "}
            <p></p>
            <div className="p-4 m-4">
              <a href="https://www.linkedin.com/in/alwaystusharswami/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/alwaystusharswami/">
                <FaInstagram />
              </a>
              <a href="https://wa.me/9664406454">
                <FaWhatsapp />
              </a>
              <a href="https://github.com/alwaystusharswami">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="m-3">
            <h3 className="font-bold">Contact</h3>
            <div>
              <p>9664406454</p>
              <p>swamitusharjee2018@gmail.com</p>
              <p>Jaipur,Rajasthan</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
