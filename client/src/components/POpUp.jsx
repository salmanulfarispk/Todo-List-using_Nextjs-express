import { useState } from "react"


export const POpUp = ({id,text,setUpdateUI,setOpen,open}) => {

    const [textvalue,setTextValue]=useState(text)

  return (
    <div className="mt-1">

        <input type="text" value={textvalue} onChange={(e)=> setTextValue(e.target.value)}
          className="py-2 px-3 rounded-md outline-none w-[50%] bg-accent mr-2 "
        />
        <button className="py-2 px-2 bg-accentDark rounded-md hover:bg-accent"
          onClick={()=> setOpen(!open)}
        >save</button>
    </div>
  )
}
