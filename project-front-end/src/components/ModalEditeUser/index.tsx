import { useAuth } from "@/contexts/authContext";
import FormEditeUser from "./FormEditeUser"
import styles from "./styles.module.scss"


const ModalEditeUser = () => {

  const { authUserOn, setAuthUserOn, userData, isOpenModalUserEdite, toggleModalUserMenu } = useAuth();

  return (
    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>

        <div className={styles.div_title_form}>

          <h2 className={styles.title_form}>Editar perfil</h2>
          <span className={styles.close_modal} onClick={() => toggleModalUserMenu("edite user close")}>X</span>

        </div>

        <div className={styles.div_form}> 

          <span className={styles.div_form_span}>Informações pessoais</span>

          <FormEditeUser />

        </div>
        
        
      
      </div>
    </div>
  )
}

export default ModalEditeUser