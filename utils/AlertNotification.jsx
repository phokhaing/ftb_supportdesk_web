import { toast } from "react-toastify";

const setNotify = {
  theme: "colored", // light, dark colored
  position: "top-right", // top-left ,top-right, top-center, bottom-left, bottom-right, bottom-center
  autoClose: 500,
};

export const Notification = {
  success: (msg = "Success!") => {
    toast.success(msg, {
      position: setNotify.position,
      autoClose: setNotify.autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: setNotify.theme,
    });
  },
  error: (msg = "Error!") => {
    toast.error(msg, {
      position: setNotify.position,
      autoClose: setNotify.autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: setNotify.theme,
    });
  },
  warning: (msg = "Warning!") => {
    toast.warning(msg, {
      position: setNotify.position,
      autoClose: setNotify.autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: setNotify.theme,
    });
  },
  default: (msg) => {
    toast.default(msg, {
      position: setNotify.position,
      autoClose: setNotify.autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: setNotify.theme,
    });
  },
  info: (msg) => {
    toast.info(msg, {
      position: setNotify.position,
      autoClose: setNotify.autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: setNotify.theme,
    });
  },
};
