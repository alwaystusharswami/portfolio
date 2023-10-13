import SkillItem from "./SkillItem";
import { skills } from "../../data/skilldata";

import { GiSkills} from "react-icons/gi";

export default function Skills() {
  
  return (
    <>
      <div className="p-10" >
        <h1 className="text-center text-2xl my-4" ><GiSkills className="inline-block"/> SKILLS</h1>
        <div className="flex flex-wrap justify-around">
          {skills.map((skill, i) => (
            <SkillItem key={i} skills={skill} />
          ))}
        </div>
      </div>
    </>
  );
}
