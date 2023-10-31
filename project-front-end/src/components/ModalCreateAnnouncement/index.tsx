//import { useAnnouncement } from "@/contexts/announcementContext";
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
      <button type="button" onClick={() => setIsOpenModal(false)}>fechar</button>
        <FormCreateAnnouncement />
      </div>
    </div>
  )
}

export default ModalCreateAnnouncement