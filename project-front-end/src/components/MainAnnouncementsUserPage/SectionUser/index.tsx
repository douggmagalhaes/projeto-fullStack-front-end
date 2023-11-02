
import { useAnnouncement } from "@/contexts/announcementContext"
import { useAuth } from "@/contexts/authContext"
import { useComment } from "@/contexts/commentContext"
import { AnnouncementsUserPageProps } from "@/pages/AnnouncementsUserPage/[id]"
import api from "@/services/api"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"


const SectionUser = () => {

  

  const {userSellerData, setUserSellerData} = useAuth()

  const {isOpenModal, setIsOpenModal} = useAnnouncement()

  const router = useRouter()
  const {id} = router.query

 

  useEffect(() => {


    async function loadUser() {
     
      try {

        const {data} = await api.get(`/users/${id}`)

        setUserSellerData(data)
      } catch (error) {

        console.log(error)
        
      }
    }
    loadUser()
  }, [])

  const toggleModal = () => setIsOpenModal(!isOpenModal)


  
  return (
    <section className={styles.section_user_detail}>
      <div>
        {userSellerData &&

        <div className={styles.div_container_user_detail}>

          
            <span className={styles.user_avantar}>{userSellerData.name.charAt(0)}</span>
          

          <div className={styles.div_user_detail}>
            <span className={styles.user_name}>{userSellerData.name}</span>
            <span className={styles.user_detail}>Anunciante</span>
          </div>

          
            <p className={styles.user_description}>{userSellerData.description}</p>
          

          
            <button type="button" onClick={toggleModal} className={styles.button}>Criar anuncio</button>
          

        </div>
        
        }
      </div>
    </section>
  )
}

export default SectionUser
