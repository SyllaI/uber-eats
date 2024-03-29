import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useResturauntContext } from "../../context/ResturauntContext";


const SideMenu = () => {

    const navigate = useNavigate();
    const {resturaunt} = useResturauntContext();

    const mainMenuItems = [
        {
            key: '/',
            label: 'Orders'
        },
        {
            key: 'menu',
            label: 'Resturaunt Menu'
        },
        {
            key: 'OtherResturaunts',
            label: 'Other Restaurants'
        }
    ];
    

    const menuItems = [
        ...(resturaunt ? mainMenuItems: []),
        {
            key: 'Resturaunt',
            label: 'Create Resturaunt'
        },
        {
            key: 'signout',
            label: 'Sign Out'
        }
        

    ];

    const onMenuItemClick = async (menuItem) =>{
        if(menuItem.key === 'signout'){
            await Auth.signOut();
            window.location.reload();
        } else if (menuItem.key === 'OtherResturaunts') {
            navigate('/OtherResturaunts');
        } else {
            navigate(menuItem.key);
        }
    };
    return(
       <>
        {resturaunt && (<h2 style={{color:'white'}}>{resturaunt.name}</h2>)}
        <Menu items={menuItems} onClick={onMenuItemClick} />
       </>
    );
}

export default SideMenu;