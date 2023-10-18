import Link from "next/link"
import { useState } from "react"
import Button from "../Button"
import MenuUserOff from "../MenuUserOff"
import MenuUserOn from "../MenuUserOn"
import styles from "./styles.module.scss"

const Header = () => {

  //se o usuário estiver logado - mostra menu logado
  const [userOn, setUserOn] = useState(false)

  
  /*
  const customStyles = {
    customStyles: ".buttonTest"
  };
*/
  return (
    <header className={styles.header_menu} id="header">
      <div className={styles.header_div}>
        <div className={styles.div_logo}>
          <p className={styles.logo_motors}>Motors <span className={styles.logo_shop}>shop</span></p>
        </div>
        {userOn? (
          <MenuUserOn/>
        ): <MenuUserOff/>}
        
      </div>
      
     
    </header>
  )

}

export default Header