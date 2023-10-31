import Link from "next/link"
import { useState } from "react"
import Button from "../Button"
import styles from "./styles.module.scss"

const MenuUserOff = () => {

  const [buttonOpenClose, setButtonOpenClose] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const handleBtnOpenClose = () => {
    if (buttonOpenClose) {
      setButtonOpenClose(false);
      setOpenMenu(false)
    } else {
      setButtonOpenClose(true);
      setOpenMenu(true)
    }
  };


  return (
    <nav className={styles.nav_header}>
        <ul className={styles.ul_header}>
          <li>
            <Link href={`/login`}>
              <Button stylesType="button_login">Fazer Login</Button>
            </Link>
          </li>
          <li>
          <Link href={`/register`} >
            <Button stylesType="button_register">Cadastrar</Button>
          </Link>
          </li>
        </ul>
        <div className={styles.div_btn_hamburguer}>
          {buttonOpenClose? (
            <button onClick={() => handleBtnOpenClose()}>close</button>
          ): <button onClick={() => handleBtnOpenClose()}>open</button>}
            
          </div>
          {openMenu? (
            <ul className={styles.ul_header_mobile}>
            <li>
            <Link href={`/login`}>
              <Button stylesType="button_login">Fazer Login</Button>
            </Link>
            </li>
            <li>
            <Link href={`/register`} >
            <Button stylesType="button_register_mobile">Cadastrar</Button>
          </Link>
            </li>
          </ul>
          ): null}
          
      </nav>
  )
}

export default MenuUserOff