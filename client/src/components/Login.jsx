import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";


export const Login = () => {

  return (
    <div className="min-h-screen grid place-items-center ">
     <button className="bg-white px-8 py-4 rounded-md font-semibold flex items-center gap-2"
      onClick={()=> signIn("google")}
     >
     <FcGoogle size={26}/>Sign In With Google
     </button>
    </div>
  )
}
