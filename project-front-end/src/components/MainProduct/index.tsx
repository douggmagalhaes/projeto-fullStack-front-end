import { useComment } from "@/contexts/commentContext"
import { ProductPage } from "@/pages/[id]"
//import { AnnouncementProps } from "@/pages/[id]"
import { AnnouncementReturnData } from "@/schemas/announcement.schamas"
import api from "@/services/api"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import AsideProductDetail from "./AsideProductDetail"
import SectionCommentsProduct from "./SectionCommentsProduct"
import SectionProductDetail from "./SectionProductDetail"

import styles from "./styles.module.scss"


const MainProduct = ({announcement}: ProductPage) => {

 // <SectionCommentsProduct announcement={announcement}  />
  return (

  <main className={styles.main_product}>

    <div className={styles.div_details}>

      <div className={styles.div_section_aside}>

        <SectionProductDetail announcement={announcement}/>

        <AsideProductDetail  announcement={announcement}/>

      </div>

    </div>

    <div className={styles.container_comments}>

      <div className={styles.div_comments}>

      <SectionCommentsProduct announcement={announcement}  />

      </div>

     
        
    </div>

     

  </main>

   
    

  )
}

export default MainProduct