import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <NavLink className={styles.link} style={({isActive})=> isActive? {color:"green"}:undefined} to="/">Home</NavLink>
        <NavLink  className={styles.link} style={({isActive})=> isActive? {color:"green"}:undefined} to="skill">Skill</NavLink>
        <NavLink className={styles.link} style={({isActive})=> isActive? {color:"green"}:undefined}  to="project">Project</NavLink>
        <NavLink className={styles.link} style={({isActive})=> isActive? {color:"green"}:undefined}  to="education"> Education</NavLink>
        <NavLink className={styles.link} style={({isActive})=> isActive? {color:"green"}:undefined}  to="contact">Contact me</NavLink>

      </div>
    </>
  );
}
