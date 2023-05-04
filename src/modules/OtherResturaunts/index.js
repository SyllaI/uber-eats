import { Table } from 'antd';
import { useResturauntContext } from '../../context/ResturauntContext';

const OtherResturaunts = () => {
  const { resturaunts, resturaunt } = useResturauntContext();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Image Link',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <a href={record.image} target="_blank" rel="noopener noreferrer">
          <img src={record.image} alt={record.name} style={{ width: '100px' }} />
        </a>
      ),
    },
  ];

  let data = [];
  if (resturaunts && resturaunts.length > 0) {
    data = resturaunts
      .filter((r) => r.id !== resturaunt.id)
      .map((r) => ({ key: r.id, name: r.name, address: r.address, image: r.image }));
  }

  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  );
};

export default OtherResturaunts;

