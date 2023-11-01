import { useAnnouncement } from "@/contexts/announcementContext"
import styles from "./styles.module.scss"

const ModalDeleteAnnouncement = () => {

  const {announcementId, removeAnnouncements, setIsOpenModalDeleteAnnouncement} = useAnnouncement()

  const handleCloseModalDelete = () => {

    setIsOpenModalDeleteAnnouncement(false)


  }
  return (
    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>

      <div className={styles.div_title_form}>

        <h2 className={styles.title_form}>Excluir anúncio</h2>

        <span className={styles.close_modal} onClick={handleCloseModalDelete}>X</span>

      </div>

      <div className={styles.div_container_message_delete}>

        <h2 className={styles.title_message_delete}>Tem certeza que deseja remover este anúncio?</h2>

        <p className={styles.message_delete}>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
        </p>

      </div>

      <div className={styles.div_container_buttons}>
          <button className={styles.button_cancel} onClick={handleCloseModalDelete}>Cancelar</button>
          <button className={styles.button_remove}  onClick={() => removeAnnouncements(announcementId)}>Sim, Excluir Anúncio </button>
      </div>
        
      </div>
    </div>
  )
}

export default ModalDeleteAnnouncement