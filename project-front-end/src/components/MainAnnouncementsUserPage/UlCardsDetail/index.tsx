import CardDetailProduct from "@/components/CardDetailProduct"
import { useAnnouncement } from "@/contexts/announcementContext"
import { AnnouncementsUserPageProps } from "@/pages/AnnouncementsUserPage/[id]"
import { AnnouncementData } from "@/schemas/announcement.schamas"

interface UlCardsDetailProps {
  announcements: AnnouncementData[],
  //comments: CommentSchemaData[]
}

//<CardDetailProduct />
const UlCardsDetail = () => {

   {/*
    <ul>
      {readAllAnnouncementForOneUser.map((announcement: AnnouncementData) => {
        return <CardDetailProduct key={announcement.id} announcement={announcement} />
      })}
     
    </ul>
     */}

  const {readAllAnnouncementForOneUser, setReadAllAnnouncementForOneUser} = useAnnouncement()

  
  return (

    <>
    <div> ala</div>
    </>

   
  )

   
}

export default UlCardsDetail