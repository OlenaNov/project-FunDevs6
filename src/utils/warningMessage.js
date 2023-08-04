import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function userAuthCheck() {
  toast.warning(
    'You must be registered or logged in to continue the operation'
  );
}

export function authErrorMessage(error) {
  switch (error.status) {
    case 400:
      toast.warning(
        `${error.data.message}. Try it again\nError ${error.status}`
      );
      break;
    case 401:
      toast.warning(
        `${error.data.message}. Try it again\nError ${error.status}`
      );
      break;
    case 409:
      toast.warning(
        `${error.data.message}. Try another one or log in. 
        Error ${error.status}`
      );
      break;
    case 500:
      toast.warning(
        `Unfortunately, something has gone wrong. Please refresh your browser\nError ${error.status}`
      );
      break;
    default:
      toast.warning(
        `Oops, something went wrong...Try it again\nError ${error.status} ${error.statusText} `
      );
  }
}
