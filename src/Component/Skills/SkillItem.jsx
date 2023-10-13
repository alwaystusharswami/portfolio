/* eslint-disable react/prop-types */
export default function SkillItem({skills}) {
  
    // console.log({skills})
    const{name,bg,width}=skills;
  return (
    <>
            <div className="w-72 m-2 bg-gray-300 rounded-md"  >
            <div style={{backgroundColor:bg,width}} className="p-2 text-white animate-filling rounded-md">
            {name}
            </div>
            </div>
    </>
  )
}
