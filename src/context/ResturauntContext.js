import { createContext, useContext, useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Resturaunt} from "../models";



const ResturauntContext = createContext();

const ResturauntContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const [resturaunt, setResturaunt] = useState();
    const sub = user?.attributes?.sub;

    useEffect(()=>{
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser);
    },[]);

    console.log(user);
    console.log(sub);

    useEffect(() =>{
        if (!sub){
            return;
        }
        DataStore.query(Resturaunt,(r) => r.adminSub.eq(sub)).then(
            (resturaunts) => setResturaunt(resturaunts[0])
        );
    },[sub]);
    
    console.log(resturaunt)

    return (
        <ResturauntContext.Provider value={{sub, resturaunt, setResturaunt}}>
            {children}
        </ResturauntContext.Provider>
    );

};

export default ResturauntContextProvider;

export const useResturauntContext = () => useContext(ResturauntContext);