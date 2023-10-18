//import Header from "../Header"

import { HomePage } from "@/pages"
import CardHome from "../Card"

//import styles from "./mainHome.module.scss"
import styles from "./styles.module.scss"


const MainHome = ({announcements}: HomePage) => {
  return (

    <main className={styles.main}>
      <section className={styles.section_cards}>
        <ul className={styles.ul_card}>
            {announcements.map((announcement) => {
          return <CardHome key={announcement.id} announcement={announcement} />
        })}
        </ul>
      </section>
      
    </main>
  )
}

export default MainHome