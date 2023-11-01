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

        <div className={styles.div_title_form}>

           <h2 className={styles.title_form}>Editar anúncio</h2>

           <span className={styles.close_modal} onClick={toggleModalEdite}>X</span>

        </div>


        <div className={styles.div_form}>

          <span className={styles.div_form_span}>Informações do veículo</span>
          <FormEditeAnnouncement /> 

        </div>

      </div>

    </div>
  )
}

export default ModalEditAnnouncement