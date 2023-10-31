import { useAuth } from "@/contexts/authContext";
import { RegisterEditeSchema, RegisterEditeSchemaData } from "@/schemas/register.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onFormSubmit)}>
      
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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
      <div>
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

    <div>

      <button type="button" onClick={() => toggleModalUserMenu("edite address close")}>Cancelar</button>
      <button>Salvar Alterações</button>

    </div>

  </form>
  )
}

export default FormEditeAddress