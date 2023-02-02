import{ Card, Descriptions, Divider, List, Button} from 'antd';
import { useParams } from 'react-router-dom';
import dishes from '../../data/dashboard/dishes.json';

const DetailedOrder = () => {

    const { id } = useParams();




    const total= dishes.reduce((sum,dish) =>{
        return sum + (dish.quantity * dish.price)
    }, 0);


    return(
       <Card title={`Order Nmber ${id}`} style={styles.page}>
            <Descriptions bordered column={{lg:1, md:1,sm:1}}>
                <Descriptions.Item label='Order Status'>APPROVED</Descriptions.Item>
                <Descriptions.Item label='Customer'>Ibrahim Sylla</Descriptions.Item>
                <Descriptions.Item label='Customer address'>123 ave.</Descriptions.Item>
            </Descriptions>
            <Divider/>
            <List
                dataSource={dishes}
                renderItem={(dishItem) =>(
                    <List.Item>
                        <div style={styles.dishItem}>{dishItem.name} X{dishItem.quantity}</div>
                        <div>${dishItem.price}</div>
                    </List.Item>



                )}
            >

            </List>
            <Divider />
            <div Style={styles.totalContainer}>
                <h2>Total:</h2>
                <h2 style={styles.totalPrice}>${total}</h2>
            </div>
            <Divider />
            <div Style={styles.buttonsContainer}>
                <Button
                block
                danger
                type='primary'
                size='large'
                style={styles.button}
                >
                    Decline Order

                </Button>
                <Button
                block
                type='primary'
                size='large'
                style={styles.button}
                >
                    Accept Order

                </Button>
                <Button
                block
                type='default'
                size='large'
                style={styles.button}
                >
                    Food is done

                </Button>

            </div>
       </Card>
    );
};

const styles = {
    page:{
        margin: 20
    },

    dishItem:{
        fontweight: 'bold',
    },

    totalContainer:{
        flexDirection: 'row',
        display: 'flex',

    },

    totalPrice:{
        margin:'auto',
    },

    buttonsContainer:{
        display: 'flex',
        paddingBottom: 30,
    },
    button:{
        marginRight: 5,
        marginLeft: 5,
    },



}

export default DetailedOrder;