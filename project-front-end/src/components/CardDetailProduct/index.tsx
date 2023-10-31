import { useAnnouncement } from "@/contexts/announcementContext";
import { useAuth } from "@/contexts/authContext";
import api from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./styles.module.scss"

const CardDetailProduct = ({announcement}) => {


  const {isOpenModalEditeAnnouncement, setIsOpenModalEditeAnnouncement, announcementId, setAnnouncementId, setReadAnnouncemntForId, readAnnouncemntForId, readOnlyOneAnnouncementForId } = useAnnouncement()

  const {userData} = useAuth()
 
  useEffect(() => {

    readOnlyOneAnnouncementForId()

    async function loadAnnouncement(){
      try {
        const {data} = await api.get(`/anouncements/${announcementId}`)

        // eu estava buscando diretamente no card
        //setReadAnnouncemntForId(data)
      } catch (error) {
        console.log("deu erro ao carregar o anuncio por id no form edite")
        
      }

    }

   
    
loadAnnouncement()

  },[announcementId, isOpenModalEditeAnnouncement])

  
  const toggleModal = () => {
setIsOpenModalEditeAnnouncement(!isOpenModalEditeAnnouncement)

     
  }
  
//{userData.id === announcement.userId}
//console.log(announcement.userId)
  return (
    <li className={styles.li_card} onClick={ () => setAnnouncementId(announcement.id) }>
      <figure className={styles.figure_img}>
        <Image 
        className=""
        width={260}
        height={150}
        src={announcement.coverImage}
        alt="capa anuncio"
        priority={false}
        />
      </figure>
      <div className={styles.div_details}>
        <p className={styles.name_model}>{announcement.brand} - {announcement.model}</p>
        <p className={styles.description}>{announcement.description.slice(0, 50)} {announcement.description.length >= 50 ? "..." : null}</p>
      </div>
      <div className={styles.vehicle_detail}>
        <div className={styles.vehicle_detail_year}>
          <p className={styles.vehicle_km}>{announcement.km}km</p>
          <p className={styles.vehicle_year}>{announcement.year}</p>
        </div>
        <div className={styles.div_vehicle_price}>
          <p>R${announcement.price},00</p>
        </div>
      </div>
    
    {userData == null? (
      null
    ):
    
    <div className={styles.div_buttons}>
      {userData.id === announcement.userId && (

        <>

          <button type="button" onClick={toggleModal} className={styles.buttons_edite}>Editar</button>

          <Link href={`/${announcement.id}`}>
            <button className={styles.buttons_detail}>Ver detalhes</button>
          </Link>

        </>
      )}
        
      </div>
    
    }
      

    </li>
  )
}

export default CardDetailProduct