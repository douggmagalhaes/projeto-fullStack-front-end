import CardHome from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import MainHome from "@/components/MainHome";
import { AnnouncementData, AnnouncementReturnData } from "@/schemas/announcement.schamas";
import { CommentSchemaData } from "@/schemas/comment.schemas";
import { jwtDecode } from "jwt-decode";

import api from "@/services/api";
import { GetServerSideProps, NextPage } from "next";
import { useAuth } from "@/contexts/authContext";
import ModalEditeUser from "@/components/ModalEditeUser";
import { useEffect, useState } from "react";
import ModalEditeAddress from "@/components/ModalEditeAddress";




export interface HomePage {
  announcements: AnnouncementData[],
}
interface IUser {
  id: string,
  email: string,
  is_seller: boolean
}

const Home: NextPage<HomePage> = ({announcements}: HomePage) => {

  const [allAnnouncements, setAllAnnouncements] = useState(announcements)

  
 const {isOpenModalUserEdite, isOpenModalAddressEdite, setIsOpenModalAddressEdite, userData, loadUser, isOpenModalUserDelete, setIsOpenModalUserDelete} = useAuth()
  

    useEffect(() => {
      loadUser()
    }, [])
 
  return (
    <>
    <Header/>

    {isOpenModalUserEdite && <ModalEditeUser />}

    {isOpenModalAddressEdite && <ModalEditeAddress />}

    <MainHome  announcements={announcements}/>
    
    <Footer />
  

    </>
    
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const response = await api.get<AnnouncementData[]>("/anouncements")

  return {
    props: { announcements: response.data }
  }
}

export default Home
