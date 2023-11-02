import { useAnnouncement } from "@/contexts/announcementContext"
import styles from "./styles.module.scss"

const ModalCreateAnnouncementSuccess = () => {

  const {setIsOpenModalCreateAnnouncementSuccess} = useAnnouncement()
  return (
    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>

      <div className={styles.div_title_form}>

        <h2 className={styles.title_form}>Sucesso!</h2>

        <span className={styles.close_modal} onClick={() => setIsOpenModalCreateAnnouncementSuccess(false)}>X</span>

      </div>

      <div className={styles.div_container_message_success}>

        <h2 className={styles.title_message_success}>Seu anúncio foi criado com sucesso!</h2>

        <p className={styles.message_success}>
        Agora você poderá ver seus negócios crescendo em grande escala.
        </p>

      </div>
        
      </div>
    </div>
  )
}

export default ModalCreateAnnouncementSuccess