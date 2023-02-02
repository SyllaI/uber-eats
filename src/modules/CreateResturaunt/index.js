import { Card, Form, Input, Button, message } from "antd";

const { TextArea } = Input;

const CreateResturaunt = () => {
    const onFinish = ({name, address}) => {
        if(!name){
                message.error('Name required!');
                return;
        }
        if(!address){
                message.error('Address required!');
                return;
        }
        message.success('Resturtaunt Created!')
}

return (
        <Card title={'Create New Resturaunt'} style={styles.page}>
                <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item label={'Name'} required name='name'>
                                <Input placeholder="Enter Name" />
                        </Form.Item>
                        <Form.Item label={'Address'} required name='address'>
                                <TextArea
                                        rows={1}
                                        placeholder='Enter Address'
                                />
                        </Form.Item>
                <Form.Item label={'Image'} required name='image'>
                        <Input placeholder="Enter Image Link"/>
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