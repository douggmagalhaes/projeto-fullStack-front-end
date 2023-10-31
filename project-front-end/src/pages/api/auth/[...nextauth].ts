//import api from "@/services/api";
//import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth"
//import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

type ICredentials = {
  email: string;
  password: string;
}
const authOptions: NextAuthOptions = {
  /*
  pages: {
    signIn: '/'
  },
  */
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: 'email', type: 'email' },
				password: { label: 'password', type: 'password' }
      },

      /*
      async authorize({ email, password }: any) {

        
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          body: new URLSearchParams({ email, password })
        });

        

       

        const data = await response.json();

        console.log(data.id)

        if(data.error == 'Unauthorized'){
          console.log('deu erro')
          return null
        }


        if (data) {
          return { ...data, jwt: data.jwt, userId: data.id }
        } else {
          return null
        }
      }
     */

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

        //console.log(user)

        if(user.error){
          console.log("caiu aqui")
          console.log(user.error)
        }

				if (user && response.ok) {
          //console.log("aqui", user)
          //console.log("aqui:", user.data)
					return user
				}

				return null
			},
   

    }),
    // ...add more providers here
  ],
  /*
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ account });

      user && (token.user = user)
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
  },
*/
  pages: {
    signIn: '/'
  },
  callbacks: {
    //user
		async jwt({ token, user }) {
      user && (token.user = user)
			return token
     /*
      if(user){
        token.user = user
        token.id = profile.id
      }
      */
      
			//user && (token.user = user)
      //return token
/*
      if (user) {
        console.log("caiu no if do jwt")
        token.id = user.id;
      }

      return token;
      */
     
		},
		async session({ session, token, user }){
			session = token.user as any
 //let data = {...session, tokenAcess: token}

			return session 

      /*
      if (token) {
        console.log("caiu no sessison", token)
        let userData: string | any = session.user.id
        userData = token.id;
      }
      return session;
      */
		}
	},
  secret: process.env.SECRET,
  //secret: process.env.NEXTAUTH_SECRET
}

//export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req,res, authOptions)
export default NextAuth(authOptions)





//const handler = NextAuth(authOptions)

// n existia
//export { handler as GET, handler as POST, authOptions }