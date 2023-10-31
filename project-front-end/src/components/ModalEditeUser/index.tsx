import { useAuth } from "@/contexts/authContext";
import FormEditeUser from "./FormEditeUser"
import styles from "./styles.module.scss"


const ModalEditeUser = () => {

  const { authUserOn, setAuthUserOn, userData, isOpenModalUserEdite, toggleModalUserMenu } = useAuth();

  return (
    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>
        <h2>user edite</h2>
        <button type="button" onClick={() => toggleModalUserMenu("edite user close")}>fechar</button>
      <FormEditeUser />
      </div>
    </div>
  )
}

export default ModalEditeUser