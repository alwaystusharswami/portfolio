import styles from "./project.module.css";
import img from "../../image/instagram.jpg"
import { SiOpenproject } from "react-icons/si";

export default function Project() {
  return (
    <>
   <div className={styles.project}>
   
   <h1 className={styles.projectheading}><SiOpenproject/> Project</h1>

   <div className={styles.projectdivflex}>
       <a className={styles.projectinnerflex}>
           <img src={img} alt="project photo" />

         <div className={styles.content}>
           <h1>Todo List</h1>
           <p>I am crating todo list with help of Redux ToolKit</p>
         </div>         
     </a>

     
   </div></div>
    </>
  );
}
