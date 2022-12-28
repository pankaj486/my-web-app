import { toast } from 'react-toastify';

const Toast = () => {

  const showToast = (message:string, type:string) => {
    if (type === 'error') {
      toast.error(message);
    } else if (type === 'success') {
      toast.success(message);
    } else if (type === 'warning') {
      toast.warning(message);
    } else {
      toast.info(message);
    }
  };

  return {
    showToast
  }
};

export default Toast;
