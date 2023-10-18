import { ButtonHTMLAttributes, cloneElement, ReactElement, ReactNode } from "react"

import styles from "./styles.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //qualquer coisa que seja capaz de renderizar atraves do react: strings/ number etc
  children: ReactNode;
  // é especificamente um elemento do react
  icon?: ReactElement;
  stylesType?: string;


 
}

const Button = ({ children, stylesType, icon}: ButtonProps) => {

  switch (stylesType) {
    case "button_login":
      
     return (<button className={styles.button_login}>{children}</button>)
  
     case "button_register":
      
     return (<button className={styles.button_register}>{children}</button>)
   
     case "button_navgate_footer":
      
     return (<button className={styles.button_navgate_footer}>
      {children}
      </button>)
   
    default:
      return (<button className={styles.button_none}>{children}</button>);
  }

}


export default Button