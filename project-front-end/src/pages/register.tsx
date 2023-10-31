import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainRegister from "@/components/MainRegister"
import { NextPage } from "next"
import styles from "./styles.module.scss"

const Register:NextPage = () => {
  return ( 
    <div className={styles.div_container}>
      <Header/>
      <MainRegister/>
      <Footer />
    </div>
    
  )
}

export default Register