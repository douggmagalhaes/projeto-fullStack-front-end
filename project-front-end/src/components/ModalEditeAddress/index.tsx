import { useAuth } from "@/contexts/authContext";
import FormEditeAddress from "./FormEditeAddress"
import styles from "./styles.module.scss"

const ModalEditeAddress = () => {

  //toggleModalEditeUser

  const {toggleModalUserMenu} = useAuth();

  
  return (

    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>
         <div className={styles.div_title_form}>

            <h2 className={styles.title_form}>Editar perfil</h2>
            <span className={styles.close_modal} onClick={() => toggleModalUserMenu("edite address close")}>X</span>

          </div>

          <div className={styles.div_form}>

          <span className={styles.div_form_span}>Informações de endereço</span>

             <FormEditeAddress  />

          </div>

      </div>
    </div>

  )
}

export default ModalEditeAddress