import { toast } from 'react-toastify';

/**
 * A variable defining if we are on the staging or production environment
 */
export const IS_DEV = process.env.NEXT_PUBLIC_ENVIRONMENT == 'DEV';

export const uniqueArray = (arr: string[] | number[]) =>
  Array.from(new Set([...arr]));

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied to clipboard');
  });
};
