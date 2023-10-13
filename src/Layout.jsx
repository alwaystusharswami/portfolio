import Contact from "./Component/Contact/Contact";
import Education from "./Component/Education/Education";
import Profile from "./Component/Profile/Profile";
import Project from "./Component/Project/Project";
import Skills from "./Component/Skills/Skills";

function Layout() {
  return (
    < >
      <div>
      <Profile />
      <Skills />
      <Project/>
      <Education/>
      <Contact/>
      </div>
      
    </>
  );
}

export default Layout;
