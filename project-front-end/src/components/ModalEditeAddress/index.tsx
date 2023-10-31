import { useAuth } from "@/contexts/authContext";
import FormEditeAddress from "./FormEditeAddress"
import styles from "./styles.module.scss"

const ModalEditeAddress = () => {

  //toggleModalEditeUser

  const {toggleModalUserMenu} = useAuth();

  
  return (

    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>
        <h2>Editar endereço</h2>
        <button type="button" onClick={() => toggleModalUserMenu("edite address close")}>fechar</button>
      <FormEditeAddress  />
      </div>
    </div>

  )
}

export default ModalEditeAddress