import { useComment } from "@/contexts/commentContext"
import { ProductPage } from "@/pages/[id]"
import { CommentSchemaData } from "@/schemas/comment.schemas"
import api from "@/services/api"
import { formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"
import CardComments from "../CardComents"

import styles from "./styles.module.scss"

interface CommentProps {
  //announcement: AnnouncementData
  commentsData: CommentSchemaData[]
}

const UlComments = ({announcement}: ProductPage) => {
 
  const {allComments, setTakeAnnoucementId, setAllComments, commentIdRemove, takeAnnoucementId, loadAllComments} = useComment()


  //console.log(allComments)
  const [commentsData, setCommentsData] = useState([])

  useEffect(() => {

    setTakeAnnoucementId(announcement.id)

    loadAllComments()


    async function loadComments() {
     
      try {
        const {data} = await api.get(`/comments/anouncement/${announcement.id}`)

        setAllComments(data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    loadComments()
    //n existia
  }, [commentIdRemove])

  function formatDateDistance(dateString) {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  }
/*
  {
    anouncementId: "11f"
    comment: "reader will"
    createAt: "2023-10-30T19:29:54.550Z"
    id: "d1a1"
    userId: "ca9171c5-83b0-4480-b1a9-aba47d487ec0"
  }
*/
  console.log(allComments)

  //takeAnnoucementId
  //console.log(takeAnnoucementId)

  //console.log("lá na ul", commentsData)
  return (
    <ul className={styles.ul_comments}>
      {allComments.map((comment) => {
            return <CardComments key={comment.id} comment={comment}/>
          })}
    </ul>
  )
}

export default UlComments