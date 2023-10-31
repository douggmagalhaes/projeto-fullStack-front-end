//import { LoginSchema, LoginSchemaData } from "@/schemas/login.schema"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
//import { useAuth } from "@/contexts/authContext";
import { RegisterSchema, RegisterSchemaData } from "@/schemas/register.Schema";
import { useAuth } from "@/contexts/authContext";
import { useState } from "react";

//RegisterSchema
//RegisterSchemaData
const RegisterForm = () => {

  const [userRegister, setUserRegister] = useState({})

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

  
  return (
  <div>
    <h2>login</h2>
    <form onSubmit={handleSubmit(onFormSubmit)}>
      
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
        <label htmlFor="date">
          Data de nascimento
        </label>
        <input 
        type="date"
        {...register("dateOfBirth")}
       />
        {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}
      </div>
      <div>
        <label htmlFor="description">
          Descrição
        </label>
        <textarea id="description" placeholder="Digite uma descrição"
        {...register("description")}></textarea>
      </div>
      {errors.description && <span>{errors.description.message}</span>}

      
      <h2>informações de endereço</h2>
      <div>
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
      <div>
        <label htmlFor="state">
          Estado
        </label>
        <input 
        type="text" 
        placeholder="Digite a sigla do estado"
        {...register("address.state")}
        />
        {errors.address?.state && <span>{errors.address?.state.message}</span>}
      </div>
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      
      <div>
        <h2>tipo de conta</h2>
        <label htmlFor="seller">vendedor</label>
        <input type="radio" id="seller"  value="true" {...register("is_seller")} />
        <label htmlFor="buyer">comprador</label>
        <input type="radio" id="buyer"  value="false" {...register("is_seller")} checked/>
      </div>

    
      <div>
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
      <Link href={"/"}>
      esqueceu sua senha?
      </Link>
      <div>
        <button>
          entrar
        </button>
      </div>

      <Link href={"/register"}>
      Não é cadastrado ainda? Clique aqui
      </Link>
    </form>
  </div>
  )
}

export default RegisterForm

