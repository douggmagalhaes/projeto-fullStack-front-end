import RegisterForm from "../RegisterForm"
import styles from "./styles.module.scss"


const MainRegister = () => {
  return (
    <main className={styles.main}>

      <div className={styles.container_form}>

        <h2 className={styles.titlte_form}>Login</h2>

        <div className={styles.div_form}>

          <RegisterForm />
          
        </div>

      </div>

      
    </main>
  )
}

export default MainRegister