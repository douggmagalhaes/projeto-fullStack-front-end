
import { LoginSchemaData } from "@/schemas/login.schema";
import api from "@/services/api";
import { useRouter } from "next/router";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import Toast from "@/components/toast";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { RegisterEditeSchemaData, RegisterSchemaData } from "@/schemas/register.Schema";
import jwt_decode from 'jwt-decode';
import { UserSchemaData } from "@/schemas/user.schemas";


interface Props {
  children: ReactNode;

}

interface IAddress {
  zipCode: string,
  state: string,
  city: string,
  street: string,
  number: string,
  complement: string,
}

interface IUser {
  id: string,
  name: string
  email: string,
  cpf: string,
  phone: string,
  dateOfBirth: string,
  description: string,
  is_seller: boolean,
  address: IAddress,
}

interface IUserSeller {
  id: string,
  email: string,
  is_seller: boolean,
  name: string,
  description: string,
}

interface AuthProviderData {
  registerUser: (registerData: RegisterSchemaData) => void;
  login: (loginData: LoginSchemaData) => void;
  authUserOn: boolean;
  setAuthUserOn: Dispatch<SetStateAction<boolean>>;
  serachUser?: string;
  setSearchUser: Dispatch<SetStateAction<string>>;
  userSellerData: IUserSeller | null;
  setUserSellerData: Dispatch<any>;
  loadUser: () => void;
  userData: IUser | null | undefined;
  setUserData: Dispatch<any>;
  isOpenModalUserEdite: boolean;
  setIsOpenModalUserEdite: Dispatch<SetStateAction<boolean>>;
  toggleModalEditeUser: () => void;
  editeUser: (userEdite: RegisterEditeSchemaData) => void;
  isOpenModalAddressEdite: boolean;
  setIsOpenModalAddressEdite: Dispatch<SetStateAction<boolean>>;
  toggleModalUserMenu: (ctx: string) => void;
  editeAddress: (addressEdite: RegisterEditeSchemaData) => Promise<void>;
  userOn: boolean;
  setUserOn: Dispatch<SetStateAction<boolean>>;
  isOpenModalUserDelete: boolean;
  setIsOpenModalUserDelete: Dispatch<SetStateAction<boolean>>
  deleteUser: () => void;
  isOpenModalCreateUserSuccess: boolean;
  setIsOpenModalCreateUserSuccess: Dispatch<SetStateAction<boolean>>;

}


const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const [userSellerData, setUserSellerData] = useState(null)
  
  const [userData, setUserData] = useState(null)

  const [userOn, setUserOn] = useState(false)

  const [isOpenModalUserEdite, setIsOpenModalUserEdite] = useState(false)

  const [isOpenModalUserDelete, setIsOpenModalUserDelete] = useState(false)
  
  const [isOpenModalAddressEdite, setIsOpenModalAddressEdite] = useState(false)

  const [isOpenModalUser, setIsOpenModalUser] = useState(false)

  const [isOpenModalCreateUserSuccess, setIsOpenModalCreateUserSuccess] = useState(false)

  
  const toggleModalEditeUser = () => setIsOpenModalUserEdite(!isOpenModalUserEdite)

  
  const toggleModalUserMenu = (ctx: string) => {

    switch (ctx) {
      case "edite user open":

        setIsOpenModalUserEdite(true)
        
        break;
      
      case "edite user close":

        setIsOpenModalUserEdite(false)
        
        break;
      
      case "edite address open":

        setIsOpenModalAddressEdite(true)
        
        break;
      
      case "edite address close":

        setIsOpenModalAddressEdite(false)
        
        break;
    
      default:
        break;
    }

  }


  const [authUserOn, setAuthUserOn ] = useState(false)
  const [serachUser, setSearchUser] = useState('')


  const deleteUser = async () =>{

    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    const cookiesUserId = parseCookies()
    const userId = cookiesUserId.Motors_shop_user

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {


      await api.delete(`/users/${userId}`)

      Toast({ message: "Usuário Deletado com sucesso", isSucess: true });

      destroyCookie(null, "Motors_shop_token")

      destroyCookie(null, "Motors_shop_user")
    
      setUserData(null)

      setUserOn(false)

      toggleModalUserMenu("edite user close")

      
    } catch (error) {
      Toast({ message: error.response.data.message
      });
      
    }
  }

  

  const editeUser = async (userEdite: RegisterEditeSchemaData) => {

    

    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      const {data} = await api.patch(`/users/${userData.id}`, userEdite)

      
      toggleModalUserMenu("edite user close")

      Toast({ message: "Usuário editado com sucesso", isSucess: true });

      setUserData(data)
    } catch (error) {
      Toast({ message: error.response.data.message
      });
    }

  }

  const editeAddress = async (addressEdite: RegisterEditeSchemaData) => {

    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      const {data} = await api.patch(`/users/${userData.id}`, addressEdite)

      toggleModalUserMenu("edite address close")

      Toast({ message: "Endereço editado com sucesso", isSucess: true });

      setUserData(data)
    } catch (error) {
      Toast({ message: error.response.data.message
      });
    }

  }


  const loadUser = async () => {

    const cookiesTest = parseCookies()
    const userId = cookiesTest.Motors_shop_user

    try {
      

      const {data} = await api.get(`/users/${userId}`)


      setUserData(data)

    } catch (error) {
      //console.log(error)
      
    }

  }
  
  
  const registerUser = (registerData: RegisterSchemaData) => {
    api
      .post("/users/address", registerData)
      .then(() => {
        setIsOpenModalCreateUserSuccess(true)
        
      })
      .catch((error) => {
        
        Toast({ message: error.response.data.message
        });
      });
  };

  
  const login = (loginData: LoginSchemaData) => {
    api
      .post("/login", loginData)
      .then((response) => {
        
        setCookie(null, "Motors_shop_token", response.data.token, {
          maxAge: 60 * 60 * 24 * 3,
          path: "/"
        })
        setCookie(null, "Motors_shop_user", response.data.user.id, {
          maxAge: 60 * 60 * 24 * 3,
          path: "/"
        })
        
        ;
      })
      .then(() => {
        loadUser()
        Toast({ message: "Login cadastrado com sucesso", isSucess: true });
        router.push("/");

      })
      .catch((error) => {
        Toast({ message: error.response.data.message
        });
      });
  };

  
  return <AuthContext.Provider value={{registerUser, login, authUserOn, setAuthUserOn, serachUser, setSearchUser, userSellerData, setUserSellerData, loadUser, userData, setUserData, isOpenModalUserEdite, setIsOpenModalUserEdite, toggleModalEditeUser, editeUser, isOpenModalAddressEdite, setIsOpenModalAddressEdite, toggleModalUserMenu, editeAddress, userOn, setUserOn, isOpenModalUserDelete, setIsOpenModalUserDelete, deleteUser, isOpenModalCreateUserSuccess, setIsOpenModalCreateUserSuccess }}>
    {children}
    </AuthContext.Provider>;

}

export const useAuth = () => useContext(AuthContext);