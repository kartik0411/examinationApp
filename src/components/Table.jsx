import { Table } from "antd";

const TabbleComponent = ({ columns, data = [], onChange }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      scroll={{ x: 1500, y: 600 }}
      style={{ height: "200px" }}
      pagination={false}
    />
  );
};

export default TabbleComponent;
