import { signOut, useSession } from "next-auth/react"
import Image from "next/image"


const Navbar = () => {

  const { data: session }=useSession()

  return (
    <div className="flex justify-between items-center py-4 text-white">
   <div className="text-3xl">
       Todo App
   </div>

    <div className="cursor-pointer" onClick={()=> signOut()}>
        <Image src={session?.user?.image} width={40} height={40} alt="dp"
         className="rounded-full"
        />
    </div>

    </div>
  )
}

export default Navbar