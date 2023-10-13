import { MdOutlineCastForEducation } from "react-icons/md";

export default function Education() {
  return (
    <div>
      <h1 className="text-center text-2xl my-4"><MdOutlineCastForEducation className="inline-block"/> Education</h1>
      <div className="flex flex-col justify-between">
        <div className="flex bg-red-400 p-4 mx-6 my-2">
        <div>
        <h1>Arya College of Engineering & I.T</h1>
        <h4>B.Tech <span>6.5</span> </h4></div>
        <div>July 2018 - August 2022 </div>

        </div>
        <div className="flex bg-red-400 p-4 mx-6 my-2" >
        <div>
        <h1>Aastha Academy Senior Secondary School</h1>
        <h4>High Secondary <span>62%</span> </h4></div>
        <div>July 2017 - June 2018 </div>

        </div><div className="flex bg-red-400 p-4 mx-6 my-2">
        <div>
        <h1>Sanskar Public Sr. Sec. School</h1>
        <h4>Secondary<span>75%</span> </h4></div>
        <div>July 2015 - June 2016 </div>

        </div>
      </div>
    </div>
  );
}
