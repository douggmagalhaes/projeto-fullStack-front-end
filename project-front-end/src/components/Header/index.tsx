import { useAuth } from "@/contexts/authContext"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import Button from "../Button"
import MenuUserOff from "../MenuUserOff"
import MenuUserOn from "../MenuUserOn"
import styles from "./styles.module.scss"
import jwt_decode from "jwt-decode";
import api from "@/services/api"
interface IUser {
  id: string,
  email: string,
  is_seller: boolean
}

const Header = () => {

  
const {userData, setUserData, userOn, setUserOn} = useAuth()


useEffect(() => {

  async function loadUserOn(){
    try {
      const cookiesTest = parseCookies()
      const userId = cookiesTest.Motors_shop_user

      

      const {data} = await api.get(`/users/${userId}`)

    
      setUserData(data)
      setUserOn(true)

      
    } catch (error) {
      setUserOn(false)
      
      
    }
  }
  loadUserOn()

}, [])


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