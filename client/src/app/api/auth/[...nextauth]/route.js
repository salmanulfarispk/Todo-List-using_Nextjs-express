import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


const AuthHandler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
      
        })
    ],

    secret: process.env.NEXTAUTH_SECRET
});


export {AuthHandler as GET ,AuthHandler as POST}