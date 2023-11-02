import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainProduct from "@/components/MainProduct";
import ModalEditeAddress from "@/components/ModalEditeAddress";
import ModalEditeComment from "@/components/ModalEditeComment";
import ModalEditeUser from "@/components/ModalEditeUser";
import ModalImg from "@/components/ModalImg";
import { useAnnouncement } from "@/contexts/announcementContext";
import { useAuth } from "@/contexts/authContext";
import { useComment } from "@/contexts/commentContext";
import { AnnouncementData, AnnouncementReturnData } from "@/schemas/announcement.schamas";
import api from "@/services/api";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";


export interface ProductPage {
  announcement: AnnouncementData,

}

  


const Announcement: NextPage<ProductPage> = ({announcement}: ProductPage) => {


  
  const {isOpenModalUserEdite, isOpenModalAddressEdite, setIsOpenModalAddressEdite, } = useAuth()

  const {isOpenModalImgGalery, setIsOpenModalImgGalery} = useAnnouncement()

  
  const {isOpenModalEditeComment} = useComment()
  
 
  
  return (
   <>
    
      <Header />
      

      {isOpenModalImgGalery && <ModalImg />}

      {isOpenModalEditeComment && <ModalEditeComment />}

      {isOpenModalUserEdite && <ModalEditeUser />}

      {isOpenModalAddressEdite && <ModalEditeAddress />}

     
      <MainProduct announcement={announcement}/>
      
      <Footer />
     
   </>
  )

}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id;
  const response = await api.get<AnnouncementData>(`/anouncements/${id}`)

  return {
    props: { announcement: response.data }
  }
}

export default Announcement