import img from "../../image/projectImage/project1.png"
import { SiOpenproject } from "react-icons/si";

export default function Project() {
  return (
    <>
   <div className="p-4">
   
   <h1 className="text-center text-2xl my-4"><SiOpenproject className="inline-block"/> Project</h1>

   <div className="w-64 m-auto shadow-inner shadow-yellow-500 p-4" >
       <a>
           <img className="w-64 h-44 " src={img} alt="project photo" />

         <div className="my-3">
           <h1 className="text-2xl">PortFolio</h1>
           <p>I am crating todo list with help of Redux ToolKit</p>
         </div>         
     </a>

     
   </div></div>
    </>
  );
}
