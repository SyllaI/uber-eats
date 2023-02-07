import { useState, useEffect  } from "react";
import{Card,Table,Tag} from "antd"
import { useNavigate } from "react-router-dom";
import { DataStore } from "aws-amplify";
import{ Order } from '../../models'

const Orders = () => {

    const [orders, setOrders] = useState ([]);

    useEffect(() =>{
        DataStore.query(Order).then(setOrders);
    });

    //console.log(orders);




    const Navigate = useNavigate();

    const renderOrderStatus = (orderStaus) =>{


        const statusToColor = {
            PENDING: 'blue',
            COMPLETED: 'green',
            ACCEPTED:'orange',
            DECLINED:'red',
        }
       

        return <Tag color={statusToColor[orderStaus]}>{orderStaus}</Tag>

    }
    const tableColumns = [
        {
            title:'ID',
            dataIndex: 'id',
            key:'id',

        },
        {
            title:'Created At',
            dataIndex: 'createdAt',
            key:'createdAt'

        },
        {
            title:'Price',
            dataIndex: 'total',
            key:'total',
            render: (total) => `$${total.toFixed(2)}`,

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
                rowKey='id'
                onRow={(order) => ({
                    onClick: () => Navigate(`order/${order.id}`)
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