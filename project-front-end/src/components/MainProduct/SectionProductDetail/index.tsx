
import { useAuth } from "@/contexts/authContext";
import Image from "next/image";
import Link from "next/link";


import styles from "./styles.module.scss"


const SectionProductDetail = ({announcement}) => {

  const {userData} = useAuth()

  

  return (
    <section className={styles.section_product_detail}>

      <div className={styles.div_cover_img}>

        <figure className={styles.figure_cover_img}>
          {
            announcement && <Image 
            width={500}
            height={400}
            src={announcement.coverImage}
            alt="capa anuncio"
          />
          }
           

        </figure>
     
      </div>

      <div className={styles.div_detail_product}>
        <div className={styles.div_detail}>
          <div className={styles.div_detail_name}>
            <h2 className={styles.name_model}>{announcement.brand} {announcement.model}</h2>
          </div>
          <div className={styles.div_detail_price}>
            <div className={styles.div_detail_km}>
              <p className={styles.year}>{announcement.year}</p>
              <p className={styles.km}>{announcement.km}km</p>
            </div>
            <p className={styles.price}>R${announcement.price}</p>
          </div>

          
          <div className={styles.div_btn_buy}>

              <Link href={`https://api.whatsapp.com/send?phone=+55+${announcement.user.phone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`} target="_blank">

                <button>Comprar</button>

              </Link>

          </div>

        </div>
        <div className={styles.div_description}>
          <h2>Descrição</h2>
          <p>
            {announcement.description}
          </p>
        </div>

      </div>


     {/** 
      <div className={styles.div_comments_product}>
        <h2>Comentários</h2>

        <ul className={styles.ul_comments_product}>
          {announcement.comments.map((comment) => {
            return <CardComments key={comment.id} comment={comment}/>
          })}

        </ul>

      </div>
      */}

    </section>
  )
}

export default SectionProductDetail