
import { useState } from "react"
import styles from "./styles.module.scss"

const MenuUserOn = () => {

const [isOpenHamburguerMenu, setIsOpenHamburguerMenu] = useState(false)

  const handleMenu = () => {
    if (isOpenHamburguerMenu) {
      setIsOpenHamburguerMenu(false);
    } else {
      setIsOpenHamburguerMenu(true);
    }
  };

  //console.log(isOpenHamburguerMenu)
  return (
    <nav className={styles.nav_header}>
      <div className={styles.div_user_avatar} onClick={() => handleMenu()}>
        <div className={styles.avatar}>D</div>
        <p>Dougg Magalhães</p>
      </div>

      {isOpenHamburguerMenu? (
        <div className={styles.drop_menu}>
          <ul className={styles.ul_header}>
           <li>Editar Perfil</li>
           <li>Editar endereço</li>
           <li>Meus Anúncios</li>
           <li>Sair</li>
          </ul>
        </div>
        
      ): null}
        
      </nav>
  )
}

export default MenuUserOn