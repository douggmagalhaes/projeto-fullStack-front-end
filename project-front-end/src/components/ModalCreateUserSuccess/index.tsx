import { useAuth } from "@/contexts/authContext"
import Link from "next/link"
import styles from "./styles.module.scss"


const ModalCreateUserSuccess = () => {

  const {setIsOpenModalCreateUserSuccess} = useAuth()

  return (

    <div className={styles.div_container_modal}>

      <div className={styles.div_modal}>

          <div className={styles.div_title_form}>

            <h2 className={styles.title_form}>Sucesso!</h2>

            <span className={styles.close_modal} onClick={() => setIsOpenModalCreateUserSuccess(false)}>X</span>

          </div>

          <div className={styles.div_container_message_success}>

            <h2 className={styles.title_message_success}>Seu anúncio foi criado com sucesso!</h2>

            <p className={styles.message_success}>
            Agora você poderá ver seus negócios crescendo em grande escala.
            </p>
            
          </div>

          <div className={styles.div_container_button}>

            <Link href={"/login"}>
              <button className={styles.button}>Ir para o login</button>
            </Link> 

          </div>
        
      </div>
    </div>

  )
}

export default ModalCreateUserSuccess