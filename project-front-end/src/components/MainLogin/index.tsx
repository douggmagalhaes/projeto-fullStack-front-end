import LoginForm from "../LoginForm"

import styles from "./styles.module.scss"


const MainLogin = () => {
  return (
    <main className={styles.main}>

      <div className={styles.container_form}>

        <h2 className={styles.titlte_form}>Login</h2>

        <div className={styles.div_form}>

          <LoginForm />

        </div>
        
      </div>
      
     
    </main>
  )
}

export default MainLogin