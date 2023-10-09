import Contact from "./Component/Contact/Contact";
import Education from "./Component/Education/Education";
import Profile from "./Component/Profile/Profile";
import Project from "./Component/Project/Project";
import Skills from "./Component/Skills/Skills";

function Layout() {
  return (
    < >
      <div style={{boxShadow:`1px 1px 10px peru`, width:`90vw`,margin:`auto`}}>
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
