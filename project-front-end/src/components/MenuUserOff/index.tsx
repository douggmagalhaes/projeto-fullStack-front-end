import Link from "next/link"
import Button from "../Button"
import styles from "./styles.module.scss"

const MenuUserOff = () => {
  return (
    <nav className={styles.nav_header}>
        <ul className={styles.ul_header}>
          <li>
            <Link href={`/login`}>
              {/*
               <button className={styles.button_login}>
              Fazer Login
              </button>
            */
            }
              <Button stylesType="button_login">Fazer Login</Button>
            </Link>
          </li>
          <li>
          <Link href={`/register`} >
            {/**
              <button className={styles.button_register}>
               Cadastrar
            </button>
             
             */}
            <Button stylesType="button_register">Cadastrar</Button>
          </Link>
          </li>
        </ul>
      </nav>
  )
}

export default MenuUserOff