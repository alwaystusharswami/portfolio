import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="hidden">
        <NavLink style={({isActive})=> isActive? {color:"green"}:undefined} to="/">Home</NavLink>
        <NavLink  style={({isActive})=> isActive? {color:"green"}:undefined} to="skill">Skill</NavLink>
        <NavLink style={({isActive})=> isActive? {color:"green"}:undefined}  to="project">Project</NavLink>
        <NavLink style={({isActive})=> isActive? {color:"green"}:undefined}  to="education"> Education</NavLink>
        <NavLink style={({isActive})=> isActive? {color:"green"}:undefined}  to="contact">Contact me</NavLink>

      </div>
    </>
  );
}
