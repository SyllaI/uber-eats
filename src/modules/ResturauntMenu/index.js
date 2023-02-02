import { Card, Table, Button, Menu } from "antd";
import dishes from '../../data/dashboard/dishes.json';
import { Link } from "react-router-dom";


const ResturauntMenu = () => {
    
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
            render: (price) => `$${price}`,
        },
        {
            title: 'Action',
            key: 'action',
            render: () => <Button danger type="primary">Remove</Button>
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