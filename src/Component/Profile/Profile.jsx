import styles from "../Profile/profile.module.css";

import profileImage from "../../image/tushar_photo-removebg-preview.png";
import instagram from "../../image/instagram.jpg"
import github from "../../image/github.png"
import whatsapp from "../../image/whatsapp.png"
import linkdin from "../../image/linkdin.png"




export default function Profile() {
  return (
    <>

      <div className={styles.profileMain}>
        
         <div className={styles.innerDivProfile}>
          <h1>Hey There,</h1>
          <h1>I&apos;m <span>Tushar</span>  Swami</h1>
          <a href="" className={styles.anchor}>swamitusharjee2018@gmail.com</a>
          <div className={styles.socialIcon}>
            <a href="https://www.linkedin.com/in/alwaystusharswami/"><img src={linkdin} alt="link" /></a>
            <a href="https://www.instagram.com/alwaystusharswami/"><img src={instagram} alt="link" /></a>
            <a href="https://wa.me/9664406454"><img src={whatsapp} alt="link" /></a>
            <a href="https://github.com/alwaystusharswami"><img src={github} alt="link" /></a>


          </div>
        </div>
        <div className={styles.innerDivSecondProfile}>

          <img className={styles.profileImage} src={profileImage} alt="post" />
        </div> 

      </div>
    </>
  );
}
