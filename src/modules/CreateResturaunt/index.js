import { Card, Form, Input, Button, message } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Resturaunt } from "../../models";
import ResturauntContextProvider, { useResturauntContext } from "../../context/ResturauntContext";


const {TextArea} = Input;
const CreateResturaunt = () => {
        const [name, setName] = useState('');
        const [address, setAddress] = useState('');
        const [image, setImage] = useState('');

        const {sub, setResturaunt, resturaunt} = useResturauntContext();

useEffect(() => {
        if(!resturaunt){
                   return;
                }
        setName(resturaunt.name);
        setAddress(resturaunt.address);
        setImage(resturaunt.image);
        }, [resturaunt]);

        const onFinish = async () => {
        if(!name){
                message.error('Name required!');
                return;
        }
        if(!address){
                message.error('Address required!');
                return;
        }
        if(!image){
                message.error('Image link required!');
                return;
        }
       if (!resturaunt) {
        await CreateNewResturaunt();
       } else{
        await updateResturaunt();
       }
};

        const updateResturaunt = async () => {
                const updateResturaunt = await DataStore.save(
                        Resturaunt.copyOf(resturaunt, (updated) => {
                                updated.name = name;
                                updated.address = address;
                                updated.image = image;
                        })
                );
                setResturaunt(updateResturaunt);
                message.success('Resturaunt updated!');
        };
        const CreateNewResturaunt = async () => {
                const newResturaunt = DataStore.save(new Resturaunt({
                        name,
                        image,
                        address,
                        adminSub: sub,
                }));
                setResturaunt(newResturaunt);
                message.success('Resturaunt created!');
        };
       


return (
        <Card title={'Create New Resturaunt'} style={styles.page}>
                <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item label={'Name'} required >
                                <Input
                                 placeholder="Enter Name"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)} 
                                 />
                        </Form.Item>
                        <Form.Item label={'Address'} required>
                                <Input
                                 placeholder="Enter Address"
                                 value={address}
                                 onChange={(e) => setAddress(e.target.value)} 
                                 />
                        </Form.Item>
                <Form.Item label={'Image'} required>
                        <Input 
                        placeholder="Enter Image Link"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} 
                        
                        />
                </Form.Item>
                <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
        </Form >
        </Card >
);
};






const styles = {
    page:{
        margin: 20
    },
};

export default CreateResturaunt;