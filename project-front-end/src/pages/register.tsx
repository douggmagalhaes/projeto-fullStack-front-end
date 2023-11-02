import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MainRegister from "@/components/MainRegister"
import ModalCreateUserSuccess from "@/components/ModalCreateUserSuccess"
import { useAuth } from "@/contexts/authContext"
import { NextPage } from "next"
import styles from "./styles.module.scss"

const Register:NextPage = () => {

  const {isOpenModalCreateUserSuccess} = useAuth()

  return ( 
    <div className={styles.div_container}>
      <Header/>
      {isOpenModalCreateUserSuccess && <ModalCreateUserSuccess />}
      <MainRegister/>
      <Footer />
    </div>
    
  )
}

export default Register