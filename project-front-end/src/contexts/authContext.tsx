//import Toast from "@/components/Toast";
import { LoginSchemaData } from "@/schemas/login.schema";
import api from "@/services/api";
import { useRouter } from "next/router";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import Toast from "@/components/toast";
import { parseCookies, setCookie } from "nookies";
import { RegisterEditeSchemaData, RegisterSchemaData } from "@/schemas/register.Schema";
//import jwt_decode from "jwt-decode";


//import { jwtDecode } from "jwt-decode";
import jwt_decode from 'jwt-decode';
//import { jwtDecode } from "jwt-decode";
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
  //password: string,
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

}

//isOpenModalUserEdite, setIsOpenModalUserEdite, toggleModalEditeUser

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const [userSellerData, setUserSellerData] = useState(null)

  //vou armazenar o usuário logado aqui
  const [userData, setUserData] = useState(null)

  //aqui é pro menu , pra saber se o usuário ta on ou off pra mostrar o menu certo
  const [userOn, setUserOn] = useState(false)

  const [isOpenModalUserEdite, setIsOpenModalUserEdite] = useState(false)

  //logica pra abrir e fechar modal
  const [isOpenModalAddressEdite, setIsOpenModalAddressEdite] = useState(false)

  const [isOpenModalUser, setIsOpenModalUser] = useState(false)

  //para editar o user
  const toggleModalEditeUser = () => setIsOpenModalUserEdite(!isOpenModalUserEdite)

  //logica para todos os modals 
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

  //teste do token aqui

  const editeUser = async (userEdite: RegisterEditeSchemaData) => {

    //console.log("o corpo que chegou", userEdite)

    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      const {data} = await api.patch(`/users/${userData.id}`, userEdite)

      //console.log("final do processo", data)

      //toggleModalEditeUser()
      toggleModalUserMenu("edite user close")

      Toast({ message: "Usuário editado com sucesso", isSucess: true });

      setUserData(data)
    } catch (error) {
      console.log(error)
    }

  }

  const editeAddress = async (addressEdite: RegisterEditeSchemaData) => {

    const cookies = parseCookies()
    const token = cookies.Motors_shop_token

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      const {data} = await api.patch(`/users/${userData.id}`, addressEdite)

      //console.log("final do processo", data)

      //toggleModalEditeUser()
      toggleModalUserMenu("edite address close")

      Toast({ message: "Endereço editado com sucesso", isSucess: true });

      setUserData(data)
    } catch (error) {
      console.log(error)
    }

  }


  const loadUser = async () => {

    try {
      const cookiesTest = parseCookies()
      const userId = cookiesTest.Motors_shop_user

      console.log("o id do cookies", userId)

      //const tokenFormate = `${token}`


      //const userDecoded: any = jwt_decode(tokenFormate);

      //const tokenFormate = `${token}`

      //console.log(token)

      //const userDecoded: IUser = jwtDecode(tokenFormate);

      //era assim deu erro
      //const userDecoded: IUser = jwt_decode(token);
      //jwt_decode

      //console.log(userDecoded)

      //console.log(userDecoded.id)

      const {data} = await api.get(`/users/${userId}`)

      //Toast({ message: `Usuário logado ${data.is_seller}`  , isSucess: true });


      setUserData(data)

      //console.log(data)
    } catch (error) {
      console.log(error)
      
    }

  }
  
  //register
  const registerUser = (registerData: RegisterSchemaData) => {
    api
      .post("/users/address", registerData)
      .then(() => {
        Toast({ message: "Usuário cadastrado com sucesso", isSucess: true });
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
        Toast({ message: "Erro ao criar usuário, tente utilizar outro e-mail" });
      });
  };

  //login
  const login = (loginData: LoginSchemaData) => {
    api
      .post("/login", loginData)
      .then((response) => {
        
        setCookie(null, "Motors_shop_token", response.data.token, {
          maxAge: 60 * 60 * 24 * 3,
          path: "/"
        })
        console.log("usuário logado", response)
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
        console.log(error);
        Toast({ message: "Erro ao logar, verifique se o e-mail e senha estão corretos" });
      });
  };

  //register,
  return <AuthContext.Provider value={{registerUser, login, authUserOn, setAuthUserOn, serachUser, setSearchUser, userSellerData, setUserSellerData, loadUser, userData, setUserData, isOpenModalUserEdite, setIsOpenModalUserEdite, toggleModalEditeUser, editeUser, isOpenModalAddressEdite, setIsOpenModalAddressEdite, toggleModalUserMenu, editeAddress, userOn, setUserOn }}>
    {children}
    </AuthContext.Provider>;

}

export const useAuth = () => useContext(AuthContext);