/**
 * A variable defining if we are on the staging or production environment
 */
export const IS_DEV = process.env.NEXT_PUBLIC_ENVIRONMENT == 'DEV';

export const uniqueArray = (arr: string[] | number[]) =>
  Array.from(new Set([...arr]));

export const openNewWindow = (url: string, { target = '_blank' } = {}) => {
  window.open(url, target);
};
