import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";

function FloatButtonGroup({ children }) {
  return (
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ right: 70 }}
      icon={<PlusOutlined />}
    >
      {children}
    </FloatButton.Group>
  );
}

export default FloatButtonGroup;
