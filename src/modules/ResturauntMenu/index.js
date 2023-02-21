import { Card, Table, Button, message, Popconfirm } from "antd";
import { DataStore } from "aws-amplify";
import { useEffect,useState } from "react";
import ResturauntContextProvider, { useResturauntContext } from "../../context/ResturauntContext";
import { Dish } from "../../models";
import { Link } from "react-router-dom";



const ResturauntMenu = () => {

    const [dishes, setDishes] = useState([]);
    const {resturaunt} = useResturauntContext();

    useEffect (() => {
        if (!resturaunt?.id){
            return;
        }
        DataStore.query(Dish,d =>
            d.resturauntID.eq(resturaunt.id)).then(setDishes);
    },[resturaunt?.id]);

    const deleteDish = async (item) => {
        await DataStore.delete(Dish, d => d.id.eq(item.id));
        setDishes(dishes.filter((d) => d.id !== item.id));
        message.success('Dish deleted.');


    } 
    
    const renderNewItemButton = () => {
        return(
            <Link to={'create'}>
                <Button type="primary">New Item</Button>
            
            </Link>
        )
    };

    const tableColumns = [
        {
            title:'Menu Item',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price.toFixed(2)}`,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) =>(
                <Popconfirm
                placement="topLeft"
                title={'are you sure you want to delete this dish'}
                onConfirm={() => deleteDish(item)}
                okText='Yes'
                cancelText='No'
                >  
                    <Button danger type="primary">Remove</Button>

                </Popconfirm>

            ) 
        }

    ];


    return(
        <Card title= {'Menu'} style={styles.page} extra={renderNewItemButton()}>
            <Table
             dataSource={dishes}
             columns={tableColumns}
             rowKey='id'
            
            />

        </Card>
       
    );

};
const styles = {
    page:{
        margin: 20
    },
};

export default ResturauntMenu;