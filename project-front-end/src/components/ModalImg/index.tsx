import { useAnnouncement } from "@/contexts/announcementContext"
import api from "@/services/api"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import Image from "next/image";

const ModalImg = () => {
 
  const {isOpenModalImgGalery, setIsOpenModalImgGalery, imgData, setImgDate, idImg, setIdmg} = useAnnouncement()


  useEffect(() => {

    async function loadImg(){

      try {

        const {data} = await api.get(`/images/${idImg}`)

        setImgDate(data)
        
      } catch (error) {

        console.log(error)
        
      }

    }

    loadImg()

  }, [idImg])

  return (
    <div className={styles.div_container_modal}>
      
      <div className={styles.div_modal}>

        <div className={styles.div_detail}>
            <span className={styles.title}>Imagens do veículo</span>
            <button onClick={() => setIsOpenModalImgGalery(false)}>X</button>
        </div>


        <figure className={styles.div_img}>

            {imgData && (
              <Image 
              width={300}
              height={250}
              src={imgData.imgGallery
              }
              alt="capa anuncio"
              priority={false}
            />

            )}

        </figure>

      </div>

    </div>
  )
}

export default ModalImg