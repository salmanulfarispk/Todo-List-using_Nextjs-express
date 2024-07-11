"use client"
import { Login } from "@/components/Login";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Home() {
   
  const [input,setInput]=useState("")

  const{data:session}=useSession()
  
  if(!session?.user){
  return <Login/>
  
  }

  useEffect(()=>{

  },[])

  return (
  <main className="max-w-[400px] mx-auto">
        <Navbar/>

        <div className="flex gap-4 mt-4">
          <input type="text"  placeholder="Add ToDos.." value={input} onChange={(e)=>setInput(e.target.value)}
            className="w-full bg-transparent rounded-md border-b border-accentDark p-2
             text-white outline-none "
          />

          <button className="bg-accentDark px-4 text-gray-400 hover:bg-accentLight rounded-md">
            Add
          </button>
        </div>


  </main>
  );
}
