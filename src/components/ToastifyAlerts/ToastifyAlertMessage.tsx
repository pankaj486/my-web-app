import React from 'react';
import { toast } from 'react-toastify';
import { ToastifyProps } from '../../serviceType/service';


const Toastify: React.FC<ToastifyProps> = ({ message, type, duration, options }) => {
  toast[type || 'info'](message, {
    position: options?.position || 'top-right',
    autoClose: duration || 5000,
    ...options
  });
  return null;
}

export default Toastify;
