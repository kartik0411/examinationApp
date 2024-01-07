import { notification } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToastWrapper = () => {
  const [api, contextHolder] = notification.useNotification();
  const { toast } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast.showToast) {
      openNotification();
    }
    return () => {
      dispatch({
        type: "RESET_TOAST_STATE",
      });
    };
  }, [toast.showToast]);
  const openNotification = () => {
    api[toast.toastType]({
      message: `${toast.message}`,
      placement: toast.placement,
    });
  };

  return <>{contextHolder}</>;
};

export default ToastWrapper;
