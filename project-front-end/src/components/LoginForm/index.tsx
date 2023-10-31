import { LoginSchema, LoginSchemaData } from "@/schemas/login.schema"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
//import { FormEventHandler, SyntheticEvent, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import styles from "./styles.module.scss"


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
  
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
      <div className={styles.inputs_container}>
        <label htmlFor="email">
          E-mail
        </label>
        <input 
        type="email" 
        placeholder="example@email.com"
        {...register("email")}
        
        />
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
      </div>

      <div className={styles.link_password_container}>
        <Link className={styles.link_password} href={"/"}>
        Esqueceu sua senha?
        </Link>
      </div>
      
      <div className={styles.button_container}>
        <button className={styles.button}>
          entrar
        </button>
      </div>

      <div className={styles.link_register}>

        <span>
           Não é cadastrado ainda? Clique aqui
        </span>
    
      </div>

      <div className={styles.button_container_register}> 

      <Link href={"/register"}>
        <button>Cadastrar</button>
      </Link>

      </div>

     
    </form>
  
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

