import { AnnouncementsUserPageProps } from "@/pages/AnnouncementsUserPage/[id]"
import { AnnouncementData } from "@/schemas/announcement.schamas"
import { Dispatch, SetStateAction } from "react"
import SectionCards from "./SectionCards"
import SectionUser from "./SectionUser"
import Image from "next/image";

import styles from "./styles.module.scss"

interface MainAnnouncementsUserPageProps {
  announcements: AnnouncementData[],
  //comments: CommentSchemaData[]

}

const MainAnnouncementsUserPage = () => {

  return (
    <main className={styles.main_container}>
      <div className={styles.div_container}>

        <div className={styles.div_sections}>

          <SectionUser />

          <SectionCards />

        </div>

      </div>
    </main>
  )
}

export default MainAnnouncementsUserPage