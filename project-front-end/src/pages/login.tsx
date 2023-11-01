
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainLogin from "@/components/MainLogin";
import { NextPage } from "next";



const Login:NextPage = () => {
  return (
    <>
    <Header />
    <MainLogin/>
    <Footer />
    </>
  )
}

export default Login