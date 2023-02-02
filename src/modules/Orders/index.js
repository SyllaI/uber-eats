import{Card,Table,Tag} from "antd"
import orders from '../../data/dashboard/orders.json'
import { useNavigate } from "react-router-dom";


const Orders = () => {
    const Navigate = useNavigate();

    const renderOrderStatus = (orderStaus) =>{
        let color = '';

        if (orderStaus === 'Accepted'){
            color = 'green';
        } else if (orderStaus === 'Pending'){
            color = 'orange';
        } else {
            color = 'red';
        }

        return <Tag color={color}>{orderStaus}</Tag>

    }
    const tableColumns = [
        {
            title:'ID',
            dataIndex: 'orderID',
            key:'orderID',

        },
        {
            title:'Delivery Address',
            dataIndex: 'deliveryAddress',
            key:'deliveryAddress'

        },
        {
            title:'Price',
            dataIndex: 'price',
            key:'price',
            render: (price) => `$${price}`

        },
        {
            title:'Status',
            dataIndex: 'status',
            key:'status',
            render: renderOrderStatus

        },

    ]

    return(
        <Card title='Orders' style={styles.page}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                rowKey='orderID'
                onRow={(order) => ({
                    onClick: () => Navigate(`order/${order.orderID}`)
                })}

            />
        </Card>
    );
    
    


   
};

const styles = {
    
    page:{
        margin: 20
    },
};

export default Orders;