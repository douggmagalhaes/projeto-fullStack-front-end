import Header from "@/components/Header"
import { AnnouncementData } from "@/schemas/announcement.schamas"
import api from "@/services/api"
import { GetServerSideProps, NextPage } from "next" 
import jwt_decode from "jwt-decode";
import { parseCookies } from "nookies";
import MainAnnouncementsUserPage from "@/components/MainAnnouncementsUserPage";
import { useAnnouncement } from "@/contexts/announcementContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModalCreateAnnouncement from "@/components/ModalCreateAnnouncement";
import ModalEditAnnouncement from "@/components/ModalEditAnnouncement";
import ModalEditeUser from "@/components/ModalEditeUser";
import { useAuth } from "@/contexts/authContext";
import ModalDeleteAnnouncement from "@/components/ModalDeleteAnnouncement";
import { useRouter } from "next/router";

import ModalEditeAddress from "@/components/ModalEditeAddress";
import Footer from "@/components/Footer";
import styles from "./styles.module.scss"

export interface AnnouncementsUserPageProps {
  announcements: AnnouncementData[],
 

}


const AnnouncementsUserPage: NextPage<AnnouncementsUserPageProps> = () => {

 
  const router = useRouter()
  const {id} = router.query

  const IdUser = `${id}`

  const {isOpenModalUserEdite, isOpenModalAddressEdite} = useAuth()

  
  const {isOpenModal, isOpenModalEditeAnnouncement, isOpenModalDeleteAnnouncement, readAllAnnouncementForOneUser, setReadAllAnnouncementForOneUser, announcementId, setReadAnnouncemntForId} = useAnnouncement()



  
  useEffect(() => {

    async function loadAnnouncementsForOneSeller(){

      try {
        // /anouncements/user/pagination/ecba6762-d591-4d89-b029-ba937cef29f7?skip=1&take=3
        const {data} = await api.get(`/anouncements/user/${IdUser}`)

        setReadAllAnnouncementForOneUser(data)

      } catch (error) {
        console.log(error)
        
      }

    }

    loadAnnouncementsForOneSeller()

  },[])

  
  useEffect(() => {

    async function loadAnnouncement(){
      try {
        const {data} = await api.get(`/anouncements/${announcementId}`)

        //setReadAnnouncemntForId(data)
      } catch (error) {
        console.log("deu erro ao carregar o anuncio por id no form edite")
        
      }

    }
    loadAnnouncement()

  },[announcementId])


  const cookies = parseCookies()
  const token = cookies.Motors_shop_token

  
  return (
    <>

      <Header />
    
      {isOpenModalAddressEdite && <ModalEditeAddress />}

      {isOpenModalUserEdite && <ModalEditeUser />}
        
      {isOpenModalDeleteAnnouncement && <ModalDeleteAnnouncement />}

      {isOpenModal && <ModalCreateAnnouncement />}
        
      {isOpenModalEditeAnnouncement && <ModalEditAnnouncement />}
        
      <MainAnnouncementsUserPage />
  
      <Footer />
       
    </>
    
  )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id;
 
  const response = await api.get<AnnouncementData[]>(`/anouncements/user/${id}`)

  return {
    props: { announcements: response.data }
  }
}

export default AnnouncementsUserPage