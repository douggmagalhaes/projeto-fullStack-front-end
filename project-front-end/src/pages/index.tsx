//import Image from "next/image";
//import { Inter } from "next/font/google";

import CardHome from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import MainHome from "@/components/MainHome";
import { AnnouncementData } from "@/schemas/announcement.schamas";

import api from "@/services/api";
import { GetServerSideProps, NextPage } from "next";


export interface HomePage {
  announcements: AnnouncementData[]
}

const Home: NextPage<HomePage> = ({announcements}) => {
  return (
    <>
    <Header/>
    <MainHome  announcements={announcements}/>
    <Footer />
    </>
    
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const response = await api.get<AnnouncementData[]>("/anouncements")

  return {
    props: { announcements: response.data }
  }
}

export default Home
