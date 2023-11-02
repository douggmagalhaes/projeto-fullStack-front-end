
import { useAnnouncement } from "@/contexts/announcementContext";
import FormCreateAnnouncement from "./FormCreateAnnouncement";
import styles from "./styles.module.scss"

interface modalProps {
  toggleModal: () => void;
}

const ModalCreateAnnouncement = () => {


  const {isOpenModal, setIsOpenModal, toggleModal} = useAnnouncement()
  
  return (
    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>

        <div className={styles.div_title_form}>

          <h2 className={styles.title_form}>Criar Anúncio</h2>
          <span className={styles.close_modal} onClick={() => setIsOpenModal(false)}>X</span>

        </div>

        <div className={styles.div_form}>

          <span className={styles.div_form_span}>Informações do veículo</span>

          <FormCreateAnnouncement />

        </div>
  
        
      </div>
    </div>
  )
}

export default ModalCreateAnnouncement