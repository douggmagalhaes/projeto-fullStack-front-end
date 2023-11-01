import { useAuth } from "@/contexts/authContext"
import { RegisterEditeSchema, RegisterEditeSchemaData } from "@/schemas/register.Schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"

const FormEditeUser = () => {

  const {editeUser, userData, toggleModalUserMenu, setIsOpenModalUserEdite, setIsOpenModalUserDelete, deleteUser} = useAuth()

  const {register, handleSubmit, formState: { errors }} = useForm<RegisterEditeSchemaData>({
    resolver: zodResolver(RegisterEditeSchema)
  })


  const onFormSubmit = (formData: RegisterEditeSchemaData) => {

    editeUser({...formData});

  };

  function handleDeleteUser() {

    const cookiesTest = parseCookies()
    const userId = cookiesTest.Motors_shop_user

    deleteUser()


  }


  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
      
      <div className={styles.inputs_container}>
        <label htmlFor="name">
          Nome
        </label>
        <input 
        defaultValue={userData.name}
        type="text" 
        placeholder="digite seu nome"
        {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div className={styles.inputs_container}>
        <label htmlFor="email">
          E-mail
        </label>
        <input 
        defaultValue={userData.email}
        type="email" 
        placeholder="example@email.com"
        {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className={styles.inputs_container}>
        <label htmlFor="cpf">
          Cpf
        </label>
        <input 
        defaultValue={userData.cpf}
        type="number" 
        placeholder="Digite seu cpf"
        {...register("cpf")}
        />
        {errors.cpf && <span>{errors.cpf.message}</span>}
      </div>

      <div className={styles.inputs_container}>
        <label htmlFor="phone">
          Phone
        </label>
        <input 
         defaultValue={userData.phone}
        type="tel" 
        placeholder="(00) 0000-0000"
        {...register("phone")}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      <div className={styles.inputs_container}>
        <label htmlFor="date">
          Data de nascimento
        </label>
        <input 
        defaultValue={userData.dateOfBirth}
        type="date"
        {...register("dateOfBirth")}
       />
        {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}
      </div>

      <div className={styles.inputs_container}>
        <label htmlFor="description">
          Descrição
        </label>
        <textarea id="description" placeholder="Digite uma descrição"
        {...register("description") } defaultValue={userData.description}></textarea>
      </div>
      {errors.description && <span>{errors.description.message}</span>}

      <div className={styles.buttons_container}>

        <button type="button" className={styles.button_cancel} onClick={() => toggleModalUserMenu("edite user close")}>Cancelar</button>
        <button type="button" onClick={handleDeleteUser} className={styles.button_remove}>Excluir Perfil</button>
        <button className={styles.button_save}>Salvar Alterações</button>

      </div>

    </form>
  )
}

export default FormEditeUser

function deleteUser(userId: string) {
  throw new Error("Function not implemented.")
}
