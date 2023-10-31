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

        <button onClick={handleCloseModalDelete}>fechar</button>

        <div>
          <h2>Excluir anúncio</h2>
        </div>
        <div>
          <button onClick={handleCloseModalDelete}>Cancelar</button>
          <button onClick={() => removeAnnouncements(announcementId)}>Sim, Excluir Anúncio </button>
        </div>
        
      </div>
    </div>
  )
}

export default ModalDeleteAnnouncement