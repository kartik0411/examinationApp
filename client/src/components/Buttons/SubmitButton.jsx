import React, { useState } from "react";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: "Submit and continue",
    key: "1",
  },
];
const SubmitButton = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Space direction="vertical">
      <Dropdown.Button
        type="primary"
        loading={loadings[0]}
        menu={{
          items,
        }}
        onClick={() => enterLoading(0)}
      >
        Submit
      </Dropdown.Button>
    </Space>
  );
};
export default SubmitButton;
