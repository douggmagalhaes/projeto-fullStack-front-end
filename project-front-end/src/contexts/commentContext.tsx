import { CommentSchemaData, CreateCommentData, EditeCommentSchemaData } from "@/schemas/comment.schemas";
import api from "@/services/api";
import { createContext, Dispatch, ReactNode, SetStateAction, use, useContext, useState } from "react";
import Toast from "@/components/toast";
import { parseCookies } from "nookies";


interface Props {
  children: ReactNode;
}

interface ReadCommentSchemaData {
  comment: CommentSchemaData[];
}

interface CommentProviderData {
  createComment: (createCommentData: CreateCommentData, announcementId: string, token: string) => void;
  allComments: CommentSchemaData[];
  setAllComments: Dispatch<SetStateAction<CommentSchemaData[]>>;
  takeAnnoucementId: string;
  setTakeAnnoucementId: Dispatch<SetStateAction<string>>;
  commentIdRemove: string;
  setCommentIdRemove: Dispatch<SetStateAction<string>>
  removeComment: (commentId: string) => void;
  loadAllComments: () => void;
  isOpenModalEditeComment: boolean;
  setIsOpenModalEditeComment: Dispatch<SetStateAction<boolean>>;
  commentIdEdite: string;
  setCommentIdEdite: Dispatch<SetStateAction<string>>;
  editeComment: (commentData: EditeCommentSchemaData, commentId: string) => void;


}

const CommentContext = createContext<CommentProviderData>({} as CommentProviderData);

export const CommentProvider = ({ children }: Props) => {

  const [allComments, setAllComments] = useState([])

  const [takeAnnoucementId, setTakeAnnoucementId] = useState('')

  const [commentIdRemove, setCommentIdRemove] = useState("")

  const [commentIdEdite, setCommentIdEdite] = useState("")

  const [announcementIdParam, setAnnouncementIdParam ] = useState<string | null>(null)

  const [isOpenModalEditeComment, setIsOpenModalEditeComment] = useState(false)

const readCommentsForOneAnnoucement = async (announcementId: string) => {

  const cookies = parseCookies()
  const token = cookies.Motors_shop_token

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
 
 try {

  const {data} = await api.get(`/comments/anouncement/${announcementId}`, config)

  setAllComments(data)

 } catch (error) {
  
 }
  
  
}
  
 const createComment = (createCommentData: CreateCommentData, announcementId: string, token: string) => {
  

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  

  api.post(`/comments/${announcementId}`, createCommentData, config)
  .then(async ()  => {
    Toast({ message: "Comentário feito com sucesso", isSucess: true });
    const {data} = await api.get(`/comments/anouncement/${announcementId}`, config)

  setAllComments(data)


  })
  .catch((error) => {
    Toast({ message: error.response.data.message
    });
  })
  

 }

 const loadAllComments = async () =>{

  try {
    const {data} = await api.get(`/comments/anouncement/${takeAnnoucementId}`)

    setAllComments(data)
  } catch (error) {
    
  }
 }
 
 const editeComment = (commentData: EditeCommentSchemaData, commentId: string) =>{

  const cookies = parseCookies()
  const token = cookies.Motors_shop_token

  api.defaults.headers.common.authorization = `Bearer ${token}`;


  try {

    api.patch(`/comments/${commentId}`, commentData)

    Toast({ message: "Comentário editado com sucesso", isSucess: true });

    loadAllComments()
    setIsOpenModalEditeComment(false)

  } catch (error) {

    Toast({ message: error.response.data.message
    });
    
  }
 }
 const removeComment = (commentId: string) => {

  const cookies = parseCookies()
  const token = cookies.Motors_shop_token

    api.defaults.headers.common.authorization = `Bearer ${token}`;


  try {

    api.delete(`/comments/${commentId}`)

    loadAllComments()
    
  } catch (error) {

    Toast({ message: error.response.data.message
    });
    
  }

 }

return <CommentContext.Provider value={{createComment, allComments, setAllComments, setTakeAnnoucementId ,takeAnnoucementId, commentIdRemove, setCommentIdRemove, removeComment, loadAllComments, isOpenModalEditeComment, setIsOpenModalEditeComment, commentIdEdite, setCommentIdEdite, editeComment}}>
  {children}
</CommentContext.Provider>

}

export const useComment = () => useContext(CommentContext);