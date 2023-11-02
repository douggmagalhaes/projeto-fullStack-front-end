import CardDetailProduct from "@/components/CardDetailProduct"
import { useAnnouncement } from "@/contexts/announcementContext"
import { AnnouncementsUserPageProps } from "@/pages/AnnouncementsUserPage/[id]"
import { AnnouncementData } from "@/schemas/announcement.schamas"
import api from "@/services/api"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import PaginationUserAnnouncements from "../PaginationUserAnnouncements"
import UlCardsDetail from "../UlCardsDetail"

import styles from "./styles.module.scss"

interface SectionCardsPageProps {
  announcements: AnnouncementData[],
  
 
}
const LIMIT = 16

const SectionCards = () => {

  
 const {readAllAnnouncementForOneUser, setReadAllAnnouncementForOneUser, pageNumberPagination, setPageNumberPagination, isOpenModalEditeAnnouncement, isOpenModalDeleteAnnouncement, isOpenModal} = useAnnouncement()
  
  const router = useRouter()
  const {id} = router.query
  const IdUser = `${id}`

  
  const [totalPages, setTotalPages] = useState(0)
  
  
  const [announcementsData, setAnnouncementsData] = useState([]);

  useEffect(() => {

    setAnnouncementsData([]);

    async function loadAnnouncementsForOneSeller(){

      try {
        
        const {data} = await api.get(`/anouncements/user/pagination/${IdUser}?skip=${pageNumberPagination}&take=${LIMIT}`)

       

        setAnnouncementsData(data.anouncements)
        setTotalPages(data.totalPages)
       

      } catch (error) {
        console.log(error)
        
      }

    }

    loadAnnouncementsForOneSeller()

  },[pageNumberPagination, isOpenModalEditeAnnouncement, isOpenModalDeleteAnnouncement, isOpenModal, LIMIT])

  

  return (
    <section className={styles.section_cards}>



    
    {announcementsData.length == 0 || announcementsData == undefined ? (
                <span> carregando</span>
            ): null }
            {announcementsData == null ? (
        
            <span>deu erro</span>
            ):
            <div className={styles.div_ul_cards}>

              <ul className={styles.ul_cards}>

              {announcementsData.map((announcement: AnnouncementData) => {
              return <CardDetailProduct key={announcement.id} announcement={announcement} />
              })}

              </ul>

            </div>
           
            

            }

    

          <div className={styles.div_pagination}>

            <PaginationUserAnnouncements  totalPages={totalPages} />

          </div>

    </section>
  )
}

export default SectionCards