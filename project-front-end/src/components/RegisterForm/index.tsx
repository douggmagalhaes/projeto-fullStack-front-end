//import { LoginSchema, LoginSchemaData } from "@/schemas/login.schema"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
//import { useAuth } from "@/contexts/authContext";
import { RegisterSchema, RegisterSchemaData } from "@/schemas/register.Schema";
import { useAuth } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss"


const RegisterForm = () => {

  const [userRegister, setUserRegister] = useState({})

  const [isCheck, setIsCheck] = useState(true)
  const [isCheckFalse, setIsCheckFalse] = useState(false)
  const [isCheckTrue, setIsCheckTrue] = useState(true)

  const {register, handleSubmit, formState: { errors }} = useForm<RegisterSchemaData>({
    resolver: zodResolver(RegisterSchema)
  })

  const { registerUser } = useAuth();

  const onFormSubmit = (formData: RegisterSchemaData) => {
   let result = {}
    if(formData.is_seller == "true"){
      
      result =  {
        name: formData.name, 
        email: formData.email,
        cpf: formData.cpf,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth, 
        description: formData.description,
        is_seller: true, 
        password: formData.password, 
        address: {
          zipCode: formData.address.zipCode,
          state: formData.address.state,
          city: formData.address.city,
          street: formData.address.street,
          number: formData.address.number,
          complement: formData.address.complement,
        }
      }

    registerUser({...formData, is_seller: true});

    }else {
      result =  {...formData ,is_seller: false}
      registerUser({...formData, is_seller: false});
    }
    
    //registerUser(result);
   //console.log("useState:",userRegister)
   //console.log("result:",result)
  };

  
  function toggleCheck(value: boolean) {

    setIsCheck(value)

    if(value == true){
      setIsCheckTrue(true)
      setIsCheckFalse(false)
    }

    if(value == false){
      setIsCheckTrue(false)
      setIsCheckFalse(true)

    }
  }

  
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
      
      <div className={styles.inputs_container}>
        <label htmlFor="name">
          Nome
        </label>
        <input 
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
        {...register("description")}></textarea>
      </div>
      {errors.description && <span>{errors.description.message}</span>}

      
      <h2>informações de endereço</h2>

      <div className={styles.inputs_container}>
        <label htmlFor="zipCode">
          Cep
        </label>
        <input 
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
          type="text" 
          placeholder="Digite o estado"
          {...register("address.state")}
          />
          {errors.address?.state && <span>{errors.address?.state.message}</span>}
        </div>

        <div className={styles.inputs_container}>
          <label htmlFor="city">
            Cidade
          </label>
          <input 
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
          type="text" 
          placeholder="Ex: apt 12"
          {...register("address.complement")}
          />
          {errors.address?.complement && <span>{errors.address?.complement.message}</span>}
        </div>


      </div>

      
      <h2>tipo de conta</h2>

      <div className={styles.inputs_container_type}>
        <label onClick={() => toggleCheck(true)} className={isCheckTrue == true ? styles.input_type_true : styles.input_type_false} htmlFor="seller">Vendedor</label>
        <input type="radio" id="seller"  value="true" {...register("is_seller")} checked />
        <label onClick={() => toggleCheck(false)} className={isCheckFalse == true ? styles.input_type_true : styles.input_type_false} htmlFor="buyer">Comprador</label>
        <input type="radio" id="buyer"  value="false" {...register("is_seller")}/>
      </div>

    
      <div className={styles.inputs_container}>
        <label htmlFor="password">
          senha
        </label>
        <input 
        type="password" 
        placeholder="sua senha"
        {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      
      <div className={styles.button_container}>
        <button className={styles.button_register}>
          Finalizar cadastro
        </button>
      </div>
      
    </form>
  )
}

export default RegisterForm

