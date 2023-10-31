import { LoginSchema, LoginSchemaData } from "@/schemas/login.schema"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
//import { FormEventHandler, SyntheticEvent, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";


const LoginForm = () => {

  //const { push } = useRouter();
  const router = useRouter();

  const { authUserOn, setAuthUserOn } = useAuth();

  const {register, handleSubmit} = useForm<LoginSchemaData>({
    resolver: zodResolver(LoginSchema)
  })

  const { login } = useAuth();

  const onFormSubmit = async (formData: LoginSchemaData) => {
    login(formData);
    //login(formData);
    //console.log(formData)
    /*
    formData.email

    let email = formData.email
    let password = formData.password

    const result = await signIn('credentials', {
      //...formData,
      email,
      password,
      redirect: false,
      callbackUrl: '/'
    
    });

    if(result?.error){
      console.log(result)
      return 
    }

    setAuthUserOn(true)
    router.replace("/")

    /*
    if (result?.url) {
     return push(result?.url)
    }
*/
    

  }


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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default LoginForm

