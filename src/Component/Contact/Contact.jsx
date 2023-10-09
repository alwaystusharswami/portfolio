import styles from './contact.module.css'

import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Contact() {
  return (
    <>
      <div className={styles.contact} >
          <h1 className={styles.contactheading}>
            Lets <span>Connect</span> there
          </h1>
        <hr className={styles.hr} />
        <div className={styles.flexcontactinner}>
          <div >
            {" "}
            <h1 className={styles.nameheading}>
              <span>call me</span> swami ji
            </h1>
            <p></p>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/alwaystusharswami/">
              <FaLinkedin  className={styles.iconbg} /></a>
              <a href="https://www.instagram.com/alwaystusharswami/"><FaInstagram className={styles.iconbg} /></a>
              <a href="https://wa.me/9664406454"><FaWhatsapp className={styles.iconbg} /></a>
              <a href="https://github.com/alwaystusharswami"><FaGithub className={styles.iconbg} /></a>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Navigation</h3>
            <div className={styles.linkflex}>
              <Link  className={styles.link} to="/">Home</Link>
              <Link className={styles.link} to="/skill">Skill</Link>
              <Link className={styles.link} to="/project">Project</Link>
              <Link className={styles.link} to="/education"> Education</Link>
              <Link className={styles.link} to="/contact">Contact me</Link>
            </div>
          </div>
          <div>
            <h3 className={styles.title}>Contact</h3>
            <div className={styles.linkflex}>
              <p>9664406454</p>
              <p>swamitusharjee2018@gmail.com</p>
              <p>Jaipur,Rajasthan</p>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />

      </div>
    </>
  );
}
