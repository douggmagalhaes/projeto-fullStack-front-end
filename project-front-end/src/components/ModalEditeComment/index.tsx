import { useComment } from "@/contexts/commentContext"
import { useForm } from "react-hook-form"
import FormEditeComment from "../FormEditeComment"
import styles from "./styles.module.scss"

const ModalEditeComment = () => {

  const {setIsOpenModalEditeComment} = useComment()

  

  return (

    <div className={styles.div_container_modal}>

      <div className={styles.div_modal}>

        <div>

            <span>
              editar usuário
            </span>

            <span onClick={() => setIsOpenModalEditeComment(false)}>
              fechar
            </span>

        </div>

        <div>

            <FormEditeComment />

        </div>

      </div>

    </div>

  )
}

export default ModalEditeComment