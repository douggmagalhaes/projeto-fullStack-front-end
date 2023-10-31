import styles from "./styles.module.scss"
import { useComment } from "@/contexts/commentContext"
import { CreateCommentData, CreateCommentSchema } from "@/schemas/comment.schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { parseCookies } from "nookies"
import { useAuth } from "@/contexts/authContext"

const ali = true
const FormComments =  ({announcement}) => {

const {userData} = useAuth()
  //disabled={page === 1}

  const {register, handleSubmit, reset} = useForm<CreateCommentData>({
    resolver: zodResolver(CreateCommentSchema)
  })

 
  const {createComment} = useComment()

  const onFormSubmit = (formData: CreateCommentData) => {
  const cookies = parseCookies()
  const token = cookies.Motors_shop_token
   

    createComment(formData, announcement.id, token)

    reset()
   
  }

  return ( 
      <form onSubmit={handleSubmit(onFormSubmit)} >
      <div>
        <textarea id="description" placeholder="Digite uma descrição"
        {...register("comment")}></textarea>
      </div>

      {
        userData && (
          <button disabled={userData == null || undefined}>Comentar</button>
        )
      }
      

      </form>
  )
}

export default FormComments