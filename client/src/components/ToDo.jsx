import { baseURL } from "@/utils/constant";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { MdEditNote } from "react-icons/md";
import { POpUp } from "./POpUp";
import { useState } from "react";


export const ToDo = ({id,text,setUpdateUI}) => {

    const[open,setOpen]=useState(false)

const deleTeTodo=()=>{
    axios.delete(`${baseURL}/deleteTodo/${id}`)
    .then((res)=>{
        // console.log(res.data);
        setUpdateUI((prev)=> !prev)
    }).catch(err=>{
        console.log("errro",err);
    })
}



   
  return (
    <div className="bg-accentLight p-4 text-gray-400 relative group">
        {text}
         
         <div className="absolute top-[50%] translate-y-[-50%] 
        right-5 mx-10 group-hover:block cursor-pointer  hover:scale-125">
              <MdEditNote size={25}  onClick={()=> setOpen(!open)}/> 
         </div>
        <div className="absolute top-[50%] translate-y-[-50%] 
        right-0 mx-4 group-hover:block cursor-pointer hover:scale-150">
            <RxCross1 size={10} onClick={deleTeTodo} />
        </div>

        { open && <POpUp  id={id} text={text} setUpdateUI={setUpdateUI} setOpen={setOpen} open={open}/>}

    </div>
  )
}
