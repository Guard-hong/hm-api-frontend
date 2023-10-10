import ProCard from "@ant-design/pro-card";
import {Card, Divider, Spin, Table} from "antd";
import Search from "antd/es/input/Search";
import {useState} from "react";


const TableList: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const columns = [
    {
      title: '接口名称',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '接口说明',
      dataIndex: 'details',
      key: 'details',
      align: 'center'
    },
    {
      title: '调用次数',
      dataIndex: 'totalInvokes',
      key: 'totalInvokes',
      align: 'center'
    },
  ];
  const dataSource = [
    {
      key: '1432',
      name: '胡彦斌',
      details: 32,
      totalInvokes: '西湖区湖底公园1号',
    },
    {
      key: '2423',
      name: '胡彦祖',
      details: 42,
      totalInvokes: '西湖区湖底公园1号',
    },
    {
      key: '32423',
      name: '胡彦祖',
      details: 42,
      totalInvokes: '西湖区湖底公园1号',
    },
    {
      key: '4432',
      name: '胡彦祖',
      details: 42,
      totalInvokes: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '胡彦祖',
      details: 42,
      totalInvokes: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '胡彦祖',
      details: 42,
      totalInvokes: '西湖区湖底公园1号',
    },
    {
      key: '7',
      name: '胡彦祖',
      details: 42,
      totalInvokes: '西湖区湖底公园1号',
    }, {
      key: '8',
      name: '胡彦祖',
      details: 42,
      totalInvokes: '西湖区湖底公园1号',
    },
    {
      key: '9',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  const onSearch = () => {

  }


  return (
    <>
      <Card hoverable>
        <ProCard layout="center">
          <Search
            showCount
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            allowClear
            size={"large"}
            maxLength={50}
            enterButton="搜索"
            placeholder={"没有找到心仪的接口？快搜索一下吧"}
            onSearch={onSearch}
            style={{maxWidth: 600, height: 60}}/>
        </ProCard>
      </Card>
      <Divider/>
      <Spin spinning={loading}>
        <Card hoverable>
          <Table
            dataSource={dataSource}
            columns={columns}
            onRow={(record) => {
              return {
                onClick: (event) => {
                  console.log(record);
                }, // 点击行
              };
            }}
            pagination={{
              pageSize: 5,
              defaultPageSize: 5,
              total: dataSource.length,
              onChange: (page, pageSize) => {
                console.log(page, pageSize)
              }
            }}

          />
        </Card>
      </Spin>
    </>
  );
};

export default TableList;
