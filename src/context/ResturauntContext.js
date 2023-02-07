import { createContext, useContext, useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Resturaunt} from "../models";

const ResturauntContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const [resturaunt, setResturaunt] = useState;
    const sub = user?.attributes?.sub;

};

export default ResturauntContextProvider;