import ProCard from "@ant-design/pro-card";
import {Card, Divider, Spin, Table} from "antd";
import Search from "antd/es/input/Search";
import {useEffect, useState} from "react";
import {listInterfaceInfoByPageUsingGET} from "@/services/hmapi-backend/interfaceInfoController";


const TableList: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<API.InterfaceInfo[]>([]);
  const [total, setTotal] = useState<number>(0);

  const loadData = async (current:number=1,pageSize:number=5)=>{
    setLoading(true);
    try{
      const res = await listInterfaceInfoByPageUsingGET({
        current,
        pageSize
      });
      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? 0);
    }catch (error:any){

    }
    setLoading(false);
  }
  useEffect(()=>{
    loadData();
  },[]);
  const columns = [
    {
      title: '接口名称',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      align: 'center'
    },
    {
      title: '接口说明',
      dataIndex: 'description',
      key: 'description',
      width: '40%',
      align: 'center'
    },
    {
      title: '调用次数',
      dataIndex: 'totalInvokes',
      key: 'totalInvokes',
      width: '30%',
      align: 'center'
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
            dataSource={list}
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
              total,
              onChange: (page, pageSize) => {
                loadData(page,pageSize);
              }
            }}

          />
        </Card>
      </Spin>
    </>
  );
};

export default TableList;
