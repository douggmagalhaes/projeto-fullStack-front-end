
import { useAuth } from "@/contexts/authContext";
import { useState } from "react"
import styles from "./styles.module.scss"
import { FaAlignJustify } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { destroyCookie } from "nookies";



const MenuUserOn = () => {

  const { authUserOn, setAuthUserOn, userData, isOpenModalUserEdite, toggleModalEditeUser, toggleModalUserMenu, setUserData, userOn, setUserOn } = useAuth();

 

const [isOpenHamburguerMenu, setIsOpenHamburguerMenu] = useState(false)

const [isOpenHamburguerMenuMobile, setIsOpenHamburguerMenuMobile] = useState(false)

const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    if (isOpenHamburguerMenu) {
      setIsOpenHamburguerMenu(false);
    } else {
      setIsOpenHamburguerMenu(true);
    }
  };

  const handleMenuMobile = () => {
    if (isOpenHamburguerMenuMobile) {
      setIsOpenHamburguerMenuMobile(false);
      setOpenMenu(false)
    } else {
      setIsOpenHamburguerMenuMobile(true);
      setOpenMenu(true)
    }
  }

  async function logout() {


    destroyCookie(null, "Motors_shop_token")

    destroyCookie(null, "Motors_shop_user")
    
    setUserData(null)

    setIsOpenHamburguerMenu(false);

    setUserOn(false)

    
    
  }
  
  return (
    <nav className={styles.nav_header}>

      <div className={styles.div_user_menu}>

        <div className={styles.div_user_avatar} onClick={() => handleMenu()}>

          {userData !== null &&
          <>
            <div className={styles.avatar}>{userData.name.charAt(0)}</div>
            <p>{userData.name}</p>
          </>
          }
  
        </div>

        {isOpenHamburguerMenu? (
          <div className={styles.drop_menu}>
            <ul className={styles.ul_header}>

            <li>

              <button type="button" onClick={() => toggleModalUserMenu("edite user open")} className={styles.button}>Editar Perfil</button>

            </li>

            <li>

              <button onClick={() => toggleModalUserMenu("edite address open")} className={styles.button}>Editar endereço</button>

            </li>

            {userData.is_seller == true ? (

              <li>

              <Link href={`AnnouncementsUserPage/${userData.id}`}>

                 <button className={styles.button}>Meus Anúncios</button>

              </Link>

            </li>

            ): null}


            <li>

              <button className={styles.button} onClick={logout}>Sair</button>

            </li>

            </ul>
          </div>
          
        ): null}

      </div>

      <div className={styles.div_user_menu_mobile}>
     
          {isOpenHamburguerMenuMobile == false ? (
            <div onClick={handleMenuMobile}>  
              <FaAlignJustify/>
            </div>
          ):
            <div onClick={handleMenuMobile}>

            <MdOutlineClose />

            </div>
          }

        

      </div>

      {openMenu? (
          <ul className={styles.ul_header_mobile}>
              <li>

              <button type="button" onClick={() => toggleModalUserMenu("edite user open")} className={styles.button}>Editar Perfil</button>

              </li>

              <li>

              <button onClick={() => toggleModalUserMenu("edite address open")} className={styles.button}>Editar endereço</button>

              </li>

              {userData.is_seller == true ? (

              <li>

              <Link href={`AnnouncementsUserPage/${userData.id}`}>

                <button className={styles.button}>Meus Anúncios</button>

              </Link>

              </li>

              ): null}


              <li>

              <button className={styles.button} onClick={logout}>Sair</button>

              </li>
          </ul>
          ): null}
      
        
      </nav>
  )
}

export default MenuUserOn