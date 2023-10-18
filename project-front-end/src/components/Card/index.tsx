import { AnnouncementData } from "@/schemas/announcement.schamas";
import Image from "next/image";
import { useState } from "react";

//import '../scss/global.scss'

import styles from "./styles.module.scss"

interface CardHomeProps {
  announcement: AnnouncementData
}

const CardHome = ({announcement}: CardHomeProps) => {
  //const [countCaracter, setcountCaracter]
return (
  <li className={styles.card}>
    <div className={styles.div_img}>
      <Image 
      className=""
      width={260}
      height={150}
      src={announcement.coverImage}
      alt="capa anuncio"
      />
    </div>
    <div className={styles.div_details}>
      <p className={styles.name_model}>{announcement.brand} - {announcement.model}</p>
      <p className={styles.description}>{announcement.description.slice(0, 50)} {announcement.description.length >= 50 ? "..." : null}</p>
      <div className={styles.user_detail}>
        <div className={styles.user_avatar}>D</div>
        <p className={styles.user_name}>{announcement.user.name}</p>
      </div>
    </div>
    <div className={styles.vehicle_detail}>
      <div className={styles.vehicle_detail_year}>
        <p className={styles.vehicle_km}>{announcement.km}</p>
        <p className={styles.vehicle_year}>{announcement.year}</p>
      </div>
      <div className={styles.div_vehicle_price}>
        <p>R${announcement.price},00</p>
      </div>
    </div>
  </li>
)
}

export default CardHome