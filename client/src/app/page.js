"use client"
import { Login } from "@/components/Login";
import Navbar from "@/components/Navbar";
import { ToDo } from "@/components/ToDo";
import { baseURL } from "@/utils/constant";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Home() {
   
  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])
  const [updateUI,setUpdateUI]=useState(false)


  const{data:session}=useSession()
 

  useEffect(()=>{
      
     axios.post(`${baseURL}/getTodo`,{email: session?.user?.email})
     .then((res)=>{
       setTodos(res.data.todos)
     })
     .catch((err) => {
      console.error("Error fetching todos:", err);
    });
    
  },[session?.user,updateUI])

   
  if(!session?.user){
    return <Login/>
    
    }


    const addTodo=()=>{
      axios.post(`${baseURL}/addtodo`,{
        email: session.user?.email,
        text: input
      })

      .then(res=>{
         setInput("")
         setUpdateUI((prevState) => !prevState)
      })
      .catch(err=>{
        console.log(err);
      })
    }

   

  return (
  <main className="max-w-[400px] mx-auto">
        <Navbar/>

        <div className="flex gap-4 mt-4">
          <input type="text"  placeholder="Add ToDos.." value={input} onChange={(e)=>setInput(e.target.value)}
            className="w-full bg-transparent rounded-md border-b border-accentDark p-2
             text-white outline-none "  
          />

          <button className="bg-accentDark px-4 text-gray-400 hover:bg-accentLight rounded-md" onClick={addTodo}>
            Add
          </button>
        </div>

        <ul className="space-y-4 pt-8">
            {todos.map((item)=>(
              <ToDo key={item._id} id={item._id} text={item.text} setUpdateUI={setUpdateUI}/>
            ))}
        </ul>


  </main>
  );
}
