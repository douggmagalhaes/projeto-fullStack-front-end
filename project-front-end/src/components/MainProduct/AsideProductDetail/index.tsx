//import { AnnouncementProps } from "@/pages/[id]"
import CardsImg from "@/components/CardsImg"
import { useAuth } from "@/contexts/authContext"
import { ProductPage } from "@/pages/[id]"
import Link from "next/link"
//import CardComments from "./CardComents"
//talvez precise da tipagem aqui
import styles from "./styles.module.scss"


const AsideProductDetail = ({announcement}: ProductPage) =>{

/*

 {announcementsData.map((announcement: AnnouncementData) => {
              return <CardDetailProduct key={announcement.id} announcement={announcement} />
              })}

*/

  //console.log(announcement.user)
  //serachUser, setSearchUser
  return (
    <aside className={styles.aside_container}>


      <div className={styles.div_container}>

        <div className={styles.div_announcement_photos}>

          <span className={styles.title_photos}>Fotos</span>

          <ul className={styles.ul_announcement_photos}>
            {announcement.image.map((img) => {
              return <CardsImg  key={img.id} img={img} />
            })}
          </ul>
          
        </div>

        <div className={styles.div_container_user}>

      
          <div className={styles.div_user}>

            <span className={styles.avatar}> 
                {announcement.user.name.charAt(0)}
            </span>

            <h2 className={styles.user_name}>{announcement.user.name}</h2>

          </div>

          <div className={styles.user_description}>

              <p className={styles.description}>
                {announcement.user.description}
              </p>

          </div>

          <div className={styles.div_button}>

            <Link href={`AnnouncementsUserPage/${announcement.user.id}`}>

                <button className={styles.button}>Ver todos os anúncios</button>

             </Link>

          </div>


        </div>

        

      </div>
      
      
    </aside>
  )
}

export default AsideProductDetail