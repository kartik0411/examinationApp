import React, { useState } from "react";
import { Modal } from "antd";
const AddSchoolModal = ({
  children,
  open,
  setOpen,
  title = "",
  width = 1000,
}) => {
  return (
    <>
      <Modal
        title={title}
        centered
        open={open}
        footer={false}
        width={width}
        onCancel={() => setOpen(false)}
      >
        {children}
      </Modal>
    </>
  );
};
export default AddSchoolModal;
