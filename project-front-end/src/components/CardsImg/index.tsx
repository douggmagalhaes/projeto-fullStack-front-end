import { useAnnouncement } from "@/contexts/announcementContext";
import api from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss"


const CardsImg = ({img}) => {

  const {isOpenModalImgGalery, setIsOpenModalImgGalery, imgData, setImgDate, idImg, setIdmg} = useAnnouncement()


  //const [idImg, setIdmg] = useState("")


//console.log("aqui", imgData.id)

//console.log(imgData)

function toggleModalImg (idImg){

  console.log("id da img", idImg)

  let idImgStr = `${idImg}`

  setIsOpenModalImgGalery(true)
  setIdmg(idImg)

}

  return (
    <li className={styles.li_img} onClick={() => toggleModalImg(img.id)}>

      <figure className={styles.figure_img}>
          <Image 
          width={100}
          height={70}
          src={img.imgGallery
          }
          alt="capa anuncio"
          priority={false}
          />
      </figure>
      
    </li>
  )
}

export default CardsImg