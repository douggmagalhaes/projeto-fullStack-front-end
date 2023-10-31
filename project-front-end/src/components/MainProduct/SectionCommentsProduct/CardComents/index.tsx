import { useAuth } from "@/contexts/authContext"
import { useComment } from "@/contexts/commentContext"
import { CommentSchemaData } from "@/schemas/comment.schemas"
import api from "@/services/api"
import { formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"

import styles from "./styles.module.scss"

export interface CardCommentProps {
  //announcement: AnnouncementData
  comment: CommentSchemaData
}

const CardComments = ({comment}: CardCommentProps) => {

  const {userData} = useAuth()

  const {createComment, removeComment, setCommentIdRemove, setIsOpenModalEditeComment, setCommentIdEdite} = useComment()

  function formatDateDistance(dateString) {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  }


  function toggleRemove(commentId){
    setCommentIdRemove(commentId)
    removeComment(commentId)

  }

  function toggleEdite(commentId) {

    setCommentIdEdite(commentId)

    setIsOpenModalEditeComment(true)

  }

  return (
    <li className={styles.li_comments}>

      <div className={styles.comment_user_detail}>

        <span className={styles.user_avatar}>
          D
        </span>

        <span className={styles.user_name}>{comment.user.name}</span>

        <span className={styles.date_comment}>{`${formatDateDistance(comment.createAt)}`}</span>
        

      </div>

      <div className={styles.div_comments}>

        <p className={styles.p_comments}>

        {comment.comment}

        </p>

      </div>

      {userData && (

        <div className={styles.div_edite_comments}>
         {userData.id === comment.userId ? (

              <>
                
                <span className={styles.edite} onClick={() => toggleEdite(comment.id)}>Editar</span>

                <span className={styles.remove} onClick={()=> toggleRemove(comment.id)}>Excluir</span>
              </>
  
      ): null}
      </div>

      )}
      
      
    </li>
  )
}

export default CardComments