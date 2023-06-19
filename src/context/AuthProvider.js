import { createContext, useContext, useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import { UseLocalStorage, useLocalStorage } from "../hooks/UseLocalStorage";
import Login from "../UserAccount/components/Login";

// const {handleLogin} = Login



const AuthContext = createContext({});

export const AuthProvider = ({ children}) => {

    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true);

   

  
  
    const login = () => {
        console.log("user has logged in");
        setUser(true)
    };

   const logout = ()=>{
    console.log("The User has logged out");
      setUser(false)
    
   } 

   useEffect(() => {
  
   const token = localStorage.getItem('token')

          if (token) {
             
             setUser(true);
             setLoading(false);
          } else {
             setLoading(false);
          }
 
 }, []);

 if (loading) return <div>"Loading......"</div>
  
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth =() => {

  return useContext(AuthContext)
}
