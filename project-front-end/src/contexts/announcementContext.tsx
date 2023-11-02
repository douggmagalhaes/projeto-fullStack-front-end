import { AnnouncementCreateData, AnnouncementData } from "@/schemas/announcement.schamas";
import { RegisterEditeSchemaData } from "@/schemas/register.Schema";
import api from "@/services/api";
import { parseCookies } from "nookies";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import Toast from "@/components/toast";

interface Props {
  children: ReactNode;

}


interface IImg {
  anouncementId: string;
  id: string;
  imgGallery: string;

}

interface AnnouncementProviderData {
  readAllAnnouncements: () => void;
  createAnnouncements: (announcementCreateData: AnnouncementCreateData) => void ;
  allAnnoucementsData: AnnouncementData[];
  isOpenModal: boolean;
  isOpenModalEditeAnnouncement: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  setIsOpenModalEditeAnnouncement: Dispatch<SetStateAction<boolean>>;
  toggleModal: () => void;
  toggleModalEdite: ()=> void;
  editeAnnouncements: (announcementEditeData: RegisterEditeSchemaData, id: string) => void ;
  announcementId: string;
  setAnnouncementId: Dispatch<SetStateAction<string>>;
  readAllAnnouncementForOneUser: AnnouncementData[] | any[];
  setReadAllAnnouncementForOneUser: Dispatch<SetStateAction<any[] | AnnouncementData[]>>
  readAnnouncemntForId: AnnouncementData | null;
  setReadAnnouncemntForId: Dispatch<any>;
  removeAnnouncements: (id: string) => void;
  isOpenModalDeleteAnnouncement: boolean;
  setIsOpenModalDeleteAnnouncement: Dispatch<SetStateAction<boolean>>;
  idSellerUser: string;
  setIdSellerUser: Dispatch<SetStateAction<string>>;
  pageNumberPagination: number;
  setPageNumberPagination: Dispatch<SetStateAction<number>>;
  readOnlyOneAnnouncementForId: () => Promise<void>;
  isOpenModalImgGalery: boolean;
  setIsOpenModalImgGalery: Dispatch<SetStateAction<boolean>>;
  imgData: IImg;
  setImgDate: Dispatch<IImg | null>;
  idImg: string;
  setIdmg: Dispatch<SetStateAction<string>>;
  isOpenModalCreateAnnouncementSuccess: boolean;
  setIsOpenModalCreateAnnouncementSuccess: Dispatch<SetStateAction<boolean>>;

}

const AnnouncementContext = createContext<AnnouncementProviderData>({} as AnnouncementProviderData);


export const AnnouncementProvider = ({children}: Props) =>{

  const [allAnnoucementsData, setAllAnnouncementsData] = useState([])

  const [pageNumberPagination, setPageNumberPagination] = useState(1);

 
  const [announcementId, setAnnouncementId] = useState("")

  const [imgData, setImgDate] = useState(null)

  const [idSellerUser, setIdSellerUser] = useState("")

 
  const [idImg, setIdmg] = useState("")

 const [readAllAnnouncementForOneUser, setReadAllAnnouncementForOneUser] = useState([])

 
 const [readAnnouncemntForId, setReadAnnouncemntForId] = useState(null)


 
  const [isOpenModal, setIsOpenModal] = useState(false)

 
  const [isOpenModalDeleteAnnouncement, setIsOpenModalDeleteAnnouncement] = useState(false)

  const [isOpenModalCreateAnnouncementSuccess, setIsOpenModalCreateAnnouncementSuccess] = useState(false)


  const [isOpenModalImgGalery, setIsOpenModalImgGalery] = useState(false)
  
  const toggleModal = () => setIsOpenModal(!isOpenModal)

  
  const [isOpenModalEditeAnnouncement, setIsOpenModalEditeAnnouncement] = useState(false)

  const toggleModalEdite = () =>{
    setIsOpenModalEditeAnnouncement(!isOpenModalEditeAnnouncement)
    
  }

  
  const readOnlyOneAnnouncementForId = async () => {

    try {
      const {data} = await api.get(`/anouncements/${announcementId}`)

      setReadAnnouncemntForId(data)
    } catch (error) {
      
    }

  }

  

  const readAllAnnouncements = async () =>{

    try {
      const {data} = await api.get('/anouncements')
      setAllAnnouncementsData(data)
    } catch (error) {
      console.log(error)
    }

  }

  const createAnnouncements = async (announcementCreateData: AnnouncementCreateData) => {

    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      const {data} = await api.post(`/anouncements/image`, announcementCreateData)

      
      setIsOpenModal(false)
      readOnlyOneAnnouncementForId()
      setIsOpenModalCreateAnnouncementSuccess(true)
      Toast({ message: "Anúncio criado com sucesso", isSucess: true });
    } catch (error) {

      Toast({ message: error.response.data.message
      });
      
    }
  }

  const editeAnnouncements = async (announcementEditeData: RegisterEditeSchemaData, id: string) => {


    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {

      const {data} = await api.patch(`/anouncements/${id}`, announcementEditeData)

      Toast({ message: "Anúncio editado com sucesso", isSucess: true });
      setIsOpenModalEditeAnnouncement(false)
      
    } catch (error) {
      Toast({ message: error.response.data.message
      });
    }
  }

  const removeAnnouncements = async (id: string) => {

    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    api.defaults.headers.common.authorization = `Bearer ${token}`;


    try {
      const {data} = await api.delete(`/anouncements/${id}`)

      Toast({ message: "Anúncio deletado com sucesso", isSucess: true });

      setIsOpenModalDeleteAnnouncement(false)
    } catch (error) {

      Toast({ message: error.response.data.message
      });
      
    }

  }

  return <AnnouncementContext.Provider value={{readAllAnnouncements, allAnnoucementsData, isOpenModal, setIsOpenModal, createAnnouncements, toggleModal, isOpenModalEditeAnnouncement, setIsOpenModalEditeAnnouncement, toggleModalEdite, editeAnnouncements, announcementId, setAnnouncementId, readAllAnnouncementForOneUser, setReadAllAnnouncementForOneUser, readAnnouncemntForId, setReadAnnouncemntForId, removeAnnouncements, isOpenModalDeleteAnnouncement, setIsOpenModalDeleteAnnouncement, setIdSellerUser, idSellerUser, pageNumberPagination, setPageNumberPagination, readOnlyOneAnnouncementForId, isOpenModalImgGalery, setIsOpenModalImgGalery ,imgData, setImgDate , idImg, setIdmg, isOpenModalCreateAnnouncementSuccess, setIsOpenModalCreateAnnouncementSuccess }}>
    {children}
  </AnnouncementContext.Provider>
}

export const useAnnouncement = () => useContext(AnnouncementContext);
