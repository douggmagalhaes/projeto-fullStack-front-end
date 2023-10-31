import { AnnouncementData } from "@/schemas/announcement.schamas";
import { NextPage } from "next";

export interface AnnouncementProps {
  announcement: AnnouncementData;
}

const AnnouncementUserPage: NextPage<AnnouncementProps> = ({announcement}: AnnouncementProps) => {
  return (
    <div>
      teste
    </div>
  )
}

export default AnnouncementUserPage
