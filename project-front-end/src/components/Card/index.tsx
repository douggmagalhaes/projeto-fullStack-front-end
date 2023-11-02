
import { AnnouncementData } from "@/schemas/announcement.schamas";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss"

interface CardHomeProps {
  announcement: AnnouncementData
}

const CardHome = ({announcement}: CardHomeProps) => {
  
return (
  <Link href={`/${announcement.id}`}>
    <li className={styles.card}>
      <figure className={styles.figure_img}>
        <Image 
        width={260}
        height={150}
        src={announcement.coverImage}
        alt="capa anuncio"
        priority={false}
        />
      </figure>
      <div className={styles.div_details}>
        <p className={styles.name_model}>{announcement.brand} - {announcement.model}</p>
        <p className={styles.description}>{announcement.description.slice(0, 50)} {announcement.description.length >= 50 ? "..." : null}</p>
        <div className={styles.user_detail}>
          <div className={styles.user_avatar}>{announcement.user.name.charAt(0)}</div>
          <p className={styles.user_name}>{announcement.user.name}</p>
        </div>
      </div>
      <div className={styles.vehicle_detail}>
        <div className={styles.vehicle_detail_year}>
          <p className={styles.vehicle_km}>{announcement.km}km</p>
          <p className={styles.vehicle_year}>{announcement.year}</p>
        </div>
        <div className={styles.div_vehicle_price}>
          <p className={styles.vehicle_price}>R${announcement.price},00</p>
        </div>
      </div>
    </li>
  
  </Link>
  
)
}

export default CardHome