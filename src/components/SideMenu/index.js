import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {

    const navigate = useNavigate();

    const menuItems = [
        {
            key: '/',
            label: 'Orders'
        },
        {
            key: 'menu',
            label: 'Resturaunt Menu'
        },
        {
            key: 'Resturaunt',
            label: 'Create Resturaunt'
        }

    ];

    const onMenuItemClick = (menuItem) =>{
        navigate(menuItem.key);
    };
    return(
        <Menu items={menuItems} onClick={onMenuItemClick} />
    );

};

export default SideMenu;