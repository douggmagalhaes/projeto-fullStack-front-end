//import { NextPage } from "next";
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
    </>
  )
}

export default Login