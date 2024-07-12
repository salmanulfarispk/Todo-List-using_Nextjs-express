import { baseURL } from "@/utils/constant"
import axios from "axios"
import { useState } from "react"


export const POpUp = ({id,text,setUpdateUI,setOpen,open}) => {

    const [textvalue,setTextValue]=useState(text)

    const updateTodo=()=>{
      axios.patch(`${baseURL}/editTodo/${id}`,{
        text: textvalue
      })

      .then(res=>{
        setTextValue("")
        setUpdateUI((prevState) => !prevState)
     })
     .catch(err=>{
       console.log(err);
     })
    }

  return (
    <div className="mt-1">

        <input type="text" value={textvalue} onChange={(e)=> setTextValue(e.target.value)}
          className="py-2 px-3 rounded-md outline-none w-[50%] bg-accent mr-2 "
        />
        <button className="py-2 px-2 bg-accentDark rounded-md hover:bg-accent"
          onClick={()=> {
            setOpen(!open) ;
            updateTodo()
          }}
        >save</button>
    </div>
  )
}
