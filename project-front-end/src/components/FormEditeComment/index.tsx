import { useComment } from "@/contexts/commentContext";
import { EditeCommentSchema, EditeCommentSchemaData } from "@/schemas/comment.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FormEditeComment = () => {

  //commentIdEdite, setCommentIdEdite, editeComment
  const {commentIdEdite, editeComment} = useComment()

  const {register, handleSubmit, formState: { errors }} = useForm<EditeCommentSchemaData>({
    resolver: zodResolver(EditeCommentSchema)
  })

//EditeCommentSchema EditeCommentSchemaData
  const onFormSubmit = (formData: EditeCommentSchemaData) => {

    editeComment({...formData}, commentIdEdite);

  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      
      <div>
        <label htmlFor="comment">
          Comentário
        </label>
        <textarea id="comment" placeholder="Edite seu comentário"
        {...register("comment") }></textarea>
        {errors.comment && <span>{errors.comment.message}</span>}
      </div>
      

      <div>
        <button>Salvar Alterações</button>
      </div>

    </form>
  )
}

export default FormEditeComment