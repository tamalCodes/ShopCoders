import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import { useNavigate } from "react-router-dom"; */

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });
};
export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 1300,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });
};
