import {toast, Slide} from 'react-toastify';

export const toastError = (err: any) => toast(err.toString(), {
  transition: Slide,
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
});
