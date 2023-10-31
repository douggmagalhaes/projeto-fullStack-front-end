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

  // todos os anuncios estão guardados aqui de maneira global
 const {readAllAnnouncementForOneUser, setReadAllAnnouncementForOneUser, pageNumberPagination, setPageNumberPagination, isOpenModalEditeAnnouncement, isOpenModalDeleteAnnouncement, isOpenModal} = useAnnouncement()
  //toda lógica pra pegar o id do usuário está aqui

  //console.log(pageNumberPagination)
  const router = useRouter()
  const {id} = router.query
  const IdUser = `${id}`

  //
  const [totalPages, setTotalPages] = useState(0)
  
  
  const [announcementsData, setAnnouncementsData] = useState([]);

  useEffect(() => {

    setAnnouncementsData([]);

    async function loadAnnouncementsForOneSeller(){

      try {
        // /anouncements/user/pagination/ecba6762-d591-4d89-b029-ba937cef29f7?skip=1&take=3
        const {data} = await api.get(`/anouncements/user/pagination/${IdUser}?skip=${pageNumberPagination}&take=${LIMIT}`)

        //setReadAllAnnouncementForOneUser(data)

        //console.log(data)

        setAnnouncementsData(data.anouncements)
        setTotalPages(data.totalPages)
        //setAllAnnoucements(data)

      } catch (error) {
        console.log(error)
        
      }

    }

    loadAnnouncementsForOneSeller()

  },[pageNumberPagination, isOpenModalEditeAnnouncement, isOpenModalDeleteAnnouncement, isOpenModal, LIMIT])

  

  //console.log(readAllAnnouncementForOneUser)

  //totalPages={totalPages} page={page} setpage={setpage}

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



      {/*

      {readAllAnnouncementForOneUser.length <= 0 ? (
       <h2> não possui anuncios</h2>
      ):
      <UlCardsDetail />
      }

    */}
      

    </section>
  )
}

export default SectionCards