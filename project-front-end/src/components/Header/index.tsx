import { useAuth } from "@/contexts/authContext"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import Button from "../Button"
import MenuUserOff from "../MenuUserOff"
import MenuUserOn from "../MenuUserOn"
import styles from "./styles.module.scss"
//import { useSession, UseSessionOptions, getProviders, //getSession } from "next-auth/react"
//import { SessionStore } from "next-auth/core/lib/cookie"
import jwt_decode from "jwt-decode";
import api from "@/services/api"
interface IUser {
  id: string,
  email: string,
  is_seller: boolean
}

const Header = () => {

  //SessionStore
  //const { data: session, status } = useSession()
  //se o usuário estiver logado - mostra menu logado
  //const { authUserOn, setAuthUserOn } = useAuth();


//const [userOn, setUserOn] = useState(false)
  //const [autht, setAutht] = useState(status)


  //console.log(session)
const {userData, setUserData, userOn, setUserOn} = useAuth()

//console.log("usuário aqui", userData)

  //antes, tava com erro

useEffect(() => {

  async function loadUserOn(){
    try {
      const cookiesTest = parseCookies()
      const userId = cookiesTest.Motors_shop_user

      //const userDecoded: IUser = jwt_decode(tokenTeste);

      const {data} = await api.get(`/users/${userId}`)

      //console.log(userDecoded.id)

      //console.log(data)
      setUserData(data)
      setUserOn(true)

      
    } catch (error) {
      setUserOn(false)
      console.log(error)
      
    }
  }
  loadUserOn()

}, [])

//console.log("fora", userData.name)
  
  



  //const { data: session, status } = useSession()


  //if(status === "authenticated"){
    //console.log(status)
    //setUserOn(true)
    //return
    //setAuthUserOn(true)
  //}else{
    //setAuthUserOn(false)
  //}

  //console.log(status)
  //if(status === "authenticated"){
    //setUserOn(true)
  //}

  

  
  /*
  const customStyles = {
    customStyles: ".buttonTest"
  };
*/
  return (
    <header className={styles.header_menu} id="header">
      <div className={styles.header_div}>
        <div className={styles.div_logo}>
          

        <Link href={`/`}>
           <p className={styles.logo_motors}>Motors <span className={styles.logo_shop}>shop</span></p>
        </Link>
         
        </div>
        {userOn? (
          <MenuUserOn />
        ): <MenuUserOff/>}
        
      </div>
      
     
    </header>
  )

}

export default Header