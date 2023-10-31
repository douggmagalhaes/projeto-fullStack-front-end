//import { AnnouncementEdite, AnnouncementEditeData } from "@/schemas/announcement.schamas";
//import { zodResolver } from "@hookform/resolvers/zod";
//import { useFieldArray, useForm } from "react-hook-form";
import { useAnnouncement } from "@/contexts/announcementContext"
import FormEditeAnnouncement from "./FormEditeAnnouncement"
import styles from "./styles.module.scss"

const ModalEditAnnouncement = () => {
  //AnnouncementEdite
//AnnouncementEditeData

//removeAnnouncements
const {toggleModalEdite} = useAnnouncement()


  return (
    <div className={styles.div_container_modal}>
      <div className={styles.div_modal}>

        <h2>Editar anúncio</h2>

        <button type="button" onClick={toggleModalEdite}>fechar</button>

        <FormEditeAnnouncement /> 

      </div>
    </div>
  )
}

export default ModalEditAnnouncement