import { toast } from 'react-toastify';


export const logError = (message:string) => {
    toast.error(message);
}