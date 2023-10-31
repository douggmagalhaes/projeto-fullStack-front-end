import Link from "next/link"
import Button from "../Button"
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.div_footer}>

        <div className={styles.div_footer_logo}>
          <h2 className={styles.logo_footer}>Motoros <span className={styles.span_logo}>shop</span></h2>
        </div>
        <div className={styles.div_footer_all_rights}>
          <p className={styles.all_rights}>© 2023 -  Todos os direitos reservados.</p>
        </div>
        <div className={styles.footer_div_navigate_button}>
          <Link href={`#header`}>
          <Button stylesType="button_navgate_footer">
            ^
          </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;