import { LoginSchema, LoginSchemaData } from "@/schemas/login.schema"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";

const LoginForm = () => {

  const {register, handleSubmit} = useForm<LoginSchemaData>({
    resolver: zodResolver(LoginSchema)
  })

  const { login } = useAuth();

  const onFormSubmit = (formData: LoginSchemaData) => {
    login(formData);
    //console.log(formData)
  };


  return (
  <div>
    <h2>login</h2>
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input 
        type="email" 
        placeholder="example@email.com"
        {...register("email")}
        />
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

export default LoginForm

