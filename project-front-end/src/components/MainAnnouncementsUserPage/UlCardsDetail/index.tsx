import CardDetailProduct from "@/components/CardDetailProduct"
import { useAnnouncement } from "@/contexts/announcementContext"
import { AnnouncementsUserPageProps } from "@/pages/AnnouncementsUserPage/[id]"
import { AnnouncementData } from "@/schemas/announcement.schamas"

interface UlCardsDetailProps {
  announcements: AnnouncementData[],
 
}


const UlCardsDetail = () => {

  const {readAllAnnouncementForOneUser, setReadAllAnnouncementForOneUser} = useAnnouncement()

  
  return (

    <>
    <div> ul</div>
    </>

   
  )

   
}

export default UlCardsDetail