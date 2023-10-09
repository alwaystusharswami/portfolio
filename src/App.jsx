
import Navbar from "./Component/Navbar/Navbar";
import { Outlet } from "react-router"


function App() {
  
  

  return (
    <>
    <Navbar/>
    <Outlet/>
  
    </>
  );
}

export default App;
