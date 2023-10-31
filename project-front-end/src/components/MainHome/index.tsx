import { HomePage } from "@/pages"
import { AnnouncementData } from "@/schemas/announcement.schamas";
import api from "@/services/api";
import { useEffect, useState } from "react";
import CardHome from "../Card"
import Footer from "../Footer";
import Pagination from "./Pagination";
import styles from "./styles.module.scss"

interface AllAnnouncements {
  anouncements: AnnouncementData[],
  currentPage: number,
  perPageNumber: number,
  total: number,
  totalPages: number

}


const LIMIT = 12

const MainHome = ({announcements}: HomePage) => {

  const [allAnnouncements, setAllAnnoucements] = useState<AllAnnouncements>(null)

  
  const [page, setpage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  
  
  const [announcementsData, setAnnouncementsData] = useState([]);
  
  

  useEffect(() => {

    setAnnouncementsData([]);

    async function loadAnnouncementPagination(){

      

    try {
      const {data} = await api.get(`/anouncements/pagination?skip=${page}&take=${LIMIT}`)

      

        setAnnouncementsData(data.anouncements)
        setTotalPages(data.totalPages)
        setAllAnnoucements(data)

     


    } catch (error) {

      console.log(error)
      
    }

    
    }

    loadAnnouncementPagination()
    
  },[page])

  
  return (

        <main className={styles.main}>

        <div className={styles.div_banner}>

          <figure className={styles.figure_img}>

            <div className={styles.img}>

              <div className={styles.div_info}>
                <h1>Motors Shop</h1>
                <h2>A melhor plataforma de anúncios de carros do país</h2>
              </div>

            </div>

          </figure>

        </div>
        <section className={styles.section_cards}>

          {announcementsData.length == 0 || announcementsData == undefined ? (
              <span> carregando</span>
          ): null }
          {announcementsData == null ? (

          <span>deu erro</span>
          ):

          <div className={styles.div_container_cards}>

              <ul className={styles.ul_card}>

              {announcementsData.map((announcement: AnnouncementData) => {
              return <CardHome key={announcement.id} announcement={announcement} />
              })}

              </ul>

          </div>


          }

          
          <div className={styles.div_controler_pagination}>
            <Pagination totalPages={totalPages} page={page} setpage={setpage} />
          </div>
          
        
        </section>

        </main>

    
  )
}

export default MainHome