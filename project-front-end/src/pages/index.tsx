import CardHome from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import MainHome from "@/components/MainHome";
import { AnnouncementData, AnnouncementReturnData } from "@/schemas/announcement.schamas";
import { CommentSchemaData } from "@/schemas/comment.schemas";
import { jwtDecode } from "jwt-decode";

import api from "@/services/api";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { useAuth } from "@/contexts/authContext";
import ModalEditeUser from "@/components/ModalEditeUser";
import { useEffect, useState } from "react";
import ModalEditeAddress from "@/components/ModalEditeAddress";


//AnnouncementReturnData
//AnnouncementData
export interface HomePage {
  announcements: AnnouncementData[],
  //comments: CommentSchemaData[]
}
interface IUser {
  id: string,
  email: string,
  is_seller: boolean
}

const Home: NextPage<HomePage> = ({announcements}: HomePage) => {

  const [allAnnouncements, setAllAnnouncements] = useState(announcements)

  //const cookiesTest = parseCookies()
  //const token = cookiesTest.Motors_shop_token

  //const tokenForm = `${token}`
  //const userDecoded: IUser = jwt_decode(token);

  //const userDecoded = jwtDecode(tokenForm);

  //console.log(token)

  //console.log(userDecoded)

  

  //carreguei os anuncios aqui
  //console.log("aqui o teste", allAnnouncements)

  
  //import jwt_decode from "jwt-decode";
  //console.log({ cookies })
  
 const {isOpenModalUserEdite, isOpenModalAddressEdite, setIsOpenModalAddressEdite, userData, loadUser} = useAuth()
  //const { data: session, status } = useSession()
  //console.log("to no index",session?.token)
  //const session = useSession()

  console.log(userData)

  //const [data] = useSession()

  //if(status === "authenticated"){
    //console.log(session.user?.email)

    useEffect(() => {
      loadUser()
    }, [])
  //}

  //console.log(session)

  //console.log(announcements)
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
