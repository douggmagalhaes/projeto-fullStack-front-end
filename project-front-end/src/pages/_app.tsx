//import "@/styles/globals.css";
import "../scss/global.scss"
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/contexts/authContext";
import { CommentProvider } from "@/contexts/commentContext";
import { AnnouncementProvider } from "@/contexts/announcementContext";
//import { NextAuthSessionProvider } from "@/contexts/sessionProvider";
//import NextAuthSessionProvider from "@/contexts/sessionProvider";
//import { SessionProvider } from "next-auth/react"

//session
//pageProps
//{ session, ...pageProps },
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     {/**{children}
      * session={session}
      * 
     */}

    
      {/*
    <SessionProvider session={session}>
         <AuthProvider>
          <CommentProvider>
            <Component {...pageProps} />;
          </CommentProvider>
        </AuthProvider>
      </SessionProvider>
    
    */}
     
      
         <AuthProvider>
          <AnnouncementProvider>
            <CommentProvider>
              <Component {...pageProps} />
            </CommentProvider>
          </AnnouncementProvider>
        </AuthProvider>
     
    </>
  ) 
}
