import styles from "./skills.module.css";
import SkillItem from "./SkillItem";
import { skills } from "../../data/skilldata";

import { GiSkills} from "react-icons/gi";

export default function Skills() {
  return (
    <>
      <div className={styles.skills}>
        <h1 className={styles.heading}><GiSkills/> SKILLS</h1>
        <div className={styles.skillDiv}>
          {skills.map((skill, i) => (
            <SkillItem key={i} skills={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
