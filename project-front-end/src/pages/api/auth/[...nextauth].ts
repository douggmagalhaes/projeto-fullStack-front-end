
import NextAuth, { NextAuthOptions } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";

type ICredentials = {
  email: string;
  password: string;
}
const authOptions: NextAuthOptions = {
 
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: 'email', type: 'email' },
				password: { label: 'password', type: 'password' }
      },

     
      async authorize(credentials, req) {
				const response = await fetch('http://localhost:3001/login', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password
					})
				})

				const user = await response.json()

        

        if(user.error){
          console.log("caiu aqui")
          console.log(user.error)
        }

				if (user && response.ok) {
          
					return user
				}

				return null
			},
   

    }),
   
  ],
  
  pages: {
    signIn: '/'
  },
  callbacks: {
    
		async jwt({ token, user }) {
      user && (token.user = user)
			return token
     
		},
		async session({ session, token, user }){
			session = token.user as any

			return session 

     
		}
	},
  secret: process.env.SECRET,
  
}


export default NextAuth(authOptions)

