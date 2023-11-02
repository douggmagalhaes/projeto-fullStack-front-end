import { useComment } from "@/contexts/commentContext"
import { ProductPage } from "@/pages/[id]"
import { CommentSchemaData } from "@/schemas/comment.schemas"
import api from "@/services/api"
import { formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"
import CardComments from "../CardComents"

import styles from "./styles.module.scss"

interface CommentProps {
  
  commentsData: CommentSchemaData[]
}

const UlComments = ({announcement}: ProductPage) => {
 
  const {allComments, setTakeAnnoucementId, setAllComments, commentIdRemove, takeAnnoucementId, loadAllComments} = useComment()


  
  const [commentsData, setCommentsData] = useState([])

  useEffect(() => {

    setTakeAnnoucementId(announcement.id)

    loadAllComments()


    async function loadComments() {
     
      try {
        const {data} = await api.get(`/comments/anouncement/${announcement.id}`)

        setAllComments(data)
        
      } catch (error) {
        
        
      }
    }
    loadComments()
   
  }, [commentIdRemove])

  function formatDateDistance(dateString) {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  }


  
  return (
    <ul className={styles.ul_comments}>
      {allComments.map((comment) => {
            return <CardComments key={comment.id} comment={comment}/>
          })}
    </ul>
  )
}

export default UlComments