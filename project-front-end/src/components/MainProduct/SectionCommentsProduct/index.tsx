import FormComments from "@/components/FormComments"
import { ProductPage } from "@/pages/[id]"
import { CommentSchemaData } from "@/schemas/comment.schemas"
import api from "@/services/api"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import CardComments from "./CardComents"
import UlComments from "./UlComments"
import styles from "./styles.module.scss"
import { useAuth } from "@/contexts/authContext"

export interface CardCommentProps {
  comment: CommentSchemaData
}

const SectionCommentsProduct = ({announcement}: ProductPage) => {

  const [commentsData, setCommentsData] = useState(null)

  const {userData} = useAuth()


  useEffect(() => {


    async function loadComments() {
      const cookies = parseCookies()
      const token = cookies.Motors_shop_token

  
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    };
      try {
        const {data} = await api.get(`/comments/anouncement/${announcement.id}`)

        
        setCommentsData(data)
      } catch (error) {
        console.log(error)
        
      }
    }
    loadComments()
  }, [])

 
  return (
    <section className={styles.section_Comments}>


      <div className={styles.div_Comments}>

        <h2 className={styles.title_comments_container}>Comentários</h2>

        <div className={styles.div_all_comments}>
           <UlComments announcement={announcement}/>
        </div>

      </div>

      <div className={styles.div_form_text_area}>

        <div className={styles.div_user_comments}>
          {userData == null ? (
            null
          ):
          <>
            <span className={styles.avatar_user}>{userData.name.charAt(0)}</span>
            <span className={styles.name_user_comment}>{userData.name}</span>
          </>
          }
          
        </div>

        <div className={styles.div_contaier}>

          <div className={styles.div_form}>
            <FormComments announcement={announcement} />
          </div>
          
        </div>
        
      </div>

     
    </section>
  )
}

export default SectionCommentsProduct