import { Route, Routes } from "react-router-dom";
import CreateMenuItem from "../../modules/CreateMenuItem";
import CreateResturaunt from "../../modules/CreateResturaunt";
import DetailedOrder from "../../modules/DetailedOrder";
import Orders from "../../modules/Orders";
import ResturauntMenu from "../../modules/ResturauntMenu";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Orders />}/>
            <Route path="order" element={<DetailedOrder />}/>
            <Route path="menu" element={<ResturauntMenu />}/>
            <Route path="menu/create" element={<CreateMenuItem />}/>
            <Route path="resturaunt" element={<CreateResturaunt />}/>
        </Routes>
    )
};

export default AppRoutes;