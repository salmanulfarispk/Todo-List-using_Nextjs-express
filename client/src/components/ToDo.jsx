import { baseURL } from "@/utils/constant";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";


export const ToDo = ({id,text,setUpdateUI}) => {

const deleTeTodo=()=>{
    axios.delete(`${baseURL}/deleteTodo/${id}`)
    .then((res)=>{
        console.log(res.data);
        setUpdateUI((prev)=> !prev)
    }).catch(err=>{
        console.log("errro",err);
    })
}
  return (
    <div className="bg-accentLight p-4 text-gray-400 relative group">
        {text}
        <div className="hidden absolute top-[50%] translate-y-[-50%] 
        right-0 mx-4 group-hover:block cursor-pointer ">
            <RxCross1 size={20} onClick={deleTeTodo} />

        </div>
    </div>
  )
}
