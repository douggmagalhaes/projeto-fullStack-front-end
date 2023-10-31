//import { NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import MainLogin from "@/components/MainLogin";
import { NextPage } from "next";
import { useRouter } from "next/router";


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