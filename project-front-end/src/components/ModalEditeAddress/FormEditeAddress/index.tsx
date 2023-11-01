import { useAuth } from "@/contexts/authContext";
import { RegisterEditeSchema, RegisterEditeSchemaData } from "@/schemas/register.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss"

const FormEditeAddress = () => {

  const {editeAddress, userData, toggleModalUserMenu} = useAuth()

  

  const {register, handleSubmit, formState: { errors }} = useForm<RegisterEditeSchemaData>({
    resolver: zodResolver(RegisterEditeSchema)
  })


  const onFormSubmit = (formData: RegisterEditeSchemaData) => {

    editeAddress({...formData});

  };

  //defaultValue={userData.name}
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
      
      <div className={styles.inputs_container}>
        <label htmlFor="zipCode">
          Cep
        </label>
        <input
        defaultValue={userData.address.zipCode}
        type="number" 
        placeholder="digite seu cep"
        {...register("address.zipCode")}
        />
        {errors.address?.zipCode && <span>{errors.address?.zipCode.message}</span>}
      </div>

      <div className={styles.div_inputs_container}>
         <div className={styles.inputs_container}>
            <label htmlFor="state">
              Estado
            </label>
            <input 
            defaultValue={userData.address.state}
            type="text" 
            placeholder="Digite a sigla do estado"
            {...register("address.state")}
            />
            {errors.address?.state && <span>{errors.address?.state.message}</span>}
        </div>

        <div className={styles.inputs_container}>
          <label htmlFor="city">
            Cidade
          </label>
          <input 
          defaultValue={userData.address.city}
          type="text" 
          placeholder="Digite a cidade"
          {...register("address.city")}
          />
          {errors.address?.city && <span>{errors.address?.city.message}</span>}
        </div>

      </div>

     

      <div className={styles.inputs_container}>
        <label htmlFor="street">
          Rua
        </label>
        <input 
        defaultValue={userData.address.street}
        type="text" 
        placeholder="Digite o nome da rua"
        {...register("address.street")}
        />
         {errors.address?.state && <span>{errors.address?.state.message}</span>}
      </div>

      <div className={styles.div_inputs_container}>

        <div className={styles.inputs_container}>
            <label htmlFor="number">
              numero
            </label>
            <input 
            defaultValue={userData.address.number}
            type="number" 
            placeholder="Digite o número da rua"
            {...register("address.number")}
            />
            {errors.address?.number && <span>{errors.address?.number.message}</span>}
        </div>

        <div className={styles.inputs_container}>
            <label htmlFor="complement">
              complemento
            </label>
            <input 
            defaultValue={userData.address.complement}
            type="text" 
            placeholder="Ex: apt 12"
            {...register("address.complement")}
            />
            {errors.address?.complement && <span>{errors.address?.complement.message}</span>}
        </div>
        
      </div>

     

    <div className={styles.buttons_container}>

      <button type="button" onClick={() => toggleModalUserMenu("edite address close")}className={styles.button_cancel}>Cancelar</button>
      <button className={styles.button_save}>Salvar Alterações</button>

    </div>

  </form>
  )
}

export default FormEditeAddress